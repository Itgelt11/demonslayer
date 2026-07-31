const work = document.querySelector(".work");
const add = document.querySelector(".add");
const list = document.querySelector(".list");
let value;
add.addEventListener("click", function () {
  const newDiv = document.createElement("div");
  newDiv.style.display = "flex";
  if (work.value === "") {
    return;
  }
  const task = document.createElement("p");
  value = work.value;
  task.textContent = value;

  newDiv.appendChild(task);

  const button = document.createElement("button");
  button.textContent = "remove";
  newDiv.appendChild(button);
  button.style.backgroundColor = "red";
  button.style.borderRadius = "3px";
  button.style.height = "30px";

  button.addEventListener("click", function () {
    newDiv.remove();
  });
  const undone = document.createElement("button");
  const done = document.createElement("button");
  done.style.backgroundColor = "green";
  undone.style.backgroundColor = "red";
  done.style.height = "30px";
  undone.style.height = "30px";
  done.style.borderRadius = "3px";
  undone.style.borderRadius = "3px";
  done.textContent = "done";
  newDiv.appendChild(done);
  done.addEventListener("click", function () {
    task.style.color = "green";
    undone.id = "replacement-btn";
    undone.textContent = "undone";
    newDiv.appendChild(undone);
    done.replaceWith(undone);
    undone.addEventListener("click", function () {
      task.style.color = "black";
      done.id = "replacement-btn";
      undone.replaceWith(done);
    });
  });
  const edit = document.createElement("button");
  edit.textContent = "edit";
  edit.style.backgroundColor = "yellow";
  edit.style.height = "30px";
  edit.style.borderRadius = "3px";
  newDiv.appendChild(edit);

  edit.addEventListener("click", function () {
    const editInput = document.createElement("input");
    editInput.value = value;
    newDiv.prepend(editInput);
    task.style.display = "none";
    edit.style.display = "none";
    const save = document.createElement("button");
    save.textContent = "save";
    save.style.backgroundColor = "lightgreen";
    save.style.height = "30px";
    save.style.borderRadius = "3px";
    save.addEventListener("click", function () {
      editInput.style.display = "none";
      task.style.display = "block";
      value = editInput.value;
      task.textContent = editInput.value;
      edit.style.display = "block";
      save.style.display = "none";
    });
    newDiv.appendChild(save);
  });
  work.value = "";
  list.appendChild(newDiv);
});
button.style.backgroundColor = "blue";
