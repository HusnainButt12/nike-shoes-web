import { useState } from "react";

const Login = () => {
  const [isPressed, setPressed] = useState(false)
  return (
    <div className="h-[80%] w-full">
      <div className="h-[60%] w-full">
        <div className="h-32 w-full flex justify-center items-center">
          <text className="font-extrabold text-5xl ">Login</text>
        </div>
        <div className="h-40 w-full  flex justify-center">
          <div className="h-full w-[50%] flex flex-col gap-2">
            <label>Email</label>

            <input
              className="border-2 p-2 border-gray-200 bg-white"
              type="email"
              id="email"
              pattern=".+@globex\.com"
              size="30"
              required
            />
            <label>Password</label>

            <input
              className="border-2 p-2 border-gray-200 bg-white"
              type="password"
              id="password"
              pattern="abc345"
              size="30"
              required
            />
          </div>
        </div>
        <div className="h-[75%] w-full flex justify-center items-center">
          <div className="h-[90%] w-[50%] flex flex-col  justify-center items-center  mt-4 gap-5">
            <text className="hover:text-gray-700 cursor-pointer">
              Forgot your password?
            </text>
            <button className="bg-black text-white p-2 hover:bg-gray-700 px-6" onClick={()=> setPressed(!isPressed)}>
              {isPressed ? "SIGN IN..." : "SIGN IN"}
            </button>
            <text className="hover:text-gray-700 cursor-pointer">
              Create account
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
