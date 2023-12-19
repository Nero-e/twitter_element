const SecondSection = () => {
  return (
    <>
      <section className="flex flex-col w-full h-full min-h-full relative overflow-hidden py-48 px-[10vw]">
        <div className="flex flex-col h-full z-30 relative">
          <div className="grid grid-rows-5 grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-3 lg:grid-cols-3 gap-4">
            <div className="hidden lg:flex lg:flex-col justify-center w-full h-full min-h-[22vw] items-center rounded-[4vw] text-white overflow-hidden col-start-1">
              <h1 className="text-4xl font-extrabold">
                Portfolio <br /> by <br /> Kevin Estipia
              </h1>
            </div>
            <div className="w-full h-full p-[1px] rounded-[4vw] bg-gradient-2 text-white cursor-pointer">
              <div className="flex flex-col justify-center w-full h-[35vh] md:h-full md:min-h-[22vw] items-center rounded-[4vw] bg-[#1b1b31] text-white overflow-hidden col-span-1 row-span-1 lg:col-start-2 lg:row-start-1">
                More About me
              </div>
            </div>
            <div className="w-full h-full p-[1px] rounded-[4vw] bg-gradient-2 text-white cursor-pointer">
              <div className="flex flex-col justify-center w-full h-[35vh] md:h-full md:min-h-[22vw] items-center rounded-[4vw] bg-[#1b1b31] text-white overflow-hidden md:col-start-2 md:row-start-1 md:row-span-1 lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-1">
                Tech Stack
              </div>
            </div>
            <div className="w-full h-full p-[1px] rounded-[4vw] bg-gradient-2 text-white cursor-pointer md:col-start-1 md:row-start-2 md:row-span-2  lg:col-start-1 lg:row-start-2 lg:col-span-1 lg:row-span-2">
              <div className="flex flex-col justify-center w-full h-[35vh] md:h-full md:min-h-[22vw] items-center rounded-[4vw] bg-[#1b1b31] text-white overflow-hidden md:col-start-1 md:row-start-2 md:row-span-2  lg:col-start-1 lg:row-start-2 lg:col-span-1 lg:row-span-2">
                Projects or my work
              </div>
            </div>
            <div className="w-full h-full p-[1px] rounded-[4vw] bg-gradient-2 text-white cursor-pointer col-span-1 md:row-start-2 md:row-span-1 lg:col-start-2 lg:row-start-2 lg:col-span-2 lg:row-span-1">
              <div className="flex flex-col justify-center w-full h-[35vh] md:h-full md:min-h-[22vw] items-center rounded-[4vw] bg-[#1b1b31] text-white overflow-hidden md:col-start-2 md:row-start-2 md:row-span-1 lg:col-start-2 lg:row-start-2 lg:col-span-2 lg:row-span-1">
                Ideas
              </div>
            </div>
            <div className="w-full h-full p-[1px] rounded-[4vw] bg-gradient-2 text-white cursor-pointer col-span-1 md:col-start-2 md:row-start-3 lg:row-start-3 lg:col-start-2">
              <div className="flex flex-col justify-center w-full h-[35vh] md:h-full md:min-h-[22vw] items-center rounded-[4vw] bg-[#1b1b31] text-white overflow-hidden md:col-start-2 md:row-start-3 lg:row-start-3 lg:col-start-2">
                Hobbies
              </div>
            </div>
          </div>
        </div>
        {/*Fondo*/}
        <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center bg-[#131325]" />
      </section>
    </>
  );
};

export default SecondSection;
