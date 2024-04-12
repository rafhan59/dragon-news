import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(form.get('email'))


        signIn(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.log(err))
    }


  return (
    <div>
      <Navbar />
      <h2 className="text-3xl my-10 text-center">Please Log In</h2>
      <form onSubmit={handleSubmit} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="mt-2 text-center">
        Don&apos;t have an account?{" "}
        <Link className="text-bold text-blue-500" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
