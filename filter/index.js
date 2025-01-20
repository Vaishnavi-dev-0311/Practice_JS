const ages= [10,18,24,30,27];
const minorAge= ages.filter(minor);
console.log(minorAge);


function minor(element){
    return element<=18;
}