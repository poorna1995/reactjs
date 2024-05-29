import { useState } from "react";

function App() {
	const [color, setColor] = useState("olive");
	const changeColor = (color) => {
		console.log(`color changed to ${color}`, Math.random());
		setColor(color);
	};

	return (
		<div className="w-full">
			<div
				className="w-full h-screen duration-200"
				style={{
					backgroundColor: color,
				}}
			>
				<h1 className="pt-10 text-4xl text-center text-white">
					Background Changer
				</h1>
				<div className="fixed inset-x-0 flex-wrap justify-center bottom-12 px -2 ">
					<div className="flex flex-wrap gap-3 bg-white rounded shadow-lg justify-normal -xl">
						{colors &&
							colors.map((color) => (
								<button
									key={color}
									className="px-4 py-2 text-white rounded outline-none"
									style={{ backgroundColor: color }}
									onClick={() => changeColor(color)}
								>
									{color}
								</button>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

const colors = [
	"red",
	"green",
	"blue",
	"black",
	"yellow",
	"purple",
	"pink",
	"gray",
	"olive",
	"orange",
];

export default App;
