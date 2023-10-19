import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://registry.npmjs.org/react")
      .then((res) => res.json())
      .then((data) => setData(Object.keys(data.versions)));
 }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item}>{item}</p>;
        })}
    </>
  );
}