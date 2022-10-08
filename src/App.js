import { countries } from "countries-list";
import React from "react";
import Dropdown from "./dropdown/Dropdown";

const App = () => {
	const options = Object.keys(countries).map((code) => {
		return {
			value: countries[code].name,
			label: countries[code].name,
		};
	});
	return (
		<>
			<Dropdown options={options} mode="multiple" />
			<Dropdown options={options} mode="single" />
		</>
	);
};

export default App;
