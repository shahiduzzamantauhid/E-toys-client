import { useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../Providers/AuthProviders";
const Signup = () => {
  const {createUser} = useContext(AuthContext);
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()

        createUser(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
    }
    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button className="btn bg-base-100 text-black hover:text-white mt-4">Continue with Google</button>
                <button className="btn btn-secondery mt-4">Continue with Github</button>
              </div>
              
            <p>Already Have an Account? Lets <Link to="/login" className="underline">Login</Link></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;