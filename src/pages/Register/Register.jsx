import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, photo, password)


        createUser(email, password)
                .then(res => console.log(res.user))
                .catch(err => console.log(err))

    }
  return (
    <div>
      <Navbar />
      <h2 className="text-3xl my-10 text-center">Register Account</h2>
      <form
        onSubmit={handleRegister}
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      
      <p className="mt-2 text-center">Do you have an account? <Link className="text-bold text-blue-500" to='/login'>Log In</Link></p>

    </div>
  );
};

export default Register;
