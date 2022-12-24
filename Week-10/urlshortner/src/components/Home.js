import { useState } from "react";
import List from "./List";
import "./Home.css";
import axios from "axios";

export default function Home() {
  const [inputURL, setInputURL] = useState("");
  const [urlList, setUrlList] = useState([]);

  const fetchUrl = async () => {
    try {
      let baseUrl = "https://api.shrtco.de/v2/shorten?url=";
      let res = await axios(baseUrl + inputURL);
      let shortenUrl = res.data.result.full_short_link;
      let obj = { orginalURL: inputURL, shortURL: shortenUrl };
      setUrlList([...urlList, obj]);
      setInputURL("");
    } catch (error) {
      console.log("failed:", error);
    }

    console.log(urlList);
  };
  const HandleInputURL = () => {
    !/\S/.test(inputURL) ? alert("Invalid Input") : fetchUrl();
  };
  return (
    <div className="home-container">
      <div className="input-section">
        <input
          type="text"
          value={inputURL}
          onChange={(event) => {
            setInputURL(event.target.value);
          }}
          placeholder="Shorten a link here.. "
        />
        <button onClick={HandleInputURL}>Shorten it!</button>
      </div>
      <List urlList={urlList} />
    </div>
  );
}
