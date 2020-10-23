import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";

export const Items: FunctionComponent = () => {
  const { isLoading, isError, error, data } = useQuery<
    Array<Record<string, string>>,
    Error
  >("items", () => fetch("/api/items/").then((res) => res.json()));

  return (
    <div>
      {isLoading ? "Loading..." : null}
      {isError ? error?.message : null}
      {data?.map((i) => (
        <div>
          {i?.title}: {i?.description}
        </div>
      ))}
    </div>
  );
};
