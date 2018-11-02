
// function relations() {
//     var active = document.querySelector(".active");
//     active.className = "";
//     active.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
// }

// relations();


// function getText() {

//     var liText = document.querySelector('#get-text').firstChild.nodeValue;

//     alert(liText);

// }

// function replaceText(string) {
//     var liText = document.querySelector('#get-last');
//     liText.firstChild.nodeValue = string;
// }

// replaceText('Misa');


// function createSlect(array, domNode) {
//     var stringCode = "<select>";
//     for (var i = 0; i < array.length; i++) {
//         var option = array[i];
//         stringCode += "<option>" + option + "</option>"
//     }
//     stringCode += "</select>";
//     domNode.innerHTML += stringCode;
// }

// var divForSelect = document.querySelector('#select');
// var options = ['First', 'Second', 'Third', 'Fourth']
// createSlect(options, divForSelect);

// createSlect([1, 2, 3], divForSelect.nextElementSibling);





function appendSelect(options, node) {
    var select = document.createElement("select");

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.textContent = options[i];
        select.appendChild(option);
    }
    node.appendChild(select);
}
var divForSelect = document.querySelector('#select');
var options = ['First', 'Second', 'Third', 'Fourth']
appendSelect(options, divForSelect);

