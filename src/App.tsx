import "./App.css";
import LoginPage from "./pages/Login";
import { NewInvoice, Signup } from "./utils/exports";

function App() {
  return (
    <div className="px-10 sm:container sm:mx-auto pt-10 h-full w-full">
      {/* <NewInvoice /> */}
      <Signup />
    </div>
  );
}

export default App;
