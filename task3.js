window.addEventListener('load',()=>{
    const form =document.querySelector("#tk-form");
    const input=document.querySelector("#tk-input");
    const list_x=document.querySelector("#tasks");
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task=input.value;
        if(!task){
            alert("Please fill out the task");
            return;
       
        }

        const task_x=document.createElement("div");
        task_x.classList.add("task");
        const task_content_x=document.createElement("div");
        task_content_x.classList.add("content");
        task_x.appendChild(task_content_x);
        task_content_x.innerText=task;


        const task_input_x=document.createElement("input");
        task_input_x.classList.add("text");
        task_input_x.type="text";
        task_input_x.value=task;
        task_input_x.setAttribute("readonly", "readonly");


        const task_actions_x=document.createElement("div");
        task_actions_x.classList.add("actions");

        const task_edit_x=document.createElement("button");
        task_edit_x.classList.add("edit");
        task_edit_x.innerHTML="Edit";
        const task_delete_x=document.createElement("button");
        task_delete_x.classList.add("delete");
        task_delete_x.innerHTML="Delete";

        task_actions_x.appendChild(task_edit_x);
        task_actions_x.appendChild(task_delete_x);

        task_x.appendChild(task_actions_x);
        list_x.appendChild(task_x);
        input.value="";

        task_edit_x.addEventListener('click',()=>{
            if(task_edit_x.innerText.toLowerCase()=="edit"){
                task_input_x.removeAttribute("readonly");
                task_input_x.focus();
                task_edit_x.innerText="Save";
            }
            else{
                task_input_x.setAttribute("readonly", "readonly");
                task_edit_x.innerText="Edit";
            }
            task_delete_x.addEventListener('click',()=>{
                list_x.removeChild(task_x);
            })
        })

    })
})