import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import useTitle from "../Hooks/useTitle";

const Mytoys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [edit, setEdit] = useState([]);
  //delete toys
  const handleDeleteToys = (id) => {
    fetch(`https://toyserver-eosin.vercel.app/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted sccessfully");
          const remainingToys = toys.filter((toys) => toys._id !== id);
          setToys(remainingToys);
        }
      });
  };

  //get toys from database with user email
  useEffect(() => {
    fetch(`https://toyserver-eosin.vercel.app/toys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleSort = () => {
    fetch(`https://toyserver-eosin.vercel.app/sort/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const modalOpen = (toys) => {
    setEdit(toys);
    return window.modal.showModal(toys);
  };

  return (
    <div className="lg:w-10/12 mx-auto my-8">
      <h1 className="text-center text-5xl font-bold my-4">My Added Toys</h1>
      <div className="overflow-x-auto w-full">
        <div className="text-right">
          {" "}
          <button
            onClick={handleSort}
            className="btn btn-outline btn-accent btn-wide mb-4"
          >
            Sort By Price
          </button>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>SL</label>
              </th>
              <th>Name</th>
              <th>Details</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr key={toy._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.toyname}</div>
                      <div className="text-sm opacity-50">
                        Category: {toy.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Available: {toy.stock}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Ratting: {toy.ratting}
                  </span>
                  <span className="badge badge-ghost badge-sm">
                    Ragular Price: ${toy.regularPrice}
                  </span>
                </td>
                <td>${toy.sellingPrice}</td>
                <th>
                  <button
                    className="btn btn-outline btn-accent"
                    onClick={() => modalOpen(toy)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      handleDeleteToys(toy._id);
                    }}
                    className="btn btn-outline btn-accent ml-1"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="modal" className="bg-transparent ">
        <Modal toy={edit} />
      </dialog>
    </div>
  );
};

export default Mytoys;
