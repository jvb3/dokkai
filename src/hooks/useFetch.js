function useFetch(selectedWord, filterData) {
  async function fetchData() {
    const API_URL = `http://beta.jisho.org/api/v1/search/words?keyword=${selectedWord}`;
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      filterData(jsonData);
    } catch (err) {
      alert("There was a problem");
    }
  }
  return { fetchData };
}
export default useFetch;
