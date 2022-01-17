
const myFunctions = {
hello: function(name) {
    return `<h1>Hallo ${name} du Glückspilz.<h2>`
},
goodbye: (name) => `<h1>Goodbye ${name} du Glücksschweinchen</h1>`
};

function anotherFunction() {
    return `<h2>TEST</h2>`
}


export {myFunctions, anotherFunction};