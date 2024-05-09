window.addEventListener('load', ()=>{
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

    const newInputForm = document.querySelector("#input-form");

    newInputForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const todo = {
            task: e.target.elements.todoInput.value,
            time: new Date(),
            done: false
        }

        if(e.target.elements.todoInput.value == ""){
            console.log("Empty Input");
        }
        else{
            savedTodos.push(todo);
            localStorage.setItem('todos', JSON.stringify(savedTodos));
            displayTodos(savedTodos);
        }
        
        e.target.reset();
    });

    displayTodos(savedTodos);
});

const displayTodos = (savedTodos)=>{
    const toDoListItemContainer = document.querySelector(".to-do-list-item-container");
    const toDoListItemContainerCompletedTasks = document.querySelector(".to-do-list-item-container-completed-tasks")
    toDoListItemContainer.innerHTML = "";
    toDoListItemContainerCompletedTasks.innerHTML = "";
    
    savedTodos.forEach((todo, index)=>{
        const toDoListItem = document.createElement('div');
        toDoListItem.classList.add('to-do-list-item');

        const leftPart = document.createElement('div');
        leftPart.classList.add('left-part');
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const input = document.createElement('input');
        input.classList.add('display-to-do');
        input.setAttribute('type', 'text');
        input.setAttribute('readonly', 'true');
        input.value = todo.task;

        const rightPart = document.createElement('div');
        rightPart.classList.add('right-part');
        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.textContent = 'Edit';
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove';

        leftPart.appendChild(bubble);
        leftPart.appendChild(input);

        rightPart.appendChild(editButton);
        rightPart.appendChild(removeButton);

        toDoListItem.appendChild(leftPart);
        toDoListItem.appendChild(rightPart);
        
        if(todo.done){
            toDoListItemContainerCompletedTasks.appendChild(toDoListItem);

            bubble.classList.add('done');
            input.classList.add('done');

        }
        else{
            toDoListItemContainer.appendChild(toDoListItem);

            bubble.classList.remove('done');
            input.classList.remove('done');

        }

        bubble.addEventListener('click', (e)=>{
            e.target.classList.toggle('done');
            input.classList.toggle('done');
            todo.done = !todo.done;
            localStorage.setItem('todos', JSON.stringify(savedTodos));
            if(todo.done){
                toDoListItemContainerCompletedTasks.appendChild(toDoListItem);
            }
            else{
                toDoListItemContainer.appendChild(toDoListItem);
            }
            displayTodos(savedTodos);
        });

        editButton.addEventListener('click', (e)=>{
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', ()=>{
                input.setAttribute('readonly', 'true');
                todo.task = input.value;
                localStorage.setItem('todos', JSON.stringify(savedTodos));
            });
        });

        removeButton.addEventListener('click', ()=>{
            savedTodos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(savedTodos));
            displayTodos(savedTodos);
        });
    });

    const emptyMessageContainerForPendingTasks = document.getElementById("pending-tasks");
    const emptyMessageContainerForCompletedTasks = document.getElementById("completed-tasks");
    const completedTasks = savedTodos.filter(todo => todo.done);
    const pendingTasks = savedTodos.filter(todo => !todo.done);

    if(completedTasks.length == 0 && pendingTasks.length == 0){
        emptyMessageContainerForPendingTasks.textContent = "You are all set for today!";
        emptyMessageContainerForCompletedTasks.textContent = "No tasks completed yet!";
        emptyMessageContainerForPendingTasks.classList.remove("hide")
        emptyMessageContainerForCompletedTasks.classList.remove("hide")
    }
    else if (completedTasks.length !=0 && pendingTasks.length != 0){
        emptyMessageContainerForPendingTasks.classList.add("hide")
        emptyMessageContainerForCompletedTasks.classList.add("hide")
    }
    else{
        if(pendingTasks.length == 0){
            emptyMessageContainerForPendingTasks.textContent = "You are all set for today!";
            emptyMessageContainerForPendingTasks.classList.remove("hide")
            emptyMessageContainerForCompletedTasks.classList.add("hide")
        }
        if(completedTasks.length == 0){
            emptyMessageContainerForCompletedTasks.textContent = "No tasks completed yet!";
            emptyMessageContainerForCompletedTasks.classList.remove("hide")
            emptyMessageContainerForPendingTasks.classList.add("hide")
        }
    }
}