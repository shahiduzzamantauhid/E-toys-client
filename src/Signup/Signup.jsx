import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {AuthContext} from "../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import useTitle from "../Hooks/useTitle";
const Signup = () => {
  useTitle("Signup");
  const {createUser} = useContext(AuthContext);
  const {signInWithGoogle}= useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()

        createUser(email,password)
        .then(result =>{
          const user = result.user;
          handleNamePhotourl(user,name,photourl);
        })
    }
    const handleNamePhotourl = (user,name,photourl) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photourl,
        }).then(() => {
        // Profile updated!
        });
    }
    const handleGoogleLogin = () => {
      signInWithGoogle()
      .then(() =>{
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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  name="photourl"
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
                <p>Already Have an Account? Lets <Link to="/login" className="underline">Click Here To Login</Link></p>
            
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Sign Up</button>
                </div>
              
            </div>
            </form>
            <button onClick={handleGoogleLogin} className="btn bg-base-100 text-black hover:text-white mx-8 mb-4">Continue with Google</button>
              
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;