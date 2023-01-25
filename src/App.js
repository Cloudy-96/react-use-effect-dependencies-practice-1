import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  // Write code here.
  //useEffect(() => {}, [dependency])

  useEffect(() => {
    console.log("useEffect triggered", dataType)
  //if statement
  if(dataType === "") {
    console.log("null")
    setData(null)
  } else {
    console.log("fetch request sent")
    fetch(`https://swapi.dev/api/${dataType}/`)
    .then((res) => res.json())
    .then((newData) => {
      console.log(newData)
      setData(newData)
    })
  }
  }, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
