import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-hot-toast";

const Login = () => {
  
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email,password)
        .then(() =>{
          form.reset();
          toast.success("Login Successfull");
          navigate(from, {replace: true});
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
      });
        
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
            <div className="card-body">
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
              
            <p>Do not have account? Lets <Link to="/signup" className="underline">create An Account.</Link></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
