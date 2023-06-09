import {Link} from "react-router-dom"
const Page404 = () => {
    return (

        <>
        <div className="w-10/12 mx-auto text-center">
        
        <div className="flex justify-center">
          <img className="img-full" src={'/image/main404.png'} alt="" />  
        </div>
        
        <Link to='/' className="btn btn-primary text-center">Back to Home</Link>
        </div>
        </>
    );
};

export default Page404;