var textinput=document.getElementById("todo-input");
var value_list=[];
add_todo=()=>{
    var value=textinput.value;
    if(value.trim()!==""){
        if(value_list.includes(`${value}`)){
            alert("already here")
        }
        else{
            value_list.push(value);
        }
        
    var todo_html="";
    value_list.forEach(function(todo){
        todo_html+=
        `<li>
        <input type="checkbox" class="todo-check" id="${todo}" name="${todo}"/>
        <label for="${todo}">${todo}</label> 
        </li>`;
    });

    document.getElementById("text").innerHTML=todo_html;
    document.getElementById(`todo-input`).value='';
    }
};
onDelete=(id)=>{
    alert(`you've done ${id}!`)
    let index=value_list.indexOf(id);
    if(index>-1){
        value_list.splice(index,1);
    }
    console.log(value_list);
    var todo_html="";
    value_list.forEach(function(todo){
        todo_html+=
        `<li>
        <input type="checkbox" class="todo-check" id="${todo}" name="${todo}"/>
        <label for="${todo}">${todo}</label> 
        </li>`;
    });
    document.getElementById("text").innerHTML=todo_html;
};
document.getElementById("add-todo-btn").addEventListener("click",add_todo);
document.getElementById("text").addEventListener("change",(event)=>{
    if(event.target.classList.contains("todo-check")){
        onDelete(event.target.id);
    }
});

