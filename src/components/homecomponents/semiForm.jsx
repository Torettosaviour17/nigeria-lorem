export default function semiForm() {
  return (
    <div>
      <section className="flex flex-col gap-7 p-20">
        <div className="text-white bg-[#102C88] text-center bg-[]#102C88 p-9 space-y-4">
          <h1 className="md:text-[32px] font-bold">
            Lorem ipsum dolor Lorem{" "}
            <span className="text-[#FFB313]">ipsum dolor</span> Lorem ipsum
            dolor
          </h1>
          <button className="text-white hidden sm:inline font-bold lg:text-[16px] px-5 py-2 rounded-md bg-[#B4020A]">
            SUBSCRIBE
          </button>
        </div>
        <div className="border border-[#000000] p-10 space-y-6">
          <h1 className="text-[#B4020A] lg:text-[32px] sm:text-[20px]:md:text-[24px] font-bold after:block after:h-[0.4em] after:w-[20%] after:rounded-lg after:bg-yellow-500">
            Never miss out on our updates
          </h1>
          <div className="space-x-4">
            <input type="text" name="" id="" className="w-[60%] border p-2" placeholder="Email Address"/>
            <button className="text-white hidden sm:inline font-bold lg:text-[16px] px-12 py-2 rounded-md bg-[#B4020A]">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-[#333333] text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tellus nibh consequat donec amet vel. Eget ultrices arcu vel
            sollicitudin mauris bibendum. Neque, imperdiet magna sagittis ut
            gravida sit mauris. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla tellus nibh consequat donec amet vel. Eget
            ultrices arcu vel sollicitudin mauris bibendum. Neque, imperdiet
            magna sagittis ut gravida sit mauris. l. Eget ultrices arcu vel
            sollicitudin mauris bibendum.
          </p>
        </div>
      </section>
    </div>
  );
}
