import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Alltoys = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const handlleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyname = form.search.value;
    setSearch(toyname);
  };
  useEffect(() => {
    fetch(`https://toyserver-eosin.vercel.app/title/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data);
        console.log(data);
      });
  }, [search]);

  console.log(searchResult);
  useEffect(() => {
    fetch("https://toyserver-eosin.vercel.app/toys/")
      .then((res) => res.json())
      .then((json) => setToys(json));
  }, []);
  const handleCategory = (categoryName) => {
    fetch(`https://toyserver-eosin.vercel.app/toy/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };
  return (
    <div className="w-10/12 mx-auto my-8">
      <div>
        <form onSubmit={handlleSearch}>
          <div className="form-control">
            <div className="input-group w-auto mx-auto my-6">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                name="search"
              />
              <button className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div>
          {searchResult?.length === 0 ? (
            <h1 className="text-3xl font-bold text-center">No Result Found</h1>
          ) : (
            searchResult?.map((toy) => (
              <div
                key={toy._id}
                className="lg:flex w-8/12 mx-auto border lg:p-4 mb-8"
              >
                <div className="lg:w-2/12 lg:pr-4 lg:border-r-2">
                  <img src={toy.image} alt="" />
                </div>
                <div className="block lg:flex items-center space-x-3">
                  <div className="flex justify-start items-center space-x-3 lg:px-4">
                    <div className="avatar">
                      <div className="mask mask-squircle"></div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.toyname}</div>
                      <div className="text-sm opacity-50">
                        Category: {toy.category}
                      </div>
                    </div>
                  </div>
                  <div className="lg:px-4 justify-center text-primary">
                  Price: ${toy.sellingPrice}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Ratting: {toy.ratting}
                    </span>
                    <span className="badge badge-ghost badge-sm">
                      In Stock: {toy.stock}
                    </span>
                  </div>
                  <div className="lg:px-4 justify-end my-2">
                    <div className="lg:flex lg:justify-end card-actions lg:align-right">
                      <Link
                        to={`/singleproduct/${toy._id}`}
                        className="btn btn-primary"
                      >
                        More Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Tabs className="mt-24">
        <TabList>
          <Tab>All</Tab>
          <Tab
            onClick={() => {
              handleCategory("Car");
            }}
          >
            Car
          </Tab>
          <Tab
            onClick={() => {
              handleCategory("Bike");
            }}
          >
            Bike
          </Tab>
          <Tab
            onClick={() => {
              handleCategory("ThreeWhiler");
            }}
          >
            Three Whiler
          </Tab>
          <Tab
            onClick={() => {
              handleCategory("Gun");
            }}
          >
            Gun
          </Tab>
          <Tab
            onClick={() => {
              handleCategory("Audio");
            }}
          >
            Audio
          </Tab>
        </TabList>

        <TabPanel>
          <div className="card">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toys.map((toy) => (
                  <div className="card shadow-lg bg-base-100" key={toy._id}>
                    <figure>
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="rounded-t-lg"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <h2 className="card-title font-bold text-primary">
                        ${toy.sellingPrice}
                      </h2>
                      <h3 className="text-xl-gray-200">
                        <del className="pr-2">${toy.regularPrice} </del> (
                        {parseInt(
                          ((toy.regularPrice - toy.sellingPrice) * 100) /
                            toy.regularPrice
                        )}
                        %){" "}
                      </h3>
                      <p className="text-sm text-primary">
                        Ratting: {toy.ratting}
                      </p>
                      <div className="flex justify-end card-actions align-right">
                        <Link
                          to={`/singleproduct/${toy._id}`}
                          className="btn btn-primary mt-[-50px]"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.map((toy) => (
                  <div className="card shadow-lg bg-base-100" key={toy._id}>
                    <figure>
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="rounded-t-lg"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <h2 className="card-title font-bold text-primary">
                        ${toy.sellingPrice}
                      </h2>
                      <h3 className="text-xl-gray-200">
                        <del className="pr-2">${toy.regularPrice} </del> (
                        {parseInt(
                          ((toy.regularPrice - toy.sellingPrice) * 100) /
                            toy.regularPrice
                        )}
                        %){" "}
                      </h3>
                      <p className="text-sm text-primary">
                        Ratting: {toy.ratting}
                      </p>
                      <div className="flex justify-end card-actions align-right">
                        <Link
                          to={`/singleproduct/${toy._id}`}
                          className="btn btn-primary mt-[-50px]"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.map((toy) => (
                  <div className="card shadow-lg bg-base-100" key={toy._id}>
                    <figure>
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="rounded-t-lg"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <h2 className="card-title font-bold text-primary">
                        ${toy.sellingPrice}
                      </h2>
                      <h3 className="text-xl-gray-200">
                        <del className="pr-2">${toy.regularPrice} </del> (
                        {parseInt(
                          ((toy.regularPrice - toy.sellingPrice) * 100) /
                            toy.regularPrice
                        )}
                        %){" "}
                      </h3>
                      <p className="text-sm text-primary">
                        Ratting: {toy.ratting}
                      </p>
                      <div className="flex justify-end card-actions align-right">
                        <Link
                          to={`/singleproduct/${toy._id}`}
                          className="btn btn-primary mt-[-50px]"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.map((toy) => (
                  <div className="card shadow-lg bg-base-100" key={toy._id}>
                    <figure>
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="rounded-t-lg"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <h2 className="card-title font-bold text-primary">
                        ${toy.sellingPrice}
                      </h2>
                      <h3 className="text-xl-gray-200">
                        <del className="pr-2">${toy.regularPrice} </del> (
                        {parseInt(
                          ((toy.regularPrice - toy.sellingPrice) * 100) /
                            toy.regularPrice
                        )}
                        %){" "}
                      </h3>
                      <p className="text-sm text-primary">
                        Ratting: {toy.ratting}
                      </p>
                      <div className="flex justify-end card-actions align-right">
                        <Link
                          to={`/singleproduct/${toy._id}`}
                          className="btn btn-primary mt-[-50px]"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.map((toy) => (
                  <div className="card shadow-lg bg-base-100" key={toy._id}>
                    <figure>
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="rounded-t-lg"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <h2 className="card-title font-bold text-primary">
                        ${toy.sellingPrice}
                      </h2>
                      <h3 className="text-xl-gray-200">
                        <del className="pr-2">${toy.regularPrice} </del> (
                        {parseInt(
                          ((toy.regularPrice - toy.sellingPrice) * 100) /
                            toy.regularPrice
                        )}
                        %){" "}
                      </h3>
                      <p className="text-sm text-primary">
                        Ratting: {toy.ratting}
                      </p>
                      <div className="flex justify-end card-actions align-right">
                        <Link
                          to={`/singleproduct/${toy._id}`}
                          className="btn btn-primary mt-[-50px]"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.map((toy) => (
                  <div className="card shadow-lg bg-base-100" key={toy._id}>
                    <figure>
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="rounded-t-lg"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <h2 className="card-title font-bold text-primary">
                        ${toy.sellingPrice}
                      </h2>
                      <h3 className="text-xl-gray-200">
                        <del className="pr-2">${toy.regularPrice} </del> (
                        {parseInt(
                          ((toy.regularPrice - toy.sellingPrice) * 100) /
                            toy.regularPrice
                        )}
                        %){" "}
                      </h3>
                      <p className="text-sm text-primary">
                        Ratting: {toy.ratting}
                      </p>
                      <div className="flex justify-end card-actions align-right">
                        <Link
                          to={`/singleproduct/${toy._id}`}
                          className="btn btn-primary mt-[-50px]"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default Alltoys;
