import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <div className="mx-6 lg:mx-28">
        <Header />
        <div className="landing flex lg:gap-52 justify-between flex-col lg:flex-row">
          <div className="">
            <div className="round-tip lg:mt-16 bg-blue-100 rounded-full p-2 inline-flex items-center">
              <img
                src="/injectionOrange.svg"
                alt="injection"
                className="w-3 lg:w-5 mx-2 transform transition-all duration-300 group-hover:animate-injection"
              />
              <span className="mr-4 text-blue-400 font-medium text-xs lg:text-sm">
                don&apos;t be upset, let&apos;s get vaccinated
              </span>
            </div>
            <h1 className="text-blue-950 text-[34px] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-start leading-[3rem] font-bold mt-2 lg:mt-6">
              With&nbsp;Vaccination <br />
              We Can End This
              <br /> Pandemic
            </h1>
            <div className="mt-5 lg:mt-8 lg:leading-10 text-gray-400 text-center lg:text-start font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              <p>With vaccination, we can reduce the number of</p>
              <p>Covid-19 transmission, and can create herd immunity</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/heroimg.png"
              alt="vaccine"
              className="min-w-[310px] lg:min-w-[800px] lg:mt-5"
            />
          </div>
        </div>
        <div className="flex lg:block -mt-6 lg:-mt-44">
          <div className="button bg-[#113165] text-sm lg:text-xl text-center mx-auto shadow-2xl shadow-blue-950 hover:bg-blue-800 hover:shadow-blue-800 transition-colors hover:transition-shadow hover:ease-in-out hover:duration-300 ease-in-out duration-300 cursor-pointer p-4 mb-16 px-6 text-white font-normal lg:font-semibold rounded-full inline-block">
            <button className="">Make Appointment</button>
          </div>
        </div>
        <div className="companies flex justify-between lg:my-32 gap-x-5">
          {[
            "company-2.svg",
            "company-3.svg",
            "company-4.svg",
            "company-1.svg",
          ].map((company, index) => (
            <img
              key={index}
              src={`/${company}`}
              alt="Company Logo"
              className="w-20 md:w-28 lg:w-36 xl:w-44 2xl:w-56"
            />
          ))}
        </div>
        <div className="build-immunity">
          <div className="wrapper">
            <div className="content text-center lg:text-left flex flex-col lg:flex-row justify-between lg:gap-48">
              <h2 className="text-blue-950 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-snug mt-5">
                Why do you have to
                <br /> vaccinate?
              </h2>
              <p className="mt-2 lg:mt-5 text-gray-400 font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                There are three important reasons why you should vaccinate,
                <br />
                which we describe as follows: Diam augue purus est
                <br /> egetinterdum dignissim condimentum interdum.
              </p>
            </div>
            <div className="cards mt-8 lg:mt-16 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8">
              <div className=" from-blue-500 to-blue-600 bg-gradient-to-br rounded-tl-[52px] lg:rounded-tl-[82px] rounded-b-[52px] lg:rounded-b-[82px] rounded-tr-[120px] lg:rounded-tr-[154px] p-14">
                <img
                  src="/card-1-icon.svg"
                  alt="protector sheild icon"
                  className="w-16 lg:w-32"
                />
                <h3 className="text-white font-semibold mt-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mt-5">
                  Build immunity against <br /> viruses
                </h3>
                <p className="text-indigo-50 mt-5 lg:mt-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  Vaccines are safe, effective, and <br /> cost-effective, which
                  means they easily
                  <br /> accessible and affordable. They are <br /> also known
                  as the same thing as the <br /> standard ones that are
                  available.
                </p>
                <a href="#" className="flex gap-4 mt-7 lg:mt-14">
                  <span className="text-indigo-50 text-sm lg:text-xl">
                    Read More
                  </span>
                  <img
                    src="/white-arrow-icon.svg"
                    alt="right arrow icon to read more"
                    className="w-4 lg:w-6"
                  />
                </a>
              </div>
              <div className="grid grid-flow-row lg:grid-flow-col gap-8">
                {/* p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-18 */}
                <div className="text-[#0F405B] px-14 py-8 lg:p-14 border border-gray-300 bg-[#F6F9FE] rounded-[32px] lg:rounded-[64px] min-w-[322px] lg:min-w-[525px] justify-end">
                  <img src="/card-2-icon.svg" alt="" className="w-16 lg:w-32" />
                  <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-2 lg:mt-5">
                    Build herd immunity <br /> stronger
                  </h3>
                  <a href="" className="flex gap-4 mt-5 lg:mt-10">
                    <span className="">Read More</span>
                    <img
                      src="/black-arrow-icon.svg"
                      alt="right arrow icon"
                      className="w-4 lg:w-6"
                    />
                  </a>
                </div>
                <div className="text-[#0F405B] px-14 py-8 lg:p-14 border border-gray-300 bg-[#F6F9FE] rounded-[32px] lg:rounded-[64px] min-w-[322px] lg:min-w-[525px] justify-end">
                  <img src="/card-3-icon.svg" alt="" className="w-16 lg:w-32" />
                  <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-2 lg:mt-5">
                    Lower levels of virus <br /> exposure
                  </h3>
                  <a href="" className="flex gap-4 mt-5 lg:mt-10">
                    <span>Read More</span>
                    <img
                      src="/black-arrow-icon.svg"
                      alt="right arrow icon"
                      className="w-4 lg:w-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="provide-vaccines mt-16 lg:mt-32 grid grid-flow-row lg:grid-flow-col lg:grid-cols-2">
          <div className="wrapper">
            <div className="content">
              <div className="lg:text-left text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold lg:font-bold text-[#0F405B] leading-snug">
                  We provide vaccines that <br />
                  have been clinically tested
                </h2>
                <p className="mt-2 lg:mt-5 text-gray-400 font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl leading-snug">
                  Don't be afraid to get vaccinated, because we tested <br />
                  the vaccine in stages and in detail
                </p>
              </div>
              <div className="products-description mt-4 lg:mt-10 lg:grid grid-cols-2 flex justify-center gap-16 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  font-semibold leading-snug">
                <div className="">
                  <img
                    src="/injection-product.svg"
                    alt="medical vaccine injection icon"
                    className="w-12 lg:w-20"
                  />
                  <p className="mt-2 text-gray-400">
                    Vaccines that have been
                    <br /> tested by several
                    <br /> experimental animals
                  </p>
                </div>
                <div className="">
                  <img
                    src="/capsol-product.svg"
                    alt="capsole icon for vaccine"
                    className="w-12 lg:w-20"
                  />
                  <p className="mt-2 text-gray-400">
                    Vaccines that has been
                    <br /> tested in a lab step by
                    <br /> step and in detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="provide-vaccine-img">
            <img
              src="/provide-vacc-img.png"
              alt="vaccine glass bottle in a blue gloves hand image"
              className="lg:mt-[-200px]"
            />
          </div>
        </div>
        <div className="latest-data flex justify-center">
          <img
            src="/latest-data-img.png"
            alt="latest data of vaccine"
            className="min-w-[380px]"
          />
        </div>
        <div className="coid-19-map text-center mt-8 lg:mt-32">
          <h2 className="font-semibold lg:font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-blue-950">
            Covid-19 distribution map
          </h2>
          <p className="mt-2 lg:mt-8 font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-400 leading-snug">
            Below is a map of the distribution of Covid-19 <br />
            cases
          </p>
          <div className="flex justify-center">
            <img src="/map-img.png" alt="" className="min-w-[350px]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";

