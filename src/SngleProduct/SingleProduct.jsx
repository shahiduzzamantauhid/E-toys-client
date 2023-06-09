import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const SingleProduct = () => {
  const data = useLoaderData();
  const {image, toyname, category, sellingPrice, regularPrice, description, stock} = data;
  console.log(data);
  return (
    <div className="">
        <div className="w-10/12 mx-auto grid grid-cols-2 grid-rows-2 gap-4">
      <div><img className="w-11/12" src={image} alt="" /></div>
      <div className="py-12">
        <span className="text-sm font-semi-bold my-2">Home / {category} / {toyname}</span>
        <h1 className="font-bold text-3xl">{toyname}</h1>
        <h1 className="font-semibold text-2xl my-4">Category: {category}</h1>
        <div className="flex my-2">
        <h2 className="text-5xl font-bold text-primary">${sellingPrice}</h2>
        <h3 className="text-3xl text-gray-400 mt-4"><del className="pr-2">${regularPrice} </del> ({parseInt((regularPrice-sellingPrice)*100/regularPrice)}%) </h3>
        </div> 
        <h1 className="font-semibold text-2xl my-4">Available Quantity: {stock}</h1>
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Quantity</span>
          </label>
          <input type="number" defaultValue='1' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
            </div>            
        </div>
      <div className="col-span-2">
        <Tabs>
        <TabList>
          <Tab>DesCription</Tab>
          <Tab>Reviews</Tab>
        </TabList>
        <TabPanel>
          <div>{description}</div>
        </TabPanel>
        
      </Tabs>
        </div>
    </div>
    </div>
  );
};

export default SingleProduct;
