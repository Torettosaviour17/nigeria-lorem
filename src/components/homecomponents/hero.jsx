import firstHeroPic from "../../../public/assets/firstHeroPic.png";
import secondHeroPic from "../../../public/assets/secondHeroPic.png";

export default function hero() {
  return (
    <div>
      <section className="md:flex space-y-3 items-center justify-around px-10 gap-3 w-full">
        <div
          className=" w-full h-[80vh] md:w-[55%] bg-no-repeat bg-cover rounded-xl bg-[#3f3d3d] bg-center p-9 flex flex-col justify-end"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${firstHeroPic})`,
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1 className="bg-[#B4020A] inline-block  text-white px-5 rounded-lg font-semibold lg:text-[16px] py-2">POLITICS</h1>
            <p className="text-[#FFFFFF] font-bold lg:text-[24px]">Lorem ipsum dolor sit amet, <br /> nsect etur adipiscing.</p>
          </div>
        </div>
        <div
          className=" w-full md:w-[40%] bg-[#272323] bg-no-repeat h-[80vh] bg-cover bg-center  p-9 flex flex-col justify-end rounded-xl"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${secondHeroPic})`,
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1 className="bg-[#B4020A] inline-block  text-white px-5 rounded-lg font-semibold lg:text-[16px] py-2">SPORT</h1>
            <p className="text-[#FFFFFF] font-bold lg:text-[24px]">Lorem ipsum dolor sit amet, <br /> nsect etur adipiscing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
