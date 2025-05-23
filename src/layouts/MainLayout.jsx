import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AuthLayout from "./AuthLayout";

export default function MainLayout(){
    return (
        <div
      id="app-container"
      className="bg-gradient-to-b from-black to-purple-700 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <Header />
            <Outlet/>
        </div>
      </div>
    </div>
    )
}