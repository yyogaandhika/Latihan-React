import { createRoot } from "react-dom/client";
// import TailwindCSS from "./tailwind";
// import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <UserForm/> */}
    <HitungGajiForm />
  </div>
);
