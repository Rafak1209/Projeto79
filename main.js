menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                  "Pizza de Calabresa",
                  "Pizza de Bacon com milho",
                  "Pizza de Frango",
                  "Pizza de Quatro quejos",
                  "Pizza de Mussarela"];

function getMenu(){
var htmldata;

    var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    hatmldata=""
    for(var i=0;i<menuListArray.length;i++){
        htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = hatmldata;

}
function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
//Completar o código

}

function addTop(){
//Completar o código
}