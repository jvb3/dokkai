const usePost = () => {
  const handlePost = async (e, dataObj, url) => {
    e.preventDefault();
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    })
      .then(console.log("Saved Data"))
      .catch((err) => console.log(err));
  };
  return { handlePost };
};
export default usePost;
