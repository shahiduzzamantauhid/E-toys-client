import { toast } from "react-hot-toast";

const Modal = ({ toy }) => {
  const id = toy._id;
  const handleUpdateToysSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const toyname = form.toyname.value;
    const sellingPrice = parseFloat(form.sellingPrice.value);
    const category = form.category.value;
    const stock = form.stock.value;
    const image = form.image.value;
    const description = form.description.value;

    const toy = {
      toyname,
      sellingPrice,
      stock,
      description,
      image,
      category,
    };
    fetch(`https://toyserver-eosin.vercel.app/toys/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Data Updated");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <form method="dialog" className="modal-backdrop">
        <button className="bg-gray-300 w-8 h-8 rounded-full">X</button>
      </form>
      <form
        method="dialog"
        onSubmit={handleUpdateToysSubmit}
        className=" shadow-2xl bg-base-200 p-8 rounded-xl"
      >
        {/* <a htmlFor="modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a> */}
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy name</span>
            </label>
            <input
              type="text"
              placeholder="toyname"
              className="input input-bordered"
              name="toyname"
              required
              defaultValue={toy.toyname}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Category</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="category"
              required
              value={toy.category}
            >
              <option disabled>--- select ---</option>
              <option value={"Car"}>Car</option>
              <option value={"Bike"}>Bike</option>
              <option value={"ThreeWhiler"}>Three Whiler</option>
              <option value={"Gun"}>Gun</option>
              <option value={"Audio"}>Audio</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Selling Price</span>
            </label>
            <input
              type="text"
              placeholder="Its selling price"
              className="input input-bordered"
              name="sellingPrice"
              required
              defaultValue={toy.sellingPrice}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="How many toys you have?"
              className="input input-bordered"
              name="stock"
              required
              defaultValue={toy.stock}
            />
          </div>
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image url"
              className="input input-bordered"
              name="image"
              required
              defaultValue={toy.image}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Write something about your product"
              className="input input-bordered pt-1 h-24"
              name="description"
              required
              defaultValue={toy.description}
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
