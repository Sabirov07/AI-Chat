// NOT FOR USE 




// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Home() {
//   const [url, setUrl] = useState("");
//   const [scrapedData, setScrapedData] = useState([]);
//   const [error, setError] = useState(null);

//   const handleScrape = async () => {
//     try {
//       const encodedUrl = encodeURIComponent(url);
//       console.log(`Fetching data from /api/scrape?url=${encodedUrl}`);

//       const response = await fetch(`/api/scrape?url=${encodedUrl}`);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(
//           `Network response was not ok: ${response.status} - ${errorText}`
//         );
//       }

//       const { data } = await response.json();
//       setScrapedData(data);
//       setError(null);
//     } catch (error) {
//       console.error("Failed to fetch data:", error);
//       setError(`Failed to fetch data: ${error.message}`);
//     }
//   };

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />

//         <input
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter website URL"
//           className="border text-black p-2 rounded"
//         />
//         <button
//           onClick={handleScrape}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Scrape Data
//         </button>

//         {error && <p className="text-red-500">{error}</p>}

//         <div>
//           <h2>All H1&apos;s:</h2>
//           <ul className="space-y-3">
//             {scrapedData.map((item, index) => (
//               <li
//                 key={index}
//                 className="p-2 rounded-sm bg-slate-500 border-slate-700 shadow-sm shadow-slate-500/20"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </main>
//     </div>
//   );
// }
