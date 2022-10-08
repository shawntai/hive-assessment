import React from "react";
import { useEffect, useState } from "react";
import "./Dropdown.css";

// TODO: optomize isSelected
// TODO: select/deselect all

const Dropdown = ({ options, mode }) => {
	const [displayOptions, setDisplayOptions] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);
	useEffect(() => {
		const closeSelectHandler = () => setDisplayOptions(false);
		window.addEventListener("click", closeSelectHandler);
		return () => window.removeEventListener("click", closeSelectHandler);
	});
	const selectOnClick = (e) => {
		e.stopPropagation();
		setDisplayOptions(!displayOptions);
	};
	const optionOnClick = (e, option) => {
		e.stopPropagation();
		if (mode === "single") {
			setSelectedOptions([option]);
		} else if (mode === "multiple") {
			if (selectedOptions.find((o) => o.label === option.label)) {
				setSelectedOptions(
					selectedOptions.filter((o) => o.label !== option.label)
				);
			} else {
				setSelectedOptions([...selectedOptions, option]);
			}
		}
	};
	const selectAllOnClick = (e) => {
		e.stopPropagation();
		setSelectedOptions(options);
	};
	const deselectAllOnClick = (e) => {
		e.stopPropagation();
		setSelectedOptions([]);
	};
	return (
		<div className="dropdown-container">
			<div
				className={"dropdown-select " + (displayOptions && "open")}
				onClick={selectOnClick}
			>
				{selectedOptions.length === 0
					? "Select..."
					: selectedOptions.map((option) => option.label).join(", ")}
			</div>
			{displayOptions && (
				<>
					<div className="dropdown-menu">
						{options.map((option) => (
							<div
								key={option.value}
								className={
									"dropdown-option " +
									(selectedOptions.find(
										(o) => o.label === option.label
									) && "selected")
								}
								onClick={(e) => optionOnClick(e, option)}
							>
								{mode === "multiple" &&
									(selectedOptions.find(
										(o) => o.label === option.label
									) ? (
										<input type="checkbox" checked />
									) : (
										<input type="checkbox" />
									))}
								{option.label}
							</div>
						))}
					</div>
					{mode === "multiple" && (
						<>
							<button
								className="dropdown-btn"
								id="select-all"
								onClick={selectAllOnClick}
							>
								Select All
							</button>
							<button
								className="dropdown-btn"
								id="deselect-all"
								onClick={deselectAllOnClick}
							>
								Deselect All
							</button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Dropdown;
