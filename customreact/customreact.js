 function customRender(reactElement, container) {
	// const domElement = document.createElement(reactElement.type);
	// domElement.innerHTML = reactElement.children;
	// domElement.setAttribute("href", reactElement.props.href);
	// domElement.setAttribute("target", reactElement.props.target);
	// container.appendChild(domElement);
	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;
	for (const props in reactElement.props) {
		if (props === "children") continue;
		domElement.setAttribute(props, reactElement.props[props]);
	}
	container.appendChild(domElement);
}

const reactElement = {
	type: "a",
	props: {
		href: "http://google.com",
		target: "_blank",
	},
	children: "Click me",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
