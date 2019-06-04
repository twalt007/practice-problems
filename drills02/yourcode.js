
// - countOccurences: 
// - given an array of words and a separate word, count how many times a particular word given 
// occurs within that array for example:
// - input ['dog','cat','dog','pig','canary','cat','dog'], 'dog' 
// - returns 3

function countOccurences(array,value){
    //loop through array
    var incrementor = 0;
    for (i=0; i<array.length; i++){
        console.log(array[i]);
        console.log(incrementor);
        if (value === array[i]){
            incrementor++;
        }
        // return incrementor;
    }
    return incrementor;
    console.log("The word "+value+" occurs "+incrementor+" times in the array.")
    //compare value against every arry item/
    //grow incrementor each tim

}

// wordLengths: 
// 	- given an array of words, return an array 
// of numbers representing the length of each word For example: 
// 	- input ['canary','silly','dog','a','mellow']) 
//     - return [6,5,3,1,6]
    
function wordLengths(array){
//cycle through each item
var newArray = [];
for (var word=0;word<array.length;word++){
    var counter = 0;
    //cycle through each letter
    for (var letter=0;letter<array[word].length;letter++){
    //for every letter, increase an incrementor
        counter++;
        console.log ("inner loop", counter);
    }
newArray.push(counter);

}
return newArray;
}


// getMinMaxMean: given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:
// 	- input [3,1,9,12,4] 
// 	- return: {min: 1, max: 12, mean: 25.8}


function getMinMaxMean(array){
var min = array[0];
var max = array[0];
var mean = array[0];
var sum = 0;
    for (i=0;i<array.length;i++){
        if(array[i]<min){
            min = array[i];
        }
        if(array[i]>max){
            max = array[i];
        }
        sum += array[i];
        console.log("sum ", sum);
    }
    mean = sum/(array.length);
return "min: " + min + ", max: " + max + ", mean: " + mean;
}

// - findMode: Given an array of numbers, find the number that occurs the most often for example: 
// 	- input [5,2,7,18,2,42,5,2] 
// 	- returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one

//              array = [5,2,7,18,2,42,5,2]
//                  x = [0,1,2,3 ,4 ,5,6,7]
//array.x = theNumber = [5,2,7,18,2,42,5,2]
//             journal= {
//        5 : 2,
//        2: 3,
//        7: 1,
//        18: 1,
//        42: 1,
//};
//journalKeys: [5,2,7,18,42]
function findMode(array){
    var journal = {};
    for (var x=0; x<array.length; x++){
        var theNumber = array[x];
        if(journal[theNumber]){
            journal[theNumber]++
        }
        else{
            journal[theNumber]=1;
        }
    }
    max = 0;
    mode = 0;
    console.log("finished journal", journal);
    //test by using for .. in, or basic for loop
    for (var theNumber in journal){
        if(journal[theNumber]>max){
            max=journal[theNumber];
            mode = theNumber;
        }
    }
    return mode;
    
    //also OK
    // Object.keys(journal).forEach(function(keyTheNumber){
    //     if (journal[keyTheNumber]>max){
    //         max = journal[keyTheNumber];
    //         mode = keyTheNumber;
    //     }
    // })
    // return mode;
}



    //loop through each item
    //creating an object
    //createcounter for each item 
    //conditional if array value is equal to the counter
    //thenn loop throug these values, find highest, and return this
// }
