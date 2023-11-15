import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";

export const Authorized = () => {
  if (localStorage.getItem("book_token")) {
    return (
      <>
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </>
    );
  }
  return <Navigate to="/login" replace />;
};
