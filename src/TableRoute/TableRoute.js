import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ShowText from "./ShowText/ShowText";

const TableRoute = () => {
  const [text, settext] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: ["text"],
    queryFn: () =>
      fetch("https://lettyai-server.vercel.app/text").then((res) => res.json()),
  });

  const getTextbyId = (id) => {
    fetch(`https://lettyai-server.vercel.app/text/${id}`)
      .then((res) => res.json())
      .then((data) => settext(data));
  };

  if (isLoading) {
    return <p className="text-center">Loading....</p>;
  }

  return (
    <div className="mt-4 mx-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((text, i) => (
              <tr key={text._id} onClick={() => getTextbyId(text._id)}>
                <th>{i + 1}</th>
                <td>{text?.name}</td>
                <td>{text?.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length !== 0 ? (
        <ShowText text={text}></ShowText>
      ) : (
        <p className="text-center mt-20">No Text Here</p>
      )}
    </div>
  );
};

export default TableRoute;
