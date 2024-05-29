import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="bg-green-700 p-4 rounded-md text-white mb-4">
				Poorna Praneesha
			</h1>
			{/* <Card
				name={"Poorna Praneesha"}
				description={
					"Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."
				}
				image={reactLogo}
				role={"Senior"}
				company={"Poorna Praneesha"}
			/> */}
			{cards.map((card) => (
				<Card
					key={card.id}
					name={card.name}
					description={card.description}
					image={card.image}
					role={card.role}
					company={card.company}
				/>
			))}
		</>
	);
}
const cards = [
	{
		id: 1,
		name: "Poorna Praneesha",
		description:
			"Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
		image: reactLogo,
		role: "Senior",
		company: "Poorna Praneesha",
	},
	{
		id: 2,
		name: "Poorna Praneesha",
		description:
			"Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
		image: viteLogo,
		role: "Senior",
		company: "Poorna Praneesha",
	},
];

export default App;
