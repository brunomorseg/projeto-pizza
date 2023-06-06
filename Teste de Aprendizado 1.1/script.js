/*let listaJson = [
    {id:1, p:'First Parágrafo!'},
    {id:2, p:'Second Parágrafo!'},
    {id:3,p:'Third Parágrafo!'},
    {id:4, p:'The Last Parágrafo!'},
]

let c = (e)=>{
    return document.querySelector(e)
}


listaJson.map((item,index)=>{
    let pizzaItem = document.querySelector('#div').cloneNode(true);

    pizzaItem.document.querySelector('.div-p').innerHTML = item.p

    c('.div-texxto--area').append(pizzaItem)
    

    

}) */


let listaJson = [
    {id:1, p:'First Parágrafo!'},
    {id:2, p:'Second Parágrafo!'},
    {id:3,p:'Third Parágrafo!'},
    {id:4, p:'The Last Parágrafo!'},
]

let c = (e)=>{
    return document.querySelector(e)
}


listaJson.map((item,index)=>{
let listaPadrao = document.querySelector('.pizza-item').cloneNode(true);
//preencher as informações em pizza-item

//pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
//pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
//pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price}`
//pizzaItem.querySelector('.pizza-item--img img').src = item.img
//pizzaItem.querySelector('.pizza-item--add button').


listaPadrao.querySelector('.item--paragrafo').innerHTML = `${item.p} adoraria que todos soubessem ${item.id}`



   document.querySelector('.pizza-area').append(listaPadrao)


})



