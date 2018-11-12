
function storeData(key, value) {
    sessionStorage.setItem(key, value); // sessionStorage / localStorage
}

function readData(key) {
    return sessionStorage.getItem(key); // sessionStorage / localStorage
}

function clearStorage() {
    sessionStorage.clear(); // sessionStorage / localStorage
}

storeData('first', 'blabla');
storeData('second', 'fdfbdfb');
storeData('third', 'xcbvas');

let x = readData('second');
console.log(x);
// clearStorage();




