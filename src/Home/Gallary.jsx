import { useEffect, useState } from "react";

const Gallary = () => {
  const [toy, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div className="bg-base-200">
      <div className=" w-10/12 mx-auto py-12">
        <div className="rounded-box grid grid-cols-1 lg:grid-cols-4 gap-4">
          {toy?.map((toy) => (
            <div key={toy._id} className="h-full w-full bg-white rounded-lg">
              <img src={toy.image} className="img-full rounded-lg" alt="T" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
