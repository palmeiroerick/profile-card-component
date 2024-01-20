import Image from "next/image";

const Home = () => {
  return (
    <>
      <Image
        className="absolute left-0 top-0 z-0 translate-x-[-50%] translate-y-[-50%]"
        src="/assets/bg-pattern-top.svg"
        alt=""
        width={375}
        height={375}
      />{" "}
      <Image
        className="absolute bottom-0 right-0 z-0 translate-x-[50%] translate-y-[50%]"
        src="/assets/bg-pattern-bottom.svg"
        alt=""
        width={375}
        height={375}
      />
      <main className="bg-card bg-white z-10 flex w-80 flex-col items-center gap-6 overflow-hidden rounded-xl bg-no-repeat pt-[92px]">
        <div className="flex flex-col items-center gap-6">
          <Image
            className="rounded-full shadow-[0_0_1.5px_6px_rgb(250,250,250)]"
            src="/assets/image-victor.jpg"
            alt=""
            width={96}
            height={96}
          />
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <h1 className="text-lg font-bold text-veryDarkDesaturatedBlue">
                Victor Crest
              </h1>
              <h2 className="text-lg text-darkGrayishBlue">26</h2>
            </div>
            <h3 className="text-center text-sm text-darkGrayishBlue">London</h3>
          </div>
        </div>
        <div className="flex w-full justify-center gap-5 border-t border-darkGray border-opacity-25 py-6">
          <div className="flex w-16 flex-col items-center">
            <h2 className="text-lg font-bold">80K</h2>
            <h3 className="text-xs tracking-widest text-darkGray">Followers</h3>
          </div>
          <div className="flex w-16 flex-col items-center">
            <h2 className="text-lg font-bold">803K</h2>
            <h3 className="text-xs tracking-widest text-darkGray">Likes</h3>
          </div>
          <div className="flex w-16 flex-col items-center">
            <h2 className="text-lg font-bold">1.4K</h2>
            <h3 className="text-xs tracking-widest text-darkGray">Photos</h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
