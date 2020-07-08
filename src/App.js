import React from "react";
import "./App.css";
import Table from "./Components/Table";
import Styles from "./Components/Styles";
import fillData from "./utils/Data";
import Columns from "./utils/Columns"

const App = () => {
  const data = React.useMemo(() => fillData(), []);
  console.log("App -> data", data)
  const columns = React.useMemo(()=> Columns(), [])
  console.log("App -> columns", columns)
  return <Table columns={columns} data={data}/>;
};

export default App;
