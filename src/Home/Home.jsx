const Home = () => {
  return (
    <div className="text-3xl">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../public/image/bannertoy.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Electronic Toys</h1>
            <p className="py-6">
              Welcome to your new electronic toy shop! We have a wide variety of
              electronic toys for kids of all ages, from toddlers to teens.{" "}
            </p>
            <button className="btn btn-primary">See all </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