// const Home = () => {
//   return (
//     <>
//       {/* Main container with responsive horizontal margins */}
//       <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-28 xl:mx-36 2xl:mx-44">
//         <Header />

//         {/* Landing Section */}
//         <div className="landing flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-52 my-8">
//           {/* Left Content */}
//           <div className="flex flex-col space-y-6">
//             {/* Round Tip */}
//             <div className="round-tip bg-blue-100 rounded-full inline-flex items-center p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-12 lg:mt-16">
//               <img
//                 src="/injectionOrange.svg"
//                 alt="injection"
//                 className="w-3 md:w-4 lg:w-5 mx-2 transform transition-all duration-300 group-hover:animate-injection"
//               />
//               <span className="mr-4 text-blue-400 font-medium text-xs lg:text-sm">
//                 don&apos;t be upset, let&apos;s get vaccinated
//               </span>
//             </div>
//             {/* Main Heading */}
//             <h1 className="text-blue-950 font-bold leading-[3rem] text-[34px] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-left mt-2 lg:mt-6">
//               With&nbsp;Vaccination <br />
//               We Can End This <br /> Pandemic
//             </h1>
//             {/* Subtext */}
//             <div className="text-gray-400 font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-center lg:text-left lg:leading-10 mt-5 lg:mt-8">
//               <p>With vaccination, we can reduce the number of</p>
//               <p>Covid-19 transmission, and can create herd immunity</p>
//             </div>
//           </div>
//           {/* Right Content – Hero Image */}
//           <div className="flex justify-center lg:mt-5">
//             <img
//               src="/heroimg.png"
//               alt="vaccine"
//               className="w-full max-w-[310px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[800px]"
//             />
//           </div>
//         </div>

