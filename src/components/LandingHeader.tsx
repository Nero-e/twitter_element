const LandingHeader = () => {
  return (
    <>
      <div className="flex justify-center ">
        <header className="flex fixed justify-between bg-[#f0f0f052] backdrop-blur-[36px] w-[880px] py-4 px-4 font-medium rounded-2xl shadow-custom z-40 top-4 cursor-pointer">
          {/* <div className="text-rich-black">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 251 180"
              width="34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M117.732 179.106H84.1283C38.4701 179.106 1.30636 142.737 0.0263672 97.3887H83.9246C95.7583 97.3887 101.675 97.3887 106.195 99.6917C110.171 101.717 113.403 104.95 115.429 108.926C117.732 113.445 117.732 119.362 117.732 131.196V179.106Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.0224609 82.6236C1.23644 37.2157 38.427 0.778687 84.1279 0.778687H117.731V48.8164C117.731 60.65 117.731 66.5668 115.428 71.0867C113.403 75.0624 110.17 78.2948 106.194 80.3206C101.675 82.6236 95.7578 82.6236 83.9242 82.6236H0.0224609Z"
                fill="currentColor"
              ></path>
              <path
                d="M132.505 179.106H166.108C211.766 179.106 248.93 142.737 250.21 97.3887H166.312C154.478 97.3887 148.561 97.3887 144.041 99.6917C140.066 101.717 136.833 104.95 134.808 108.926C132.505 113.445 132.505 119.362 132.505 131.196V179.106Z"
                fill="currentColor"
              ></path>
              <path
                d="M250.214 82.6236C249 37.2157 211.809 0.778687 166.108 0.778687H132.505V48.8164C132.505 60.65 132.505 66.5668 134.808 71.0867C136.834 75.0624 140.066 78.2948 144.042 80.3206C148.562 82.6236 154.478 82.6236 166.312 82.6236H250.214Z"
                fill="currentColor"
              ></path>
            </svg>
          </div> */}
          <div className="text-rich-black">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 24L12 0"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path d="M24 12H0" stroke="currentColor" strokeWidth="2"></path>
            </svg>
          </div>
        </header>
      </div>
    </>
  );
};

export default LandingHeader;
