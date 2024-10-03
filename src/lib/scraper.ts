import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';

const SCRAPINGANT_API_KEY = process.env.SCRAPINGANT_API_KEY;

export async function scrapeWebsite(url: string): Promise<string> {
  try {
    console.log('Scraping URL:', url);
    console.log('ScrapingAnt API Key:', SCRAPINGANT_API_KEY ? 'Set' : 'Not set');

    const response = await axios.get('https://api.scrapingant.com/v2/general', {
      params: {
        url: url,
        "x-api-key": SCRAPINGANT_API_KEY
      }
    });

    console.log('ScrapingAnt Response:', response.data);

    // Extract the HTML content from the response
    const htmlContent = response.data.content || response.data;
    
    if (!htmlContent) {
      console.error('ScrapingAnt response:', response.data);
      throw new Error('No content returned from ScrapingAnt');
    }

    // Escape special characters in the HTML content
    const escapedContent = JSON.stringify(htmlContent);

    // Save the scraped content to a file
    const filePath = path.join(process.cwd(), 'src', 'helpers', 'constants', 'scraped-data.ts');
    const fileContent = `export const scrapedData = ${escapedContent};\n`;
    await fs.writeFile(filePath, fileContent);

    return htmlContent;
  } catch (error) {
    console.error('Error scraping website with ScrapingAnt:', error);
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', error.response?.data);
    }
    throw error;
  }
}
