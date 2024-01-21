import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="absolute left-0 top-0 z-0 h-[375px] w-[375px] translate-x-[-50%] translate-y-[-50%] lg:left-56 lg:h-[978px] lg:w-[978px]">
        <Image
          className="object-contain"
          src="/assets/bg-pattern-top.svg"
          alt=""
          fill
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0 h-[375px] w-[375px] translate-x-[50%] translate-y-[50%] lg:right-56 lg:h-[978px] lg:w-[978px]">
        <Image
          className="object-contain"
          src="/assets/bg-pattern-bottom.svg"
          alt=""
          fill
        />
      </div>
      <main className="z-10 flex w-80 flex-col items-center gap-6 overflow-hidden rounded-xl bg-white bg-card bg-no-repeat pt-[92px] lg:w-96 lg:bg-contain lg:pt-[98px]">
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-[0_0_1.5px_6px_rgb(250,250,250)] lg:h-28 lg:w-28">
            <Image
              className="object-contain"
              src="/assets/image-victor.jpg"
              alt=""
              fill
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <h1 className="text-lg font-bold text-veryDarkDesaturatedBlue lg:text-xl">
                Victor Crest
              </h1>
              <h2 className="text-lg text-darkGrayishBlue lg:text-xl">26</h2>
            </div>
            <h3 className="text-center text-sm lg:text-base text-darkGrayishBlue">London</h3>
          </div>
        </div>
        <div className="flex w-full justify-center gap-5 lg:gap-8 border-t border-darkGray border-opacity-25 py-6">
          <div className="flex w-16 flex-col items-center">
            <h2 className="text-lg lg:text-xl font-bold">80K</h2>
            <h3 className="text-xs tracking-widest text-darkGray">Followers</h3>
          </div>
          <div className="flex w-16 lg:text-xl flex-col items-center">
            <h2 className="text-lg font-bold">803K</h2>
            <h3 className="text-xs tracking-widest text-darkGray">Likes</h3>
          </div>
          <div className="flex w-16 lg:text-xl flex-col items-center">
            <h2 className="text-lg font-bold">1.4K</h2>
            <h3 className="text-xs tracking-widest text-darkGray">Photos</h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
