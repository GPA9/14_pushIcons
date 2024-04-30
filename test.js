const fruits = ["Banana", "Orange", "Apple", "Mango"];

function addElementInArray(paramFunction){
    fruits.splice(3, 0, paramFunction);
    console.log(fruits);
}


addElementInArray("hola");