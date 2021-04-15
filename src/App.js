import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading.jsx";
import Devices from "./components/Devices/Devices.jsx";

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    setData([]);

    fetch("/api/deviceOverView/page")
      .then((response) => response.json())
      .then((responseAdat) => setData(responseAdat))
      .catch((error) => {
        console.log("error", error);
        setData(null);
      })
      .finally(() => {
        console.log("fetch end");
        setLoading(false);
      });

    return () => {
      //cleanup
    };
  }, []);

  console.log("data=", data);

  return (
    <div className="App">
        <h1>Devices</h1>
        {loading
           ? <Loading/>
           : data === null
               ? <p>Upps Something happend</p>
               : < Devices data = {data}/>

}



    </div>
  );
};
export default App;
