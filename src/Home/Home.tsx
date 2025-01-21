import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <div className="mx-6 md:mx-28">
        <Header />
        <div className="landing flex justify-between flex-col md:flex-row">
          <div className="">
            <div className="round-tip mt-16 bg-blue-100 rounded-full p-2 inline-flex items-center group">
              <img
                src="/injectionOrange.svg"
                alt="injection"
                className="w-3 md:w-5 mx-2 transform transition-all duration-300 group-hover:animate-injection"
              />
              <span className="mr-4 text-blue-400 font-medium text-xs md:text-sm">
                don&apos;t be upset, let&apos;s get vaccinated
              </span>
            </div>
            <h1 className="text-blue-950 text-[34px] text-center md:text-start md:text-7xl leading-snug font-bold mt-2">
              With Vaccination We Can End This Pandemic
            </h1>
            <div className="mt-5 text-gray-400 text-center md:text-start font-semibold md:font-medium text-xs md:text-2xl">
              <p>With vaccination, we can reduce the number of</p>
              <p>Covid-19 transmission, and can create herd immunity</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/heroimg.png" alt="vaccine" className="min-w-[370px] md:min-w-[800px] mt-5" />
          </div>
        </div>
        <div className="flex md:block">
          <div className="button bg-[#113165] text-sm md:text-xl text-center mx-auto shadow-2xl shadow-blue-950 hover:bg-blue-800 hover:shadow-blue-800 transition-colors hover:transition-shadow hover:ease-in-out hover:duration-300 ease-in-out duration-300 cursor-pointer p-4 mb-16 px-6 text-white font-normal md:font-semibold rounded-full inline-block">
            <button className="">Make Appointment</button>
          </div>
        </div>
        <div className="companies flex justify-between mb-32">
          <div>
            <img src="/company-2.svg" alt="" />
          </div>
          <div>
            <img src="/company-3.svg" alt="" />
          </div>
          <div>
            <img src="/company-4.svg" alt="" />
          </div>
          <div>
            <img src="/company-1.svg" alt="" />
          </div>
        </div>
        <div className="build-immunity">
          <div className="wrapper">
            <div className="content flex justify-between gap-48">
              <h2 className="text-blue-950 text-6xl font-bold leading-snug">
                Why do you have to
                <br /> vaccinate?
              </h2>
              <p className="mt-5 text-gray-400 text-2xl">
                There are three important reasons why you should vaccinate,
                <br />
                which we describe as follows: Diam augue purus est
                <br /> egetinterdum dignissim condimentum interdum.
              </p>
            </div>
            <div className="cards mt-16 flex justify-between items-end gap-8">
              <div className="from-blue-500 to-blue-600 bg-gradient-to-br rounded-tl-[82px] rounded-b-[82px] rounded-tr-[154px] p-14">
                <img
                  src="/card-1-icon.svg"
                  alt="protector sheild icon"
                  className="w-32"
                />
                <h3 className="text-white font-semibold text-4xl mt-5">
                  Build immunity against <br /> viruses
                </h3>
                <p className="text-white mt-10 text-2xl">
                  Vaccines are safe, effective, and <br /> cost-effective, which
                  means they easily
                  <br /> accessible and affordable. They are <br /> also known
                  as the same thing as the <br /> standard ones that are
                  available.
                </p>
                <a href="#" className="flex gap-4 mt-14">
                  <span className="text-indigo-50 text-xl">Read More</span>
                  <img
                    src="/white-arrow-icon.svg"
                    alt="right arrow icon to read more"
                    className="w-6"
                  />
                </a>
              </div>
              <div className="grid grid-flow-col gap-8">
                <div className="p-14 border border-gray-300 bg-[#F6F9FE] rounded-[64px] min-w-[525px] justify-end">
                  <img src="/card-2-icon.svg" alt="" className="w-32" />
                  <h3 className="text-[#0F405B] font-semibold text-4xl mt-5">
                    Build herd immunity <br /> stronger
                  </h3>
                  <a href="" className="flex gap-4 mt-10">
                    <span>Read More</span>
                    <img src="/black-arrow-icon.svg" alt="" className="w-6" />
                  </a>
                </div>
                <div className="p-14 border border-gray-300 bg-[#F6F9FE] rounded-[64px] min-w-[525px] justify-end">
                  <img src="/card-3-icon.svg" alt="" className="w-32" />
                  <h3 className="text-[#0F405B] font-semibold text-4xl mt-5">
                    Lower levels of virus <br /> exposure
                  </h3>
                  <a href="" className="flex gap-4 mt-10">
                    <span>Read More</span>
                    <img src="/black-arrow-icon.svg" alt="" className="w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="provide-vaccines mt-32 grid grid-cols-2">
          <div className="wrapper">
            <div className="content">
              <div>
                <h2 className="text-6xl font-bold text-[#0F405B] leading-snug">
                  We provide vaccines that <br />
                  have been clinically <br />
                  tested
                </h2>
                <p className="mt-5 text-gray-400 text-2xl font-semibold leading-snug">
                  Don't be afraid to get vaccinated, because we tested <br />
                  the vaccine in stages and in detail
                </p>
              </div>
              <div className="products-description mt-10 grid grid-cols-2">
                <div className="">
                  <img
                    src="/injection-product.svg"
                    alt="medical vaccine injection icon"
                  />
                  <p className="text-2xl text-gray-400 font-semibold leading-snug">
                    Vaccines that have been
                    <br /> tested by several
                    <br /> experimental animals
                  </p>
                </div>
                <div className="">
                  <img
                    src="/capsol-product.svg"
                    alt="capsole icon for vaccine"
                  />
                  <p className="text-2xl text-gray-400 font-semibold leading-snug">
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
              className="mt-[-200px]"
            />
          </div>
        </div>
        <div className="latest-data flex justify-center">
          <img src="/latest-data-img.png" alt="latest data of vaccine" />
        </div>
        <div className="coid-19-map text-center mt-32">
          <h2 className="font-bold text-6xl text-blue-950">
            Covid-19 distribution map
          </h2>
          <p className="mt-8 text-3xl text-gray-400 leading-snug">
            Below is a map of the distribution of Covid-19 <br />
            cases
          </p>
          <div className="flex justify-center">
            <img src="/map-img.png" alt="" className="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
