import React from "react";

const Loading = ({ children, loading, error }) => {
  return (
    <div>
      {loading ? "Loading please wait" : error ? "Error from server" : children}
    </div>
  );
};

export default Loading;
