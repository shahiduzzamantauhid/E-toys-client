import { useEffect, useState } from "react";
import Alltoys from "../All toys/Alltoys";
import Gallary from "./Gallary";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../Hooks/useTitle";
import Location from "./Location";
import WhyBest from "./WhyBest";
const Home = () => {
  useTitle("Home");
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 100,
    });
  }, []);
  const [toy, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toyserver-eosin.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div className="bg-base-200">
      <div className="w-10/12 mx-auto lg:pb-12">
        <div className="sm:block lg:flex lg:flex-row-reverse gap-8 ">
          <div className="sm:w-full lg:w-3/6" data-aos="fade-left">
            <div className="carousel rounded-box ">
              {toy?.map((toy) => (
                <div key={toy._id} className="carousel-item w-full">
                  <img
                    src={toy.image}
                    className=""
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-right" className="mt-40 w-3/6">
            <h1 className="text-7xl font-bold">Electronic Toys</h1>
            <p className="py-6 text-xl">
              Step into our enchanting world of electronic wonders – your ultimate destination for an unparalleled toy shopping experience! We take immense pride in presenting to you a captivating array of electronic toys meticulously curated to cater to children spanning various age groups, ranging from the tiniest of toddlers to the trendsetting teens on the cusp of adulthood
            </p>
            <button className="btn btn-primary text-white">See Our Top Products </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-6 lg:py-12" data-aos="zoom-in">
        <h2 className="font-bold text-5xl text-yellow text-center">
          Our Top Categories
        </h2>
        <Alltoys />
      </div>
      <div className="bg-base-200 py-6 lg:py-12" data-aos="zoom-in">
        <h2 className="font-bold text-5xl text-yellow text-center">Gallary</h2>
        <Gallary />
        <Location/>
        <WhyBest/>
        <div className="w-10/12 mx-auto my-8">
        <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center text-xl font-semibold text-center" data-aos="fade-left">Subscribe for Getting Our New Announcement</div> 
  <div className="divider lg:divider-horizontal" data-aos="zoom-in"></div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center" data-aos="fade-right"><form>
          <div className="form-control">
            <div className="input-group w-auto mx-auto my-6">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
                name="search"
              />
              <button className="btn btn-primary">
                subscribe
              </button>
            </div>
          </div>
        </form></div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
