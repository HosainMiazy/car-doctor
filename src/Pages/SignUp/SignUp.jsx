import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
// import {AuthContext} from '../../Providers/AuthProvider';
// import { Result } from 'postcss';

const SignUp = () => {

    const { createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser (email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(error => console.log(error))
    }
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-xl">Name</span>
                </label>
                <input
                  type="Name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-xl">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-xl flex text-center"
                  >
                    Or Sign In with
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="bg-red-500 py-3 text-white text-center font-bold rounded-lg px-3 border-none"
                  type="submit"
                  value="Sign UP"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account? 
               <Link className="text-red-500 font-bold" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
