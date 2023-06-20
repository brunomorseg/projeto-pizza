let pizzaJson = [
    {id:1,name:'Mussarela',price:20.19,img:'../images/pizza.png',sizes:['320g','180g','90g'], description:'Essa pizza é uma das melhores do estado do Rio de Janeiro'},
    {id:2,name:'Calabresa',price:18.19,img:'../images/pizza2.png',sizes:['320g','180g','90g'], description:'Essa pizza é uma das melhores do estado do Rio de Janeiro'},
    {id:3,name:'Portuguesa',price:21.19,img:'../images/pizza3.png',sizes:['320g','180g','90g'], description:'Essa pizza é uma das melhores do estado do Rio de Janeiro'}
]

let c = (e)=>{
    return document.querySelector(e)
}


pizzaJson.map((item,index)=>{
let pizzaItem = document.querySelector('.pizza-item').cloneNode(true);
//preencher as informações em pizza-item

//pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
//pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
//pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price}`
//pizzaItem.querySelector('.pizza-item--img img').src = item.img
//pizzaItem.querySelector('.pizza-item--add button').

addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('clicou na pizza!')
})


   c('.pizza-area').append(pizzaItem)


})
