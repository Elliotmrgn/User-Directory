import React from "react";
import "./App.css";
import Table from "./Components/Table";
import Columns from "./utils/Columns";
import Data from "./utils/Data";

const App = () => {
  return <Table columns={Columns} data={Data} />;
};

export default App;
