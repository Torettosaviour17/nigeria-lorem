export default function beforeSigin() {
  return (
    <div>
      <section className="bg-[#102C88] lg:p-12">
        <div className="w-full text-center text-white flex justify-center items-center">
         <div className="p-3 md:p-auto md:w-[50%] space-y-3">
         <h1 className="md:text-[32px] font-bold">
            <span className="text-[#FFB313]">Lorem</span> ipsum dolor
          </h1>
          <p className="md:text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tellus nibh consequat donec amet vel. Eget ultrices arcu vel
            sollicitudin mauris bibendum. Neque, imperdiet magna sagittis ut
            gravida sit mauris.
          </p>
         </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 lg:px-36 pt-6 gap-10">
          <div className="bg-white p-6 rounded-md space-y-5">
            <h1 className="text-[#B4020A] text-[18px] sm:text-[20px]:md:text-[24px] font-semibold after:block after:h-[0.4em] after:w-[40%] after:rounded-lg after:bg-yellow-500">
              Do you have what it takes to be a contributor?
            </h1>
            <p className="text-[#333333] md:text-[16px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque interdum nunc orci pharetra. Amet a tincidunt blandit
              non non. At morbi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Scelerisque interdum nunc orci pharetra. Amet a
              tincidunt blandit non non. At morbi.
            </p>
            <button className="text-white hidden sm:inline font-bold lg:text-[16px] px-5 py-2 rounded-md bg-[#B4020A]">
              BECOME A CONTRIBUTOR
            </button>
          </div>
          <div className="bg-white p-6 rounded-md space-y-5">
            <h1 className="text-[#B4020A]  text-[18px] sm:text-[20px]:md:text-[24px] font-semibold after:block after:h-[0.4em] after:w-[40%] after:rounded-lg after:bg-yellow-500">
              Join our committee of learned individuals
            </h1>
            <p className="text-[#333333] md:text-[16px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque interdum nunc orci pharetra. Amet a tincidunt blandit
              non non. At morbi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Scelerisque interdum nunc orci pharetra. Amet a
              tincidunt blandit non non. At morbi.
            </p>
            <button className="text-white  hidden sm:inline font-bold lg:text-[16px] px-5 py-2 rounded-md bg-[#B4020A]">
              JOIN A COMMITTEE
            </button>
          </div>
          <div className="bg-white p-6 rounded-md space-y-5">
            <h1 className="text-[#B4020A] text-[18px] sm:text-[20px]:md:text-[24px] font-semibold after:block after:h-[0.4em] after:w-[40%] after:rounded-lg after:bg-yellow-500">
              Never miss out on past events
            </h1>
            <p className="text-[#333333] md:text-[16px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque interdum nunc orci pharetra. Amet a tincidunt blandit
              non non. At morbi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Scelerisque interdum nunc orci pharetra. Amet a
              tincidunt blandit non non. At morbi.
            </p>
            <button className=" text-white hidden sm:inline font-bold lg:text-[16px] px-5 py-2 rounded-md bg-[#B4020A]">
              VIEW EVENTS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
