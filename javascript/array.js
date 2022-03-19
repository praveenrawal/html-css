var arr = []


function addNew()
{
    var name = prompt("add name")
    arr.push(name);
}

function display()
{
    console.log(arr);
}

while(1)
{
    var a= prompt("please enter action add,display,exit")
    if(a=="add")
        addNew();
    if(a=="display")
    {
        display();
    }
    if(a=="exit")
        break;
}