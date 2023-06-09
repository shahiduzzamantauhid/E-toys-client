import { useEffect } from "react";
import { useState } from "react";

const SingleProductPage = () => {
    const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${id}`)
      .then((res) => res.json())
      .then((json) => setToys(json));
  }, []);
  return (
    <div>
        {toys.map}
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div>1</div>
        <div>2</div>
        <div className="col-span-2">3</div>
      </div>
    </div>
  );
};

export default SingleProductPage;
