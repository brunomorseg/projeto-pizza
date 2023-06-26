let listaCarros = [
{id:0, marca:'Chevrolet', modelo:'Onix 1.4 MPFI LTZ 9V FLEX 4P MANUAL', ano:'2016', km:25.030, img:'./imagem/onixltz.jpg', price: '50.500,00'}, 
{id:1, marca:'Chevrolet', modelo:'Onix 1.4 MPFI LTZ 9V FLEX 4P MANUAL', ano:'2017', km:35.130, img:'./imagem/onixltz.jpg', price: '57.500,00'}, 
{id:2, marca:'Chevrolet', modelo:'Onix 1.4 MPFI LTZ 9V FLEX 4P MANUAL', ano:'2017', km:18.400, img:'./imagem/onixltz.jpg', price: '59.500,00'}, 
{id:3, marca:'Chevrolet', modelo:'Onix 1.4 MPFI LT 9V FLEX 4P MANUAL', ano:'2019', km:45.132, img:'./imagem/onix2019.jpg', price:'66.290,00'}, 
{id:4, marca:'Chevrolet', modelo:'Onix 1.4 MPFI LT 9V FLEX 4P MANUAL', ano:'2019', km:45.132, img:'./imagem/onix2019.jpg', price:'66.290,00'},
{id:5, marca:'Chevrolet', modelo:'Onix 1.4 MPFI LTZ 9V FLEX 4P MANUAL', ano:'2021', km:28.500, img:'./imagem/onix2021.jpg', price:'79.980,00'}

]


const c = (e)=>{
    return document.querySelector(e)
}
const cs = (e)=> {
    return document.querySelectorAll(e)
}

listaCarros.map((item, index)=>{
    let carItem = c('.car-item').cloneNode(true)
    document.querySelector('.car-area').append(carItem)
    carItem.setAttribute('data-id', index)

    carItem.querySelector('.car-item--img img').src = item.img
    carItem.querySelector('.car-item--modelo').innerHTML = item.modelo
    carItem.querySelector('.car-item--marca').innerHTML = `Marca: ${item.marca}`
    carItem.querySelector('.car-item--km').innerHTML = `Quilometragem: ${item.km.toFixed(3)}`
    carItem.querySelector('.car-item--price').innerHTML = `R$${item.price}`


    //--------------------------------------

    carItem.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault()
        
        c('.model').style.display = 'block'
        

    })

})