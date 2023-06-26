let pizzaJson = [
    {id:1, name:'Mussarela', img:'images/pizza.png', price:20.19, sizes:['100g', '530g', '860g'], description:'Descrição [1] da pizza em mais de uma linha muito legal bem interessante'},
    {id:2, name:'Calabresa', img:'images/pizza2.png', price:18.00, sizes:['320g', '530g', '860g'], description:'Descrição [2] da pizza em mais de uma linha muito legal bem interessante'},
    {id:3, name:'Quatro Queijos', img:'images/pizza3.png', price:17.45, sizes:['320g', '530g', '860g'], description:'Descrição [3] da pizza em mais de uma linha muito legal bem interessante'},
    {id:4, name:'Americana', img:'images/pizza4.png', price:19.77, sizes:['320g', '530g', '860g'], description:'Descrição [4] da pizza em mais de uma linha muito legal bem interessante'},
    {id:5, name:'Sorvete', img:'images/pizza5.png', price:21.43, sizes:['220g', '530g', '860g'], description:'Descrição [5] da pizza em mais de uma linha muito legal bem interessante'},
    {id:6, name:'Moda da Casa', img:'images/pizza6.png', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição [6] da pizza em mais de uma linha muito legal bem interessante'},
    {id:7, name:'Chocolate', img:'images/pizza7.png', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição [7] da pizza em mais de uma linha muito legal bem interessante'}
];


const c = (e)=>{
    return document.querySelector(e)
}

const cs = (e) => document.querySelectorAll(e)

pizzaJson.map((item,index)=>{

    let pizzaItem = c('.pizza-item').cloneNode(true)
    c('.pizza-area').append(pizzaItem)
    pizzaItem.setAttribute('data-id', index)


    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--img img').src = item.img


//---------------------------------------------------------------
//Feito o Clone dos items e manipulação da lista com as tags

    pizzaItem.querySelector('a').addEventListener('click', (e)=> {
            e.preventDefault()
            //close and open the Window
            c('.pizzaWindowArea').style.display = 'flex'

            c('.pizzaInfo--cancelMobileButton').addEventListener('click', ()=>{
                c('.pizzaWindowArea').style.display = 'none'
            })

            c('.pizzaInfo--cancelButton').addEventListener('click',()=>{
                c('.pizzaWindowArea').style.display = 'none'
            })


            let key = e.target.closest('.pizza-item').getAttribute('data-id')

            c('.pizzaBig img').src = pizzaJson[key].img
            c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
            c('.pizzaInfo--pricearea').innerHTML = `R$${item.price.toFixed(2)}`
            c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description

            document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex)=>{
                size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
            })


    
    
        })



















})



