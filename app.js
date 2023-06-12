// const fs = require('fs');


window.addEventListener('load', () => { //when window is finish loading, 
    //the evenlistener selects the DOM elements brabbing the certain classes
    // store = JSON.parse(localStorage.getItem('store')) || [];
    const form = document.querySelector(".taskForm");
    const input = document.querySelector(".taskInput")
    const list_el = document.querySelector(".tasks");

    form.addEventListener('submit', (e) => {//adds a eventlistener 
        e.preventDefault();//when form is submitted prevents the default

        // const stor = {
        //     content: e.target.elements.content.value,
        //     done: false,
        //     createdAt: new Date().getTime()
        // }

        // store.push(stor);

        // localStorage.setItem('store', JSON.stringify(store));

        //retrieves the value enetered input the field
        const task = input.value;

        if(!task){ //if the task is not filled. it will alert the message
            alert("please fill out the task");
            return;
        }

        const task_el = document.createElement("div");//createed a div with the variable of task
        task_el.classList.add("task");//class name is task

        const task_content_el = document.createElement("div");//created a div
        task_content_el.classList.add("content");//a div class for content

        task_el.appendChild(task_content_el);//task has a child of content

        const task_input_el = document.createElement("input");//created a input element
        task_input_el.classList.add("text")//added class text
        task_input_el.type = "text"; //type of input is text
        task_input_el.value = task; //type of value is task
        task_input_el.setAttribute("readonly", "readonly"); //adding the readonly attribute

        task_content_el.appendChild(task_input_el); //content is the child of input

        const task_actions_el = document.createElement("div")//created a div element
        task_actions_el.classList.add("actions");//for actions 

        const task_edit_el = document.createElement("button")//a button element 
        task_edit_el.classList.add("edit")//a edit class
        task_edit_el.innerHTML = "Edit"; //give the innerHTML "Edit ""

        const task_delete_el = document.createElement("button");//created a delete element
        task_delete_el.classList.add("delete")//class named delete
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);//edit is the child of actions
        task_actions_el.appendChild(task_delete_el);//deletee is the child of actions

        task_el.appendChild(task_actions_el);//actions is the child of task

        list_el.appendChild(task_el);//task is the child of list

        input.value = "";//input with no value

        task_edit_el.addEventListener('click', () => { //creating a eventlistener
            if (task_edit_el.innerText.toLowerCase() == "edit") {//text to lowercase
                task_input_el.removeAttribute("readonly");//removing the readonly
                task_input_el.focus();//blink
                task_edit_el.innerText = "Save"//inner text after click is Save
            } else {
                task_input_el.setAttribute("readonly", "readonly");//else sets the attribute
                task_edit_el.innerText = "Edit";//Edit stays the same on visual
            }
        });

        task_delete_el.addEventListener('click', () => {//delete 
            list_el.removeChild(task_el);//removes the task
        });
    })
})