function userAdd() {
    let newToDo = prompt("What do you need to add?");
    let liLast = document.createElement('li');
    liLast.innerHTML = newToDo;
    ol.append(liLast);
}