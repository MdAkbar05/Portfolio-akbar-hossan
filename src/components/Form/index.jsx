import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../services/userContext";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setUserName } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const user = {
      name: "dummy",
      email: "dummy@gmail.com",
      password: "12345",
    };
    e.preventDefault();
    // Form submission logic here
    // Example: validate form data, make API call, etc.

    if (
      name === user.name &&
      email === user.email &&
      password === user.password
    ) {
      setUser(true);
      setUserName(name);
      navigate("/");
    } else {
      setUser(false);
      toast.error(`Registration not succesfully complete`);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <ToastContainer theme="dark" />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 py-4 px-8 bg-gray-100 rounded-lg shadow-lg"
      >
        <div className="text-center text-2xl mt-4">Register your acoount</div>

        <div className="mb-4 w-96">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-4"
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-4"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-4"
            type="password"
            id="password"
            placeholder="Enter your password..."
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <a href="#" className="text-sm text-blue-500">
            Have already an account??
          </a>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
