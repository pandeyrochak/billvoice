import { Button, InputItem } from "../utils/exports";

const LoginPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-gray-700">
      <div className="w-full max-w-xl flex flex-col px-10 py-20 shadow-lg shadow-zinc-300 border border-zinc-200 rounded-lg">
        <h1 className="text-2xl font-semibold mb-10 text-gray-800">
          Billvoice
        </h1>
        <p className="mb-3 font-medium">Create your account</p>
        <InputItem
          id="username"
          name="username"
          type="email"
          placeholderText="Enter your email"
          key={"username"}
        />
        <InputItem
          id="password"
          name="password"
          type="password"
          placeholderText="Create a password"
          key={"password"}
        />
        <InputItem
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholderText="Cofirm your password"
          key={"confirmPassword"}
        />
        <Button title="Signup" customProps="mt-3" />
        <a href="" className="text-center text-gray-900 mt-5">
          Login
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
