import { CiMoneyCheck1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
const WhyBest = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-28">
        <h2
          data-aos="zoom-in"
          className="text-center text-3xl font-bold mb-4 text-secondary"
        >
          {" "}
          Why E-toys?
        </h2>
        <h2
          data-aos="zoom-in"
          className="text-center text-3xl lg:text-5xl font-bold mb-20 lg:w-4/6 mx-auto"
        >
          {" "}
          Your prime choice for diverse, quality electronic toys online
        </h2>
        <div className="lg:grid grid-cols-3 justify-between items-center">
          <div
            data-aos="fade-right"
            className="p-6 hover:bg-slate-100 rounded duration-300"
          >
            <div className="">
              <BsHouseDoor className="p-3 rounded-full bg-primary text-8xl text-white mx-auto"></BsHouseDoor>
            </div>

            <div className="pt-3 h-40 text-center">
              <h3 className="font-bold text-3xl py-3">Door Step Delivery</h3>
              <p>
                Experience the convenience of door-to-door enchantment as we
                bring electronic joy right to your doorstep with our seamless
                delivery service.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            className="p-6 hover:bg-slate-100 rounded duration-300"
          >
            <div className="">
              <CiWallet className="p-3 rounded-full bg-primary text-8xl text-white mx-auto"></CiWallet>
            </div>

            <div className="pt-3 h-40 text-center">
              <h3 className="font-bold text-3xl py-3">Money Back Garenty</h3>
              <p>
                Rest easy with our money-back guarantee, ensuring your
                satisfaction as we prioritize delivering electronic magic that
                exceeds expectations.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="p-6 hover:bg-slate-100 rounded duration-300"
          >
            <div className="">
              <CiMoneyCheck1 className="p-3 rounded-full bg-primary text-8xl text-white mx-auto"></CiMoneyCheck1>
            </div>

            <div className="pt-3 h-40 text-center">
              <h3 className="font-bold text-3xl py-3">Cash On Delivery</h3>
              <p>
                Embrace convenience and flexibility with our Cash On Delivery
                option, enabling you to relish electronic wonders before
                settling payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyBest;
