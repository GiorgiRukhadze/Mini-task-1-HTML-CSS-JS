let input = document.querySelector(".input");
let button1 = document.querySelector(".button");
let box2 = document.querySelector(".secondbox");

button1.addEventListener("click", function () {
  let listBox = document.createElement("div");
  box2.appendChild(listBox);
  listBox.classList.add("listBox");

  let listp = document.createElement("p");
  listBox.appendChild(listp);
  listp.classList.add("listP");
  listp.innerHTML = input.value;

  let listDiv = document.createElement("div");
  listBox.appendChild(listDiv);
  listBox.classList.add("listdiv");

  let input3 = document.createElement("input");
  listDiv.appendChild(input3);
  input3.classList.add("input3");

  let button2 = document.createElement("button");
  listDiv.appendChild(button2);
  button2.classList.add("button2");
  button2.innerHTML = "CLICK";

  button2.addEventListener("click", function () {
    let listItem = document.createElement("p");
    listBox.appendChild(listItem);
    listItem.classList.add("listItem");
    listItem.innerHTML = input3.value;
    let a = document.createElement("a");
    listItem.appendChild(a);
    a.classList.add("a");
    a.innerHTML = "&times";

    a.addEventListener("click", function () {
      listItem.remove();
    });
  });
  let del = document.createElement("a");
  listBox.appendChild(del);
  del.classList.add("del");
  del.innerHTML = "&times";
  del.addEventListener("click", function () {
    listBox.remove();
  });

  del.addEventListener("click", function () {
    del.remove();
  });
});
