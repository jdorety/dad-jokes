import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const url = process.env.REACT_APP_DJ_API;

  const [joke, setJoke] = useState("");

  const getJoke = (endpoint = "") => {
    axios({
      method: "get",
      url: `${url}${endpoint}`,
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => {
        console.log(res);
        const { data } = res;
        setJoke(data.joke);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getJoke();
  }, [url]);

  return (
    <div className="App">
      <h2>{joke}</h2>
    </div>
  );
}

export default App;
