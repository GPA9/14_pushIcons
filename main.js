const push = document.getElementById('push');
const unshift = document.getElementById('unshift');
const insertAt = document.getElementById('insertAt');
const addPosition = document.getElementById('addPosition');
const arrayHtml = document.getElementById('arrayHtml');

const characters = ["🍄", "🥔", "👾", "📌", "😶‍🌫️", "🤡", "👽", "🐧"];
const screenArray = [];

const addElement = () => {
	screenArray.push(randomElement());
	updateScreenArray();
};

const addElementAtBeginning = () => {
	screenArray.unshift(randomElement()); // Añade un elemento al principio del array
	updateScreenArray();
};

cons

push.addEventListener("click", addElement);
unshift.addEventListener("click", addElementAtBeginning); // Asigna la función al evento de clic del botón unshift

const randomElement = () =>
	characters[Math.floor(Math.random() * characters.length)];

const updateScreenArray = () => {
	arrayHtml.innerText = screenArray;
};