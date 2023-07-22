const Loading = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <div>Loading please wait</div>
      ) : error ? (
        <div>Error from server</div>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
