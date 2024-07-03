const input=document.getElementById("newTodo");
const addbtn=document.getElementById("addBtn");
const list=document.getElementById("todoList");

function addd(){
    const todotext=input.value;
    input.value='';
    const listt=document.createElement('li');
    const checkboxx=document.createElement('input');
    const text=document.createElement('span');
    const delbtn=document.createElement('button');
    checkboxx.type='checkbox';
    listt.appendChild(checkboxx);
    listt.appendChild(text);
    listt.appendChild(delbtn);
    
    text.textContent=todotext;
    delbtn.textContent='Delete';
    list.appendChild(listt);


    delbtn.addEventListener('click',function(){
        list.removeChild(listt);
    });

    

}


addbtn.addEventListener('click',addd)
