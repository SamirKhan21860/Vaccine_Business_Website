import Header from "../Header/Header";

const Home = () => {
    return (
      <div className="mx-28">
        <Header />
        <div className="landing flex justify-between ">
          <div className="">
            <div className="round-tip mt-16 bg-blue-100 rounded-full p-2 inline-flex">
              <img
                src="/injectionOrange.svg"
                alt="injection"
                className="w-5 mx-2"
              />
              <span className="mr-4 text-blue-400 font-medium text-sm">
                don&apos;t be upset, let&apos;s get vaccinated
              </span>
            </div>
            <h1 className="text-blue-950 text-7xl font-bold mt-2">
              <div className="mb-3">With Vaccination</div>
              <div className="mb-3">We Can End This</div>
              <div className="mb-3">Pandemic</div>
            </h1>
            <div className="mt-5 text-gray-400 text-2xl">
              <p>With vaccination, we can reduce the number of</p>
              <p>Covid-19 transmission, and can create herd immunity</p>
            </div>
            <div className="bg-[#113165] shadow-2xl shadow-blue-950 p-4 mt-16 px-6 text-white font-semibold rounded-full inline-block">
              <button className="">Make Appointment</button>
            </div>
          </div>
          <div className="">
            <img src="/heroimg.png" alt="vaccine" className="w-[800px] mt-5"/>
          </div>
        </div>
        <div className="companies flex justify-between mb-32">
          <div>
            <img src="/company-2.svg" alt="" />
          </div>
          <div>
            <img src="/company-3.svg" alt=""/>
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
            <div className="content">
              <h2>Why do you have to vaccinate?</h2>
              <p>
                There are three important reasons why you should vaccinate,
                which we describe as follows: Diam augue purus est egetinterdum
                dignissim condimentum interdum.
              </p>
            </div>
            <div className="cards">
              <div>
                <img src="/card-1-icon.svg" alt="" />
                <h3>Efficient and Effective</h3>
                <p>
                  Vaccines are safe, effective, and cost-effective, which means
                  they are easily accessible and affordable.
                </p>
                <a href="">
                  <span>Read More</span>
                  <img src="/white-arrow-icon.svg" alt="" />
                </a>
              </div>
              <div>
                <img src="/card-2-icon.svg" alt="" />
                <h3>No Side Effects</h3>
                <p>
                  Vaccines have no side effects, including mild to moderate
                  inflammation, and they are safe for everyone.
                </p>
                <a href="">
                  <span>Read More</span>
                  <img src="/black-arrow-icon.svg" alt="" />
                </a>
              </div>
              <div>
                <img src="/card-3-icon.svg" alt="" />
                <h3>No Risk of Infection</h3>
                <p>
                  Vaccines do not cause the spread of COVID-19, which means you
                  can safely and effectively work, play, and stay home.
                </p>
                <a href="">
                  <span>Read More</span>
                  <img src="/black-arrow-icon.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="provide-vaccines">
          <div className="wrapper">
            <div className="content">
              <h2>Where Can I Get Vaccinated?</h2>
              <p>
                There are currently 13,000 locations in the United States where
                people can receive COVID-19 vaccines. These locations are spread
                across various states and cities.
              </p>
              <div className="products-description">
                <img src="/injection-product.svg" alt="" />
                <p>
                  Vaccines that have been tested by several experimental animals
                </p>
                <img src="/capsol-product.svg" alt="" />
                <p>
                  Vaccines that has been tested in a lab step by step and in
                  detail
                </p>
              </div>
              <div className="provide-vaccine-img">
                <img src="/provide-vacc-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="latest-data">
          <img src="/latest-data-img.png" alt="" />
        </div>
        <div className="coid-19-map">
          <h2>Covid-19 distribution map</h2>
          <p>Below is a map of the distribution of Covid-19 cases</p>
          <img src="/map-img.png" alt="" />
        </div>
        <footer className="footer"></footer>
      </div>
    );
}

export default Home;