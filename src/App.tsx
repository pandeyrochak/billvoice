import "./App.css";
import { dummyLogo } from "./utils/exports";

function App() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-4xl text-teal-100 h-full">
      <img src={dummyLogo} alt="brand-logos" />
      Typescript + React + Tailwindcss
    </div>
  );
}

export default App;
