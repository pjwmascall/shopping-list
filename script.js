const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	createDeleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function(event) {
    event.target.classList.toggle("done");
}

function createDeleteButton(item) {
	const btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	item.appendChild(btn);
	btn.onclick = removeParent;
}

function removeParent(event) {
	event.target.parentNode.remove();
}

listItems.forEach(createDeleteButton);