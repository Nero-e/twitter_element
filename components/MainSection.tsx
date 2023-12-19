const MainSection = () => {
  return (
    <>
      <section className="h-screen w-full flex flex-col text-center overflow-hidden relative pt-32 pb-44 md:pb-64 min-h-full">
        <div className="flex flex-col h-full z-30 relative">
          <div className="relative">
            <div className="text-[75px] text-white">Main Section</div>
          </div>
        </div>
        {/*Fondo gradient con animacion*/}
        <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center bg-gradient-1" />
      </section>
    </>
  );
};

export default MainSection;
