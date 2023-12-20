import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");
  const emailRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccess("");
    setErrorMessage("");
    {
      if (password.length < 6) {
        setErrorMessage("! Password Should be at least 6 charecter Longer");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setErrorMessage("! Your Password Must be one uppercase");
        return;
      }
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (result.user.emailVerified) {
          setSuccess("You Loggin Successfully.");
        } else {
          alert("Please Validation Your Email Address");
          return;
        }
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };
  const handleResetPass = () => {
    const Email = emailRef.current.value;
    console.log(Email);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      setErrorMessage("Please Give a Valid Email Address");
    }
    sendPasswordResetEmail(auth, Email)
      .then(() => {
        alert("Please Check Your Gmail Inbox.");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="hero min-h-screen px-56 bg-base-200 gradient">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="flex items-center justify-between">
                <label className="label">
                  <a
                    onClick={handleResetPass}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
                <Link
                  to="/signup"
                  className="link link-hover underline text-blue-600 label-text-alt"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            {success && <p className="text-green-700">{success}</p>}
            {errorMessage && <p className="text-red-800">{errorMessage}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