//         {/* Appointment Button */}
//         <div className="flex justify-center lg:block mt-16">
//           <div className="button bg-[#113165] text-sm lg:text-xl text-center mx-auto shadow-2xl shadow-blue-950 hover:bg-blue-800 hover:shadow-blue-800 transition-colors duration-300 ease-in-out cursor-pointer p-4 px-6 mb-16 text-white font-normal lg:font-semibold rounded-full inline-block">
//             <button>Make Appointment</button>
//           </div>
//         </div>

//         {/* Companies Section */}
//         <div className="companies flex flex-wrap justify-between items-center lg:my-32 gap-x-5">
//           {[
//             "company-2.svg",
//             "company-3.svg",
//             "company-4.svg",
//             "company-1.svg",
//           ].map((company, index) => (
//             <img
//               key={index}
//               src={`/${company}`}
//               alt="Company Logo"
//               className="w-20 md:w-28 lg:w-36 xl:w-44 2xl:w-56"
//             />
//           ))}
//         </div>

//         {/* Build Immunity Section */}
//         <div className="build-immunity my-12">
//           <div className="wrapper">
//             <div className="content flex flex-col lg:flex-row justify-between lg:gap-48 text-center lg:text-left">
//               <h2 className="text-blue-950 font-bold leading-snug mt-5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
//                 Why do you have to <br /> vaccinate?
//               </h2>
//               <p className="mt-2 lg:mt-5 text-gray-400 font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
//                 There are three important reasons why you should vaccinate,
//                 <br />
//                 which we describe as follows: Diam augue purus est <br />{" "}
//                 egetinterdum dignissim condimentum interdum.
//               </p>
//             </div>
//             {/* Cards */}
//             <div className="cards mt-8 lg:mt-16 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8">
//               {/* Card 1 */}
//               <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-tl-[52px] lg:rounded-tl-[82px] rounded-b-[52px] lg:rounded-b-[82px] rounded-tr-[120px] lg:rounded-tr-[154px] min-w-[322px] lg:min-w-[525px] p-14">
//                 <img
//                   src="/card-1-icon.svg"
//                   alt="protector shield icon"
//                   className="w-16 lg:w-32"
//                 />
//                 <h3 className="text-white font-semibold mt-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mt-5">
//                   Build immunity against <br /> viruses
//                 </h3>
//                 <p className="text-indigo-50 mt-5 lg:mt-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//                   Vaccines are safe, effective, and <br /> cost-effective, which
//                   means they easily <br /> accessible and affordable. They are{" "}
//                   <br /> also known as the same thing as the <br /> standard
//                   ones that are available.
//                 </p>
//                 <a href="#" className="flex gap-4 mt-7 lg:mt-14 items-center">
//                   <span className="text-indigo-50 text-sm lg:text-xl">
//                     Read More
//                   </span>
//                   <img
//                     src="/white-arrow-icon.svg"
//                     alt="right arrow icon to read more"
//                     className="w-4 lg:w-6"
//                   />
//                 </a>
//               </div>
//               {/* Cards 2 and 3 */}
//               <div className="grid grid-flow-row lg:grid-flow-col gap-8">
//                 {/* Card 2 */}
//                 <div className="text-[#0F405B] px-14 py-8 lg:p-14 border border-gray-300 bg-[#F6F9FE] rounded-[32px] lg:rounded-[64px] min-w-[322px] lg:min-w-[525px] flex flex-col justify-end">
//                   <img
//                     src="/card-2-icon.svg"
//                     alt="card icon"
//                     className="w-16 lg:w-32"
//                   />
//                   <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-2 lg:mt-5">
//                     Build herd immunity <br /> stronger
//                   </h3>
//                   <a href="#" className="flex gap-4 mt-5 lg:mt-10 items-center">
//                     <span className="text-sm lg:text-base">Read More</span>
//                     <img
//                       src="/black-arrow-icon.svg"
//                       alt="right arrow icon"
//                       className="w-4 lg:w-6"
//                     />
//                   </a>
//                 </div>
//                 {/* Card 3 */}
//                 <div className="text-[#0F405B] px-14 py-8 lg:p-14 border border-gray-300 bg-[#F6F9FE] rounded-[32px] lg:rounded-[64px] min-w-[322px] lg:min-w-[525px] flex flex-col justify-end">
//                   <img
//                     src="/card-3-icon.svg"
//                     alt="card icon"
//                     className="w-16 lg:w-32"
//                   />
//                   <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-2 lg:mt-5">
//                     Lower levels of virus <br /> exposure
//                   </h3>
//                   <a href="#" className="flex gap-4 mt-5 lg:mt-10 items-center">
//                     <span className="text-sm lg:text-base">Read More</span>
//                     <img
//                       src="/black-arrow-icon.svg"
//                       alt="right arrow icon"
//                       className="w-4 lg:w-6"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Provide Vaccines Section */}
//         <div className="provide-vaccines mt-16 lg:mt-32 grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-8">
//           {/* Text Content */}
//           <div className="wrapper">
//             <div className="content">
//               <div className="text-center lg:text-left">
//                 <h2 className="text-[#0F405B] font-semibold lg:font-bold leading-snug text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
//                   We provide vaccines that <br /> have been clinically tested
//                 </h2>
//                 <p className="mt-2 lg:mt-5 text-gray-400 font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl leading-snug">
//                   Don&apos;t be afraid to get vaccinated, because we tested{" "}
//                   <br /> the vaccine in stages and in detail
//                 </p>
//               </div>
//               {/* Product Descriptions */}
//               <div className="products-description mt-4 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 justify-center gap-16 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold leading-snug">
//                 <div className="flex flex-col items-center">
//                   <img
//                     src="/injection-product.svg"
//                     alt="medical vaccine injection icon"
//                     className="w-12 lg:w-20"
//                   />
//                   <p className="mt-2 text-gray-400 text-center">
//                     Vaccines that have been <br /> tested by several <br />{" "}
//                     experimental animals
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <img
//                     src="/capsol-product.svg"
//                     alt="capsole icon for vaccine"
//                     className="w-12 lg:w-20"
//                   />
//                   <p className="mt-2 text-gray-400 text-center">
//                     Vaccines that has been <br /> tested in a lab step by <br />{" "}
//                     step and in detail
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Image Content */}
//           <div className="provide-vaccine-img flex justify-center lg:justify-end mt-8 lg:mt-0">
//             <img
//               src="/provide-vacc-img.png"
//               alt="vaccine glass bottle in a blue gloves hand image"
//               className="w-full max-w-md lg:max-w-lg xl:max-w-max lg:mt-[-200px]"
//             />
//           </div>
//         </div>

//         {/* Latest Data Section */}
//         <div className="latest-data flex justify-center mt-16 lg:mt-32">
//           <img
//             src="/latest-data-img.png"
//             alt="latest data of vaccine"
//             className="w-full max-w-xs sm:max-w-sm md:max-w-max"
//           />
//         </div>

//         {/* Covid-19 Map Section */}
//         <div className="coid-19-map text-center mt-8 lg:mt-32">
//           <h2 className="text-blue-950 font-semibold lg:font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
//             Covid-19 distribution map
//           </h2>
//           <p className="mt-2 lg:mt-8 text-gray-400 font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl leading-snug">
//             Below is a map of the distribution of Covid-19 <br /> cases
//           </p>
//           <div className="flex justify-center mt-4">
//             <img
//               src="/map-img.png"
//               alt=""
//               className="w-full max-w-xs sm:max-w-sm md:max-w-max"
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;