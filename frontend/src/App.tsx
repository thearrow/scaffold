import React from "react";
import { useQuery } from "react-query";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const { isLoading, isError, error, data } = useQuery<
    { message: string },
    Error
  >("message", () => fetch("/api").then((res) => res.json()));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isLoading ? "Loading..." : isError ? error?.message : data?.message}
        </p>
      </header>
    </div>
  );
}

export default App;
