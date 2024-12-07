import Header from "../Header/Header";

const Home = () => {
    return (
      <>
      <Header />
        <div className="landing">
          <div>
            <div>
              <img src="/injectionOrange.svg" alt="injection" />
              <span>don’t be upset, let’s get vaccinated</span>
            </div>
            <h1 className="text-7xl">
              With Vaccination We Can End This Pandemic
            </h1>
            <p>With vaccination, we can reduce the number of</p>
            <p>Covid-19 transmission, and can create herd immunity</p>
            <div className="bg-[#113165] p-4 text-white font-semibold rounded-full inline-block">
              <button className="">Make Appointment</button>
            </div>
          </div>
          <div>
            <img src="/heroimg.png" alt="vaccine" />
          </div>
        </div>
      </>
    );
}

export default Home;