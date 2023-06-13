import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-hot-toast";
import useTitle from "../Hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const {signInWithGoogle}= useContext(AuthContext);
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
          navigate(from, {replace: true});
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
      });
    }
    // google login function
    const handleGoogleLogin = () => {
      signInWithGoogle()
      .then(() =>{
        toast.success("Signin Successfull");
        navigate(from, {replace: true});
      }
      )
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div>Do not have account? Lets <Link to="/signup" className="underline">create One</Link></div>
            
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>
              </div>
            </form>
            <button onClick={handleGoogleLogin} className="mx-8 mb-6 btn bg-base-100 text-black hover:text-white">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
