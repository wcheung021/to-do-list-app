function newItem(){
//add a new item to a list of items
    let li = $('<li></li>');
    let inputValue = $("#input").val();
        li.append (inputValue);

        if ($('#input').val < -1 ){
            alert("Please write something");
        }else {
            let list = $("#list");
            list.append(li);
        }
//can cross out an item from the list of items.
        li.on("click",function(){       
        li.addClass("strike");
        });
// delete an item from the list of items
    let inputs = $(".list");
        inputs.remove();
//change the order of items in the list of items
        $("#list").sortable();
}