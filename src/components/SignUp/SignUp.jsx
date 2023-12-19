import "./SignUp.css";
const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
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
            <input type="email" name="email" id="" />
          </div>
          <div>
            <p>Password:</p>
            <input type="password" name="password" id="" />
          </div>
          <div>
            <input className="submitBtn mt-4" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
