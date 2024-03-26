const data = [{
    "name": "DROPSET TRAINER SHOES Blue",
    "size": [38],
    "color": ["blue", "green"],
    "price": 125,
    "icon": "Frame 14.png",
    "page": "product_page.html",
    "id": 0
},
{
    "name": "ULTRABOOST 1.0 MIAMI Green",
    "size": [39],
    "color": "green",
    "price": 125,
    "icon": "tr1.png",
    "id": 1
},
{
    "name": "ADIDAS OZELIA SHOES Green",
    "size": [ 40],
    "color": "green",
    "price": 125,
    "icon": "tr2.png",
    "id": 2
},
{
    "name": "ADIDAS 4DFWD 2 RUNNING SHOES",
    "size": [ 41],
    "color": ["orange", "green"],
    "price": 125,
    "icon": "tr3.png",
    "id": 3
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [ 42],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr4.png",
    "id": 4
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [43],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr5.png",
    "id": 5
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [44],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr6.png",
    "id": 6
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [45],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr7.png",
    "id": 7
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [ 46],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr8.png",
    "id": 8
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr9.png",
    "id": 9
}]

/*let active_filtr = 0

function render(){
    data.map((element)=>{
        if(element.id > 0){
        let card0 = document.createElement('div')  
        let list = document.querySelector('.catalog')
        card0.classList.add('card')
        console.log(card0)
        card0.innerHTML = `
                            <img src="/img/${element.icon}" alt="">
                            <p>${element.name}</p>
                            <button><img src="/img/Button125.png" alt=""></button>`
                            
            if(pr(element, active_filtr)){
                list.append(card0)
            }
   
        }
    })
}
function But38(index, size){
    active_filtr = size
    let arr_but = document.querySelectorAll('#but')

    for(let i = 0; i < arr_but.length; i++){
        if(arr_but[i].classList.contains('white')){
            if(i === index){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                render()
            }
        }  
        else if(arr_but[i].classList.contains('black')){
            if(i === index){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                let list = document.querySelector('.catalog')
                list.innerHTML = ''
            }
        }
    }
}

function pr(index, act_filt){
    let ind = index.size
    for(let i = 0; i < ind.length; i++){
        if(ind[i] === act_filt){
            return 1
        }
        console.log(2)
        return 0
    }
}

render()*/

let active_filtr = 0
let arr_but = document.querySelectorAll('#but')

function But(){
    for(let i = 0; i < arr_but.length; i++){
        if(arr_but[i].classList.contains('black')){
            arr_but[i].classList.toggle('white')
            arr_but[i].classList.toggle('black')
        }
    }
    rend(0)
}

function But38(index, size){
    active_filtr = size

    for(let i = 0; i < arr_but.length; i++){
        if(arr_but[i].classList.contains('white')){
            if(i === index){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                rend(1)
            }
        }  
    }
}

function rend(x){
    let cards =[]
    if(x === 1){
    data.map((element)=>{
        let remainder = element.size
        console.log(active_filtr)
        for(let i = 0; i < remainder.length; i++){
            if(remainder[i] === active_filtr){
                cards.push(element)      
            }
        }
    })
    if(cards.length >= 1){
        cards.map((el)=>{
            let card0 = document.createElement('div')  
            let list = document.querySelector('.catalog')
            card0.classList.add('card')
            console.log(card0)
            card0.innerHTML = `
                                <img src="/img/${el.icon}" alt="">
                                <p>${el.name}</p>
                                <button><img src="/img/Button125.png" alt=""></button>`
            list.append(card0)
        })
    }
    }else if(x===0){
        let list = document.querySelector('.catalog')
        list.innerHTML = ' '
    }
}

