let pizzaJson = [
    {id:1, name:'Mussarela', img:'images/pizza.png', price:20.19, sizes:['100g', '530g', '860g'], description:'Descrição [1] da pizza em mais de uma linha muito legal bem interessante'},
    {id:2, name:'Calabresa', img:'images/pizza2.png', price:18.00, sizes:['320g', '530g', '860g'], description:'Descrição [2] da pizza em mais de uma linha muito legal bem interessante'},
    {id:3, name:'Quatro Queijos', img:'images/pizza3.png', price:17.45, sizes:['320g', '530g', '860g'], description:'Descrição [3] da pizza em mais de uma linha muito legal bem interessante'},
    {id:4, name:'Americana', img:'images/pizza4.png', price:19.77, sizes:['320g', '530g', '860g'], description:'Descrição [4] da pizza em mais de uma linha muito legal bem interessante'},
    {id:5, name:'Sorvete', img:'images/pizza5.png', price:21.43, sizes:['220g', '530g', '860g'], description:'Descrição [5] da pizza em mais de uma linha muito legal bem interessante'},
    {id:6, name:'Moda da Casa', img:'images/pizza6.png', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição [6] da pizza em mais de uma linha muito legal bem interessante'},
    {id:7, name:'Chocolate', img:'images/pizza7.png', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição [7] da pizza em mais de uma linha muito legal bem interessante'}
];

let cart = []
let modalQt = 1 
let modalKey = 0

const c = (e) => {
    return document.querySelector(e)
}

const cs = (e) => document.querySelectorAll(e)


//Listagem das Pizzas

pizzaJson.map((item,index)=>{
    let pizzaItem = c('.pizza-item').cloneNode(true);
 
    pizzaItem.setAttribute('data-id', index)
    
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

   

//------------------------------------------------------------------

    c('.pizza-area').append(pizzaItem)

//------------------------------------------------------------------

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
       e.preventDefault()

        let key = e.target.closest('.pizza-item').getAttribute('data-id');
        modalKey = key

        modalQt = 1
        
        //Open the window-area and close
        c('.pizzaWindowArea').style.display = 'flex'
     

        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        c('.pizzaInfo--actualPrice').innerHTML = `R$${pizzaJson[key].price.toFixed(2)}`
        c('.pizzaBig img').src = pizzaJson[key].img
      
        c('.pizzaInfo--size.selected').classList.remove('selected')

        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{

            if(sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })
        
        c('.pizzaInfo--qt').innerHTML = modalQt

    })
})

//Eventos do MODAL



/* c('.pizzaInfo--cancelMobileButton').addEventListener('click',()=>{
        c('.pizzaWindowArea').style.display = 'none'


   c('.pizzaInfo--cancelButton').addEventListener('click', ()=>c('.pizzaWindowArea').style.display = 'none'
        )
    })*/

const closeModal = () => {
  //  c('.pizzaWindowArea').style.opacity = 0

    setTimeout(
        ()=>c('.pizzaWindowArea').style.display='none', 200
    )
}

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal)
})

c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(c('.pizzaInfo--qt').innerHTML >1) {
        modalQt--
        c('.pizzaInfo--qt').innerHTML = modalQt
    }
})

c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQt++
    c('.pizzaInfo--qt').innerHTML = modalQt
    
})


cs('.pizzaInfo--size').forEach((size)=>{
    size.addEventListener('click',(e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected')
        size.classList.add('selected')
    })
})

c('.pizzaInfo--addButton').addEventListener('click',()=>{

    

    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'))

    let identifier = pizzaJson[modalKey].id+'@'+size

    let keyey = cart.findIndex((item)=> item.identifier == identifier
    )

    if(keyey>-1){
        cart[keyey].qt +=modalQt
    }else{


    cart.push({
        identifier,
        id:pizzaJson[modalKey].id,
        size,
        qt:modalQt
})
}

updateCart();
closeModal();

  
})

c('.menu-openner').addEventListener('click',()=> {
    if(cart.length>0){
    c('aside').style.left = 0}
})
c('.menu-closer').addEventListener('click',()=>{
    c('aside').style.left = '100vw'
})


const updateCart = ()=> {


    c('.menu-openner span').innerHTML = cart.length



    if(cart.length > 0){
       c('aside').classList.add('show')
        c('.cart').innerHTML = ' '


        let subtotal = 0
        let desconto = 0
        let total = 0

       for(let i in cart){
        let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id)
        
        subtotal += pizzaItem.price * cart[i].qt

        
        
        let cartItem= c('.models .cart--item').cloneNode(true)
    
let pizzaSizeName;
switch(cart[i].size){
    case 0:
        pizzaSizeName = 'P'
        break;
    case 1:
        pizzaSizeName = 'M'
        break;  
    case 2:
        pizzaSizeName = 'G'
        break;


}

let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

        cartItem.querySelector('img').src = pizzaItem.img
        cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName
        cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt
        cartItem.querySelector('.cart--item-qtmenos').addEventListener('click',()=>{
           if(cart[i].qt > 1) {
            cart[i].qt--
           } else {
            cart.splice(i,1)
           }
          
           updateCart()
            

        })
        cartItem.querySelector('.cart--item-qtmais').addEventListener('click',()=>{cart[i].qt++;
            updateCart();
            
        })

        c('.cart').append(cartItem)


    }

    desconto = subtotal * 0.1
    total = subtotal - desconto

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`

    } else {
        c('aside').classList.remove('show')
        c('aside').style.left = '100vw'
    }
}