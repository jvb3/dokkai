import JishoAPI from "unofficial-jisho-api";
const jisho = new JishoAPI();

function useFetch(selectedWord, filterData) {
  const proxy = "https://cors-anywhere.herokuapp.com/";

  async function fetchData() {
    const url = proxy + jisho.getUriForPhraseSearch(selectedWord);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      filterData(jsonData);
    } catch (err) {
      alert("There was a problem");
    }
  }
  return { fetchData };
}

export default useFetch;
