import together from "../../../public/assets/togetherHand.png";

export default function sigin() {
  return (
    <div>
      <section
        className=" w-full bg-no-repeat bg-cover bg-[#3f3d3d] bg-center md:flex md:justify-around items-center lg:p-6"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${together})`,
          backgroundSize: "cover",
        }}
      >
        <div className="md:w-1/2 p-7 md:p-auto text-white text-center md:text-left inline-block">
          <h1 className="after:block after:h-[0.4em] after:w-[40%] after:rounded-lg after:bg-yellow-500 after:z-[-10] inline-block  text-[22px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-bold">
            <span className="text-[#FFB313]">Donate</span> to make nigeria
            better
          </h1>
          <p>
            <p className="sm:text-[14px] lg:text-[16px] font-normal  my-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque interdum nunc orci pharetra. Amet a tincidunt blandit
              non non. At morbi.
            </p>
          </p>
        </div>
        <form className="w-full md:w-1/2 text-center">
          <div className="w-full p-4 pb-2 sm:space-x-5 justify-center items-center flex flex-col gap-5 sm:gap-2 sm:flex-row">
            <input type="text" name="" className="w-[79%] md:w-[40%] p-3 rounded-md" id="" placeholder="Full Name" />
            <input type="mail" name="" className="w-[79%] md:w-[40%] p-3 rounded-md" id="" placeholder="Email Address" />
          </div>
          <input type="number" className="w-[74%] sm:w-[95%] md:w-[79%] rounded-md p-3 m-4" name="" id="" placeholder="Donation Amount" />
          <br />
          <button className="text-white hidden sm:inline font-bold lg:text-[16px] px-10 py-3 rounded-md bg-[#B4020A]">DONATE</button>
        </form>
      </section>
    </div>
  );
}
