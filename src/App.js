import React from "react";
import Dropdown from "./dropdown/Dropdown";

const App = () => {
  const options = [
    {value: "argentina", label: "Argentina"},
    {value: "taiwan", label: "Taiwan"},
    {value: "argentdina", label: "Aasargentina"},
    {value: "taiwdsan", label: "Taiwasasasn"},
    {value: "argedsntina", label: "Argensdasasatina"},
    {value: "taxsxiwan", label: "Taiwzczccan"},
    {value: "argexsxsntina", label: "Argecxcxntina"},
    {value: "taiwccsan", label: "Taiwdsxsdsxxan"},
    {value: "argenerfetina", label: "Argentxsxsxina"},
    {value: "taiwrean", label: "Taicsxzcwan"},
  ];
  return (
    <>
      <Dropdown options={options} mode="multiple" />
      <Dropdown options={options} mode="single" />
    </>
  )
}

export default App;