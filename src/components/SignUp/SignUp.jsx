import auth from "../../Firebase/firebase.config";
import "./SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(" ");
  const [success, setSuccess] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessage("");
    setSuccess("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("your email submited is seccesed");
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
            <input type="password" name="password" id="" required />
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
