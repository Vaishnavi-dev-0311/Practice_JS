
let fruits=["apple","orange","banana"];

fruits.forEach(capitalize);

fruits.forEach(display); 

function capitalize(element,index,array){
    array[index]= element.charAt(0).toUpperCase() + element.slice(1);
}

function upperCase(element, index, array){
    array[index] =element.toUpperCase();
}

function display(element){
    console.log(element)
}