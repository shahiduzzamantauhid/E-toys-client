const Addtoys = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyname = form.toyname.value;
    const price = form.price.value;

    const toy = {
      toyname,
      price,
    };
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSumbit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy name</span>
                </label>
                <input
                  type="text"
                  placeholder="toyname"
                  className="input input-bordered"
                  name="toyname"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  name="price"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addtoys;
