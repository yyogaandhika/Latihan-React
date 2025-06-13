import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";
import { GuestLayout } from "./Guest/Layouts/GuestLayout";
import { Guest } from "./Guest/pages/Guest";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const User = React.lazy(() => import("./pages/User"));
const Notes = React.lazy(() => import("./pages/Notes"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/error/400"
            element={
              <ErrorPage
                code="400"
                description="Bad Request. Please check your input."
                image="/img/400.png"
              />
            }
          />
          <Route
            path="/error/401"
            element={
              <ErrorPage
                code="401"
                description="Unauthorized. Please login to continue."
                image="/img/401.png"
              />
            }
          />
          <Route
            path="/error/403"
            element={
              <ErrorPage
                code="403"
                description="Forbidden. You do not have access."
                image="/img/403.png"
              />
            }
          />

          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/users" element={<User />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>

          <Route element={<GuestLayout />}>
            <Route path="/guest" element={<Guest />} />
          </Route>

          <Route
            path="*"
            element={
              <ErrorPage
                code="404"
                description="Oops! Page not found."
                image="/img/404.png"
              />
            }
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
