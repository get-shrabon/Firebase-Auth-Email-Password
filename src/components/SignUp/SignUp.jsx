import auth from "../../Firebase/firebase.config";
import "./SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(" ");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    setErrorMessage("");
    setSuccess("");
    {
      if (password.length < 6) {
        setErrorMessage("! Password Should be at least 6 charecter Longer");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setErrorMessage("! Your Password Must be one uppercase");
        return;
      } else if (!accepted) {
        setErrorMessage("! Please Accept our terms and condition");
        return;
      }
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Your email submited is successed");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg")`,
      }}
      className="bg-no-repeat bg-cover bg-center h-[100vh] flex justify-center items-center"
    >
      <div className="container mx-auto formCard">
        <form onSubmit={handleSignUp}>
          <h3 className="text-center text-2xl font-medium text-orange-500">
            Sign Up Now!
          </h3>
          <div>
            <p>E-mail Address:</p>
            <input type="email" name="email" id="" required />
          </div>
          <div>
            <p>Password:</p>
            <div className="flex items-center">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id=""
                required
              />
              <span
                className="ml-[-40px] cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <input
              className="checkBox checkbox checkbox-secondary"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label className="text-[14px]" htmlFor="terms">
              Accept Our terms and condition
            </label>
          </div>
          <div>
            <input className="submitBtn mt-4" type="submit" value="Submit" />
          </div>
        </form>
        {errorMessage && <p className="text-red-800">{errorMessage}</p>}
        {success && <p className="text-green-700">{success}</p>}
      </div>
    </div>
  );
};

export default SignUp;
