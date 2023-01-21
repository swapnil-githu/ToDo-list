function addItem() {
  // get the item data from the form
  let itemName = document.getElementById("item-name").value;
  let itemDate = document.getElementById("item-date").value;
  let itemPriority = document.getElementById("item-priority").value;

  // create a new list item and add the data
  let newItem = document.createElement("li");
  newItem.innerHTML = `<span>${itemName}</span> <span>${itemDate}</span> <span>${itemPriority}</span>`;

  // add the new item to the list
  document.getElementById("list").appendChild(newItem);

  // store the data in local storage
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  todoList.push({ itemName, itemDate, itemPriority });
  localStorage.setItem("todoList", JSON.stringify(todoList));

  // reset the form
  document.getElementById("item-name").value = "";
  document.getElementById("item-date").value = "";
  document.getElementById("item-priority").value = "";
}
