import { Button, InputItem } from "../utils/exports";

const LoginPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-gray-700">
      <div className="w-full max-w-xl flex flex-col px-10 py-20 shadow-lg shadow-zinc-300 border border-zinc-200 rounded-lg">
        <h1 className="text-2xl font-semibold mb-10 text-gray-800">
          Billvoice
        </h1>
        <p className="mb-3 font-medium">Login to your account</p>
        <InputItem
          id="username"
          name="username"
          type="text"
          placeholderText="Enter your username"
          key={"username"}
        />
        <InputItem
          id="password"
          name="password"
          type="password"
          placeholderText="Enter your password"
          key={"password"}
        />
        <Button title="Login" customProps="mt-3" />
        <p className="mt-3 00">Don't have an account? Sign up</p>
      </div>
    </div>
  );
};

export default LoginPage;
