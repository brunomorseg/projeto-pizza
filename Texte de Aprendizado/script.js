let pizzaJson = [
    {id:1, name:'Mussarela', img:'images/pizza.png', price:20.19, sizes:['100g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:2, name:'Calabresa', img:'images/pizza2.png', price:18.00, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:3, name:'Quatro Queijos', img:'images/pizza3.png', price:17.45, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:4, name:'Americana', img:'images/pizza4.png', price:19.77, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:5, name:'Sorvete', img:'images/pizza5.png', price:21.43, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:6, name:'Moda da Casa', img:'images/pizza6.png', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:7, name:'Chocolate', img:'images/pizza7.png', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'}
];



const clicou = () => {

    const button = document.querySelector('#button')
    const shopping = document.querySelector('#shopping')
    const pizzaGrande = document.getElementById('teste')
    const pizzaMedia = document.getElementById('teste-2')
    const pizzaPequena = document.getElementById('teste-3')
   
    

    if (shopping.getAttribute('style') == 'display:none;') {
        shopping.setAttribute('style','display:flex;');
        pizzaGrande.setAttribute('style','background-color: #388bc5;')
        pizzaMedia.setAttribute('style','background-color: #9999990a;')
        pizzaPequena.setAttribute('style','background-color: #9999990a;')
        preço.innerHTML = 'R$65.50'
       
        
       
        
    } else {
        shopping.setAttribute('style','display:none;')
     
    }
}


//-----------------------------------------------------

const incremento = document.getElementById('incremento')
const decremento = document.getElementById('decremento')
const resultado = document.getElementById('span')
const cancel = document.querySelector('#cancel-1')
const button = document.querySelector('#button')
const shopping = document.querySelector('#shopping')
const adicionar = document.getElementById('add-1')
const carrinho = document.getElementById('carrinho')
const atualizar = document.getElementById('p-carrinho')




let contador = 0
resultado.innerHTML = contador

incremento.addEventListener('click',function () {
  resultado.innerHTML = contador+=1
})
decremento.addEventListener('click',function () {
    while(contador>0){resultado.innerHTML = contador-=1}
  })

cancel.addEventListener('click', ()=>{
    shopping.setAttribute('style','display:none;')
    
})

/*adicionar.addEventListener('click',()=>{
    if(pizzaGrande){
        carrinho.setAttribute('style','display:flex;')
        shopping.setAttribute('style', 'display:none;')
        atualizar.innerHTML = 'Mussarela G'
    } else if(pizzaMedia) {
        carrinho.setAttribute('style','display:flex;')
        shopping.setAttribute('style', 'display:none;')
        atualizar.innerHTML = 'Mussarela M'
    } else {
        carrinho.setAttribute('style','display:flex;')
        shopping.setAttribute('style', 'display:none;')
        atualizar.innerHTML = 'Mussarela P'
    }  
})
*/





//-----------------------------------------------------

const pizzaGrande = document.getElementById('teste')
const pizzaMedia = document.getElementById('teste-2')
const pizzaPequena = document.getElementById('teste-3')
const preço = document.getElementById('resultado')
const incremento1 = document.getElementById('incremento1')
const decremento1 = document.getElementById('decremento1')
const span1 = document.getElementById('span1')

let contador1 = 0
span1.innerHTML = contador1

incremento1.addEventListener('click',function () {
  span1.innerHTML = contador1+=1
})
decremento1.addEventListener('click',function () {
   while(contador1>0) {span1.innerHTML = contador1-=1}
  })


   pizzaGrande.addEventListener('click',function () {
   pizzaGrande.setAttribute('style','background-color: #388bc5;')
   pizzaMedia.setAttribute('style','background-color: #9999990a;')
   pizzaPequena.setAttribute('style','background-color: #9999990a;')

   
  
   let tentativa = preço.innerHTML

   tentativa = 'R$65.50' 

   preço.innerHTML = tentativa

  })


    

pizzaMedia.addEventListener('click',()=>{
    pizzaMedia.setAttribute('style','background-color: #388bc5;')
    pizzaGrande.setAttribute('style','background-color: #9999990a;')
    pizzaPequena.setAttribute('style','background-color: #9999990a;')

    let tentativa = preço.innerHTML

    tentativa = 'R$45.5' 

    preço.innerHTML = tentativa

})

const Pizza = () => {

    if (preço.innerHTML === 'R$65.50') {
        
        carrinho.setAttribute('style','display:flex;')
        
        shopping.setAttribute('style', 'display:none;')
        
        atualizar.innerHTML = 'Mussarela G'
        
        span1.innerHTML = resultado.innerHTML

    } else if (preço.innerHTML ==='R$45.5') {
        
        carrinho.setAttribute('style','display:flex;')
        
        shopping.setAttribute('style', 'display:none;')
        
        atualizar.innerHTML = 'Mussarela M'

        span1.innerHTML = resultado.innerHTML
    
    } else {
     
        carrinho.setAttribute('style','display:flex;')
     
        shopping.setAttribute('style', 'display:none;')
     
        atualizar.innerHTML = 'Mussarela P'

        span1.innerHTML = resultado.innerHTML
    
    }
  }

    pizzaPequena.addEventListener('click',()=>{
    pizzaPequena.setAttribute('style','background-color: #388bc5;')
    pizzaMedia.setAttribute('style','background-color: #9999990a;')
    pizzaGrande.setAttribute('style','background-color: #9999990a;')
    let tentativa = preço.innerHTML

    tentativa = 'R$20.19' 

    preço.innerHTML = tentativa 
})


//--------------------------------------------------------------------

//Click de fechar a aba do carrinho
const closer = document.querySelector('#menu-closer')
const car_1=document.querySelector('car_1')

closer.addEventListener('click', ()=>{
    carrinho.setAttribute('style','display:none;')
    car_1.setAttribute('style','display:flex;')
    carro.setAttribute('style','display:flex;')
})


