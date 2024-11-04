// import { FaFacebook, FaTwitter } from "react-icons/fa";
// import buleShirtGuy from "../../assets/buleShirtGuy.png"

// const articles = [
//   {
//     id: 1,
//     category: "Sport",
//     title: "Nigerian Sports Journalists In Diaspora Pay Tribute To Ukaigwe",
//     imgSrc: buleShirtGuy,
//   },
//   {
//     id: 2,
//     category: "Finance",
//     title: "Nigeria’s Inclusion In Countries Likely To Face Crisis Reiterates.",
//     imgSrc: "image_url_2",  // Update this with the actual image URL or local image path
//   },
//   {
//     id: 3,
//     category: "Sport",
//     title: "Report: Liverpool Pushing For Victor Osimhen Deal",
//     imgSrc: "image_url_3",  // Update this with the actual image URL or local image path
//   },
// ];

// const App = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//             {/* Image Section */}
//             <img src={article.imgSrc} alt={article.title} className="h-60 w-full object-cover" />

//             {/* Content Section */}
//             <div className="p-4">
//               {/* Category Tag */}
//               <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium">
//                 {article.category}
//               </span>

//               {/* Article Title */}
//               <h3 className="text-xl font-semibold mt-3">{article.title}</h3>

//               {/* Social Media Icons - Display only for articles other than the first */}
//               {article.id !== 1 && (
//                 <div className="flex items-center space-x-4 mt-3 text-gray-500">
//                   <span>Share:</span>
//                   <FaFacebook className="hover:text-blue-600 cursor-pointer" />
//                   <FaTwitter className="hover:text-blue-400 cursor-pointer" />
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* More News Button */}
//       <div className="text-center mt-8">
//         <button className="px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none">
//           MORE NEWS
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

import { FaFacebook, FaTwitter } from "react-icons/fa";
import buleShirtGuy from "../../../public/assets/buleShirtGuy.png";
import classWithWhiteWoman1 from "../../../public/assets/classWithWhiteWoman1.png";
import calculatorAndPen1 from "../../../public/assets/calculatorAndPen1.png";

export default function gridSection() {
  return (
    <div>
      <section>
        <div className=" w-full md:flex space-around p-8 gap-8 justify-center md:px-20 text-[#333333] space-y-11">
          <div
            className="w-full object-contain row-start-1 h-[80vh] md:h-auto row-end-3 md:w-[55%] bg-no-repeat bg-cover bg-[#3f3d3d] bg-center p-9 flex flex-col justify-end"
            style={{
              backgroundImage: `url(${buleShirtGuy})`,
              backgroundSize: "cover",
            }}
          >
            <div className="rounded-md bg-[#FFFFFF] p-5 text-[#333333] space-y-4">
              <h1 className="px-6 py-2 sm:text-[14px] text-[12px] md:text-[16px] font-semibold bg-[#B4020A26] inline-block">
                SPORT
              </h1>
              <p className="text-[14px] sm:text-[18px] md:text-[24px] font-semibold">
                nigerian sports journalists is diaspora pay tribute to ukaigwe
              </p>
            </div>
          </div>
          <div className="w-full md:w-[30%] space-y-5 text-center md:text-left">
            <div className="flex items-center md:inline-block justify-center">
              <img src={classWithWhiteWoman1} alt="" />
            </div>
            <div>
              <div className="space-y-4">
                <h1 className="px-5 py-2 sm:text-[14px] text-[12px] md:text-[16px] font-semibold bg-[#B4020A26] inline-block">
                  FINANCE
                </h1>
                <p className="text-[14px] sm:text-[18px] md:text-[24px] font-semibold">
                  nigeria’s inclusion in countries likely to face crisis
                  reiterates.
                </p>
                <div className="flex items-center justify-around md:justify-start gap-5 text-[#BCBCBC] text-[16px] font-semibold">
                  <span>Share:</span>
                  <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] space-y-5 text-center md:text-left">
            <div className="flex md:inline-block justify-center items-center">
              <img src={calculatorAndPen1} alt="" />
            </div>
            <div>
              <div className="space-y-4">
                <h1 className="px-5 py-2 sm:text-[14px] text-[12px] md:text-[16px] font-semibold bg-[#B4020A26] inline-block">
                  SPORT
                </h1>
                <p className="text-[14px] sm:text-[18px] md:text-[24px] font-semibold md:pr-10">
                  report: liverpool pushing for victor osimhen deal
                </p>
                <div className="flex items-center justify-around md:justify-start gap-5 text-[#BCBCBC] text-[16px] font-semibold">
                  <span>Share:</span>
                  <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* More News Button */}
        {/* <div className="text-center mt-8">
          <button className="px-5 py-2 bg-white text-red-600 border border-x-red-600 rounded-md hover:bg-red-600 border-y-2 font-bold text-[16px] hover:text-white focus:outline-none">
            MORE NEWS
          </button>
        </div> */}
      </section>
    </div>
  );
}
