//Ejercicio 1
/* const fnFilter = beer => beer.abv <5
const beersBajoAbv = beers.filter(fnFilter)
console.log(beersBajoAbv) 
 */

/* const nuevasCervezas = beersBajoAbv.map((beer,i,array)=>{
    console.log("Name:", array[i].name),
    console.log("Alcohol:", array[i].abv),
    console.log("Amargor:", array [i].ibu)
 

}) */ 
/* const fnMap = ((beer,i,array)=>{
    console.log("Name:", array[i].name),
    console.log("Alcohol:", array[i].abv),
    console.log("Amargor:", array [i].ibu)
})

const nuevasCervezas = beersBajoAbv.map(fnMap) */ 





//Ejercicio 2
/* const fnFilter = beer => beer.abv > 7.5;
const beersFiltradas = beers.filter(fnFilter)
console.log(beersFiltradas)  */

//Ejercicio 3
/* const fnFilter = beer => beer.ibu > 50;
const beersFiltradas = beers.filter(fnFilter)
console.log(beersFiltradas)  */

//Ejercicio 4

/* const ordenarCervezas= beers.sort((a,b)=>{
    if(a.id > b.id){
        return 1
    }
    if(a.id < b.id){
        return -1
    }
    return 0

})
console.log (ordenarCervezas) */

//Ejercicio 5
const table = document.getElementById("table")

const newArrayOfBeers2 = beers.map(beers => {
    return {
        beerName: beers.name,
        beerAlcoholLevel: beers.abv,
        beerBitterness: beers.ibu
    }
})
console.log(newArrayOfBeers2)

const templateTable = newArrayOfBeers2.reduce((acc, act) =>{
    return  acc +  `<tr>
    <td>${act.beerName}</td>
    <td>${act.beerAlcoholLevel}</td>
    <td>${act.beerBitterness}</td>
</tr>`
},"")
table.innerHTML = templateTable
