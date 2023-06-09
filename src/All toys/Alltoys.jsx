import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useTitle from "../Hooks/useTitle";
const Alltoys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/toys/")
      .then((res) => res.json())
      .then((json) => setToys(json));
  }, []);
  const handleCategory = (categoryName) => {
    fetch(`http://localhost:5000/toy/${categoryName}`)
    .then(res => res.json())
    .then((data) => setCategory(data))
  }
  return (
    <div className="w-10/12 mx-auto my-8">
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab onClick={()=>{handleCategory('Car')}}>Car</Tab>
          <Tab onClick={()=>{handleCategory('Bike')}}>Bike</Tab>
          <Tab onClick={()=>{handleCategory('ThreeWhiler')}}>Three Whiler</Tab>
          <Tab onClick={()=>{handleCategory('Gun')}}>Gun</Tab>
          <Tab onClick={()=>{handleCategory('Audio')}}>Audio</Tab>
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
                      <h2 className="card-title font-bold text-primary">${toy.sellingPrice}</h2>
                      <h3 className="text-xl-gray-200"><del className="pr-2">${toy.regularPrice} </del> ({parseInt((toy.regularPrice-toy.sellingPrice)*100/toy.regularPrice)}%) </h3>
                      <p className="text-sm text-primary">Ratting: {toy.ratting}</p>
                      <div className="flex justify-end card-actions align-right">
                    
                      <Link to={`/singleproduct/${toy._id}`} className="btn btn-secondary mt-[-50px]">More Info</Link>
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
                      <h2 className="card-title font-bold text-primary">${toy.sellingPrice}</h2>
                      <h3 className="text-xl-gray-200"><del className="pr-2">${toy.regularPrice} </del> ({parseInt((toy.regularPrice-toy.sellingPrice)*100/toy.regularPrice)}%) </h3>
                      <p className="text-sm text-primary">Ratting: {toy.ratting}</p>
                      <div className="flex justify-end card-actions align-right">
                        <button className="btn btn-secondary mt-[-50px]">More Info</button>
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
                      <h2 className="card-title font-bold text-primary">${toy.sellingPrice}</h2>
                      <h3 className="text-xl-gray-200"><del className="pr-2">${toy.regularPrice} </del> ({parseInt((toy.regularPrice-toy.sellingPrice)*100/toy.regularPrice)}%) </h3>
                      <p className="text-sm text-primary">Ratting: {toy.ratting}</p>
                      <div className="flex justify-end card-actions align-right">
                        <button className="btn btn-secondary mt-[-50px]">More Info</button>
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
                      <h2 className="card-title font-bold text-primary">${toy.sellingPrice}</h2>
                      <h3 className="text-xl-gray-200"><del className="pr-2">${toy.regularPrice} </del> ({parseInt((toy.regularPrice-toy.sellingPrice)*100/toy.regularPrice)}%) </h3>
                      <p className="text-sm text-primary">Ratting: {toy.ratting}</p>
                      <div className="flex justify-end card-actions align-right">
                        <button className="btn btn-secondary mt-[-50px]">More Info</button>
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
                      <h2 className="card-title font-bold text-primary">${toy.sellingPrice}</h2>
                      <h3 className="text-xl-gray-200"><del className="pr-2">${toy.regularPrice} </del> ({parseInt((toy.regularPrice-toy.sellingPrice)*100/toy.regularPrice)}%) </h3>
                      <p className="text-sm text-primary">Ratting: {toy.ratting}</p>
                      <div className="flex justify-end card-actions align-right">
                        <button className="btn btn-secondary mt-[-50px]">More Info</button>
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
                      <h2 className="card-title font-bold text-primary">${toy.sellingPrice}</h2>
                      <h3 className="text-xl-gray-200"><del className="pr-2">${toy.regularPrice} </del> ({parseInt((toy.regularPrice-toy.sellingPrice)*100/toy.regularPrice)}%) </h3>
                      <p className="text-sm text-primary">Ratting: {toy.ratting}</p>
                      <div className="flex justify-end card-actions align-right">
                        <button className="btn btn-secondary mt-[-50px]">More Info</button>
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
