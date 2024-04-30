const push = document.getElementById('push');
const unshift = document.getElementById('unshift');
const insertAt = document.getElementById('insertAt');
const pop = document.getElementById('pop');
const shift = document.getElementById('shift');
const removePosition = document.getElementById('removePosition');
const removeAt = document.getElementById('removeAt');
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

function addPositionAt() {
	const index = parseInt(addPosition.value); // Obtener el índice desde el campo de entrada
	screenArray.splice(index, 0, randomElement()); // Insertar un elemento aleatorio en la posición especificada
	updateScreenArray();
};

function removePositionAt() {
	const index = parseInt(removePosition.value);
	screenArray.splice(index, 1);
	updateScreenArray();
}

const removeElement = () => {
	screenArray.pop(randomElement());
	updateScreenArray();
};

const removeElementAtBeginning = () => {
	screenArray.shift(randomElement());
	updateScreenArray();
};



push.addEventListener("click", addElement);
unshift.addEventListener("click", addElementAtBeginning); // Asigna la función al evento de clic del botón unshift
pop.addEventListener("click", removeElement);
shift.addEventListener("click", removeElementAtBeginning);
insertAt.addEventListener("click", addPositionAt);
removeAt.addEventListener("click", removePositionAt);

const randomElement = () =>
	characters[Math.floor(Math.random() * characters.length)];

const updateScreenArray = () => {
	arrayHtml.innerText = screenArray;
};