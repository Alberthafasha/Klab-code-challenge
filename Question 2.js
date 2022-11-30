const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ]
let priceArray = []
let sum = 0
function findCheapProduct(){
    
    for (let i=0; i<item.length; i++){
        priceArray.push(item[i].price)
        
    }
    return Math.min(...priceArray)
}

function findExpensiveProduct(){
    
    for (let i=0; i<item.length; i++){
        priceArray.push(item[i].price)
        
    }
    return Math.max(...priceArray)
}

function findSumOfAllProduct(){
    
    for (let i=0; i<item.length; i++){
        priceArray.push(item[i].price)
        
    }
    for (let j=0; j<priceArray.length; j++){
        sum += priceArray[j]
    }
    return sum
}

function findSumOfAllProductAbove10(){
    
    for (let i=0; i<item.length; i++){
        priceArray.push(item[i].price)
        
    }
    for (let j=0; j<priceArray.length; j++){
        if(priceArray[j] > 10){
            sum += priceArray[j]
        }
        
    }
    return sum
}


console.log(`The cheap product is: ${findCheapProduct()}`)
console.log(`The Expensive product is: ${findExpensiveProduct()}`)
console.log(`The sum of all product is: ${findSumOfAllProduct()}`)
console.log(`The sum of all product greater than 10 is: ${findSumOfAllProductAbove10()}`)
