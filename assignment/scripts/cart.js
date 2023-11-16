console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];    //Create our shopping basket
const maxItems = 5; //Create a global maximum item variable

function addItem(item){       //Start function to add items to cart
    if (isFull() === false){  //Check if basket is full
        basket.push(item);    //Update basket
        return true;          //Confirm update
    } else {
        console.log('Basket is full'); //Logs error to console
        return false;                  //Return false
    };      
};

console.log(addItem('Pants'));         //Add Pants to basket
console.log(addItem('Shirt'));         //Add Shirt to basket
console.log(addItem('Earrings'));      //Add Earrings to basket
console.log(addItem('Shoes'));         //Add Shoes to basket
console.log(addItem('Jacket'));        //Add Jacket to basket
console.log(addItem('Scarf'));         //Attempt to add Scarf to basket
console.log(basket);                   //Check basket contents

function listItems(cart){             //Creates listItem function
    for (let cartItem of cart){       //Loops through cart
        console.log(cartItem);        //Logs cart items to console
    };
};

listItems(basket);                         //Calls listItems to verify basket

console.log(removeItem('Frosted Flakes')); //Calls removeItem, attempts to remove Frosted Flakes and console logs the return
console.log(removeItem('Earrings'))        //Calls removeItem, attempts to remove Earrings and console logs the return
console.log(basket);                       //Logs current basket contents

function empty(){                          //Creates function empty()
    while (basket.length > 0){             //Loops through entire basket
        basket.shift();                    //Removes item
    };
};

empty(basket);                             //Empty the basket
console.log(basket);                       //Check basket contents

function isFull(){                         //Create function isFull()
    if (basket.length < maxItems){         //Check basket length against maximum
        return false;
    } else {
        return true; 
    };
};

function removeItem(unwantedItem){                      //Create removeItem
    if (basket.includes(unwantedItem) === true){
        basket.splice(basket.indexOf(unwantedItem), 1);
        return unwantedItem;
    } else {
        return null;
    };
};






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
