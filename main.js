function userAdd() {
    let newToDo = prompt("What do you need to add?");
    let nextItem = document.createElement('li');
    nextItem.innerHTML = newToDo;
    ol.append(nextItem);
}