// window prompt
let input = window.prompt('enter a list of comma-separated froyo flavors');
console.log(input);

let yourFlavors = input.split(",");
console.log(yourFlavors);

// // flavor count
function howMany(flavors) {
    
    let flavorObj = {
    };

    for(let i = 0; i < flavors.length; i++){
        flavorObj[flavors[i]] = (flavorObj[flavors[i]] || 0) + 1;
    }
    
    return flavorObj;
    
}

console.table(howMany(yourFlavors));

