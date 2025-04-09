import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>

      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            href="/signup"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SignUp
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            href="/signin"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Signin
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            href="/dashboard"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
