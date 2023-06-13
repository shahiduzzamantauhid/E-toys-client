import { useState } from "react";
import useTitle from "../Hooks/useTitle";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Alltable = () => {
  useTitle("All Toys");
  const [search, setSearch] = useState([]);
  //   const [searchResult, setSearchResult] = useState(null);
  const [toys, setToys] = useState([]);

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
        setToys(data);
        console.log(data);
      });
  }, [search]);

  useEffect(() => {
    fetch("https://toyserver-eosin.vercel.app/toys/")
      .then((res) => res.json())
      .then((json) => setToys(json.slice(0, 20)));
  }, []);
  return (
    <div className="w-10/12 mx-auto text-center">
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
      {toys && (
        <div>
          <div>
            <h1 className="font-bold text-5xl text-center my-4">All Tays</h1>
          </div>
          <div className="overflow-x-auto flex justify-center my-12">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>SellerName</th>
                  <th>Toyname</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {toys.map((toy, index) => (
                  <tr key={toy._id}>
                    <td>{index + 1}</td>
                    <td>{toy.displayName}</td>
                    <td>{toy.toyname}</td>
                    <td>{toy.category}</td>
                    <td>{toy.sellingPrice}</td>
                    <td>{toy.stock}</td>
                    <td>
                      <Link
                        to={`/singleproduct/${toy._id}`}
                        className="btn btn-sm btn-primary"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alltable;
