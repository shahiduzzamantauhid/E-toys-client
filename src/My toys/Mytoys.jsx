import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Modal from "./Modal";
import { toast } from "react-hot-toast";

const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [edit, setEdit] = useState([]);
  //update toys
  // const [updateToys, setUpdateToys] = useState({
  //     toyname: "",
  //     description: "",
  //     sellingPrice: "",
  //     image: "",
  //     category: "",
  //     email: "",
  // });
  //update toys
  // const handleUpdateToys = (e) => {
  //     const newToys = { ...updateToys };
  //     newToys[e.target.name] = e.target.value;
  //     setUpdateToys(newToys);
  // };
  //update toys
  // const handleUpdateToysSubmit = (e) => {
  //     e.preventDefault();
  //     fetch(`http://localhost:5000/toys/${updateToys._id}`, {

  //         method: "PUT",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(updateToys),
  //     })
  //         .then((res) => res.json())
  //         .then((data) => {
  //             console.log(data);
  //             if (data.modifiedCount > 0) {
  //                 alert("Updated Successfully");
  //             }
  //         });
  // };
  //delete toys
  const handleDeleteToys = (id) => {
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success('Deleted sccessfully')
          const remainingToys = toys.filter((toys) => toys._id !== id);
          setToys(remainingToys);
        }
      });
  };
  //get toys

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const modalOpen = (toys) => {
    setEdit(toys);
    return window.modal.showModal(toys);
  };

  return (
    <div className="lg:w-10/12 mx-auto my-8">
      <h1 className="text-center text-3xl font-bold my-4">My Added Toys</h1>
      <div className="overflow-x-auto w-full">
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
                {/* <td>{toys.toyname}</td>
            <td>{toys.description}</td>
            <td>{toys.sellingPrice}</td>
            <td>
                
            </td> */}

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
