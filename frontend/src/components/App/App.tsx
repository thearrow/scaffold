import React from "react";
import { useQuery } from "react-query";
import styles from "./App.module.css";
import logo from "./logo.svg";

function App() {
  const { isLoading, isError, error, data } = useQuery<
    { message: string },
    Error
  >("message", () => fetch("/api").then((res) => res.json()));

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          {isLoading ? "Loading..." : isError ? error?.message : data?.message}
        </p>
      </header>
    </div>
  );
}

export default App;
