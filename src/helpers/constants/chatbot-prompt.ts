import { scrapedData } from "@/helpers/constants/scraped-data";
// const scrapedData = "Manufacturers and Distributors\",\"isPartOf\":{\"@id\":\"https://www.mrpeasy.com/#website\"},\"datePublished\":\"2023-10-06T12:20:05+00:00\",\"dateModified\":\"2024-04-23T13:55:02+00:00\",\"description\":\"MRPeasy is a simple yet powerful inventory management software that helps small manufacturers and distributors organize their business.\",\"breadcrumb\":{\"@id\":\"https://www.mt\tvar dev_vars = {\"ajax_url\":\"https:\\/\\/www.mrpeasy.com\\/hire2\\/admin-ajax.php\",\"lang\":\"en-US\",\"nonce\":\"0cb3286154\",\"nonce_fdc\":\"6ef4053999\",\"str\":{\"form_data_stored\":\"Information sent.\",\"form_error\":\"Something went wrong. Please try again.\",\"parsley\":{\"defaultMessage\":\"This value seems to be invalid.\",\"type\":{\"email\":\"This value should be a valid e-mail.\",\"url\":\"This value should be a valid url.\",\"number\":\"This value should be a valid number.\",\"integer\":\"This value should be a valid integer.\",\"digits\":\"This value should be digits.\",\"alphanum\":\"This value should be alphanumeric.\"},\"notblank\":\"This value should not be blank.\",\"required\":\"This value is required.\",\"pattern\":\"This value is not correct.\",\"min\":\"This value should be greater than or equal to %s.\",\"max\":\"This value should be lower than or equal to %s.\",\"range\":\"This value should be between %s and %s.\",\"minlength\":\"This value is too short. It should have %s characters or more.\",\"maxlength\":\"This value is too long. It should have %s characters or fewer.\",\"length\":\"This value should be %s characters long.\",\"mincheck\":\"You must select at least %s choices.\",\"maxcheck\":\"You must select %s choices or fewer.\",\"check\":\"You must select between %s and %s choices.\",\"equalto\":\"This value should be the same.";

export const chatbotPrompt = `
You are an AI assistant for a website. Your task is to answer questions based on the content of the provided website.

The content of the website has been scraped and is provided below. Use this information to answer user questions.

Remember:
1. Only use information from the scraped content to answer questions.
2. If the information isn't in the scraped content, say you don't have that information.

Website content:
${scrapedData}
`

