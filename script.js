alert("Please fill out the forms beore you proceed...");

//Generate prefix of name
function genPrefix(firstName) {
    if (firstName.length > 4) {
        return "The Great";
    } else {
        return "Master";
    }
}
//Generate First Name of name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowercase();
    if (firstLetter === "a") {
        return "Ari";
    } else if (
        (firstLetter === 'b')
    ) {
        return "Benjamin"
    }
    else {
        return "John"
    }
}

//Generate middle name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road'){
        return `${favoriteColor}ridge` //IE: Redridge
    } else if (roadType === 'street'){
        return `${favoriteColor}son`}
    else if (roadType === 'ave'){
        return `${favoriteColor}field`}
    else {
        return `${favoriteColor}stone`
    }
}

//Generate Last name
function genLastName(lastName){
    const lastLetter= lastName.charAt(lastName.length-1).toLowercase()
    if (lastLetter==='a'){
        return 'Shadow'
    }
    else if (lastLetter === 'e'){
return 'Storm'
    }
    else if (lastLetter === 'i'){
        return 'Blaze'
    }
    else if(lastLetter === 'o'){
        return 'Thorn'}
    else if (lastLetter === 'u'){
        return 'Frost'}
    else{
        return 'Moon'
    }
}

function genSuffix (favoriteAnimal){
return `of the ${favoriteAnimal}`
}

//Master Function to Assemble Full Name
function genFullName (){
//Define variables from input
const firstName = document.getElementById("firstName").value.trim();
const lastName = document.getElementById("lastName").value.trim();
const roadType = document.getElementById("roadType").value.trim();
const favoriteColor = document.getElementById("favoriteColor").value.trim();
const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();


}
