import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";
import logo from "./logo.svg";
import styles from "./Message.module.css";

export const Message: FunctionComponent = () => {
  const { isLoading, isError, error, data } = useQuery<
    { message: string },
    Error
  >("message", () => fetch("/api").then((res) => res.json()));

  return (
    <div className={styles.message}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        {isLoading ? "Loading..." : isError ? error?.message : data?.message}
      </p>
    </div>
  );
};
