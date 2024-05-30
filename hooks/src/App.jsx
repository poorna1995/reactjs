import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(0);

	// Deafult value

	// let counter = 15;
	const addValue = () => {
		if (counter >= 10) {
			throw new Error("Counter can't be greater than 10");
			return;
		} else {
			counter = counter + 1;
		}
		setCounter(counter);
		console.log("add value", Math.random());
	};
	const decreaseValue = () => {
		if (counter <= 0) {
			throw new Error("Counter can't be less than 0");
		} else {
			counter = counter - 1;
		}
		setCounter(counter);
		console.log("decrease value", Math.random());
	};

	return (
		<>
			<h1>Poorna Praneesha</h1>
			<h2>counter value:{counter}</h2>
			<button onClick={addValue}>add value{counter}</button>
			<button onClick={decreaseValue}>decrease value {counter}</button>
			<p>i have a {counter} memeber followers</p>
			<footer>{counter}</footer>
		</>
	);
}

export default App;
