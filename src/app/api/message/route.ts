import { chatbotPrompt } from '@/helpers/constants/chatbot-prompt'
import {
  ChatGPTMessage,
  OpenAIStream,
  OpenAIStreamPayload,
} from '@/lib/openai-stream'
import { MessageArraySchema } from '@/lib/validators/message'
import { scrapeWebsite } from '@/lib/scraper'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const parsedMessages = MessageArraySchema.parse(messages)

    // Check if the user has provided a URL
    const urlMessage = parsedMessages.find(message => 
      message.isUserMessage && message.text.trim().startsWith('http')
    )

    if (urlMessage) {
      const websiteUrl = urlMessage.text.trim()
      try {
        await scrapeWebsite(websiteUrl)
      } catch (error) {
        console.error('Error scraping website:', error);
        return new Response(JSON.stringify({
          error: `Failed to scrape website content. Please check the URL and try again. Error: ${(error as Error).message || 'Unknown error'}`
        }), { status: 500 });
      }
    }

    const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
      return {
        role: message.isUserMessage ? 'user' : 'system',
        content: message.text,
      }
    })

    outboundMessages.unshift({
      role: 'system',
      content: chatbotPrompt,
    })

    const payload: OpenAIStreamPayload = {
      model: 'gpt-4',
      messages: outboundMessages,
      temperature: 0.4,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 150,
      stream: true,
      n: 1,
    }

    const stream = await OpenAIStream(payload)

    return new Response(stream)
  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(JSON.stringify({
      error: 'An unexpected error occurred. Please try again. Error: ' + 
        (error instanceof Error ? error.message : String(error))
    }), { status: 500 });
  }
}
