import { FaFacebook, FaTwitter } from "react-icons/fa";
import stadium from "../../../public/assets/stadium.png";
import nigeria from "../../../public/assets/nigerian.png";
import forever from "../../../public/assets/forever.png";

export default function secondGridSection() {
  return (
    <div>
      <section className="pt-8">
        <div className=" w-full flex space-around gap-8 justify-center px-20 text-[#333333]">
          <div className=" w-[30%] space-y-5">
            <img src={nigeria} alt="" />
            <div>
              <div className="space-y-4">
                <h1 className="px-5 py-2 text-[16px] font-semibold bg-[#B4020A26] inline-block">
                  FINANCE
                </h1>
                <p className="text-[24px] font-semibold md:pr-10">
                  nigeria’s inclusion in countries likely to face crisis
                  reiterates.
                </p>
                <div className="flex items-center justify-start gap-5 text-[#BCBCBC] text-[16px] font-semibold">
                  <span>Share:</span>
                  <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[30%] space-y-5">
            <img src={forever} alt="" />
            <div>
              <div className="space-y-4">
                <h1 className="px-5 py-2 text-[16px] font-semibold bg-[#B4020A26] inline-block">
                  SPORT
                </h1>
                <p className="text-[24px] font-semibold md:pr-10">
                  report: liverpool pushing for victor osimhen deal
                </p>
                <div className="flex items-center justify-start gap-5 text-[#BCBCBC] text-[16px] font-semibold">
                  <span>Share:</span>
                  <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div
            className=" w-[40%] h-[80vh] object-contain row-start-1 row-end-3 md:w-[55%] bg-no-repeat bg-cover bg-[#3f3d3d] bg-center p-9 flex flex-col justify-end"
            style={{
              backgroundImage: `url(${stadium})`,
              backgroundSize: "cover",
            }}
          >
            <div className="rounded-md bg-[#FFFFFF] p-5 text-[#333333] space-y-4">
              <h1 className="px-6 py-2 text-[16px] font-semibold bg-[#B4020A26] inline-block">
                SPORT
              </h1>
              <p className="text-[24px] font-semibold">
                nigerian sports journalists is diaspora pay tribute to ukaigwe
              </p>
            </div>
          </div>
        </div>
        {/* More News Button */}
        <div className="text-center mt-8">
          <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
            MORE NEWS
          </button>
        </div>
      </section>
    </div>
  );
}
