
function sumArray(numbers){
    var i=0;
    var sum = 0;
    while (i<numbers.length){
        var thisNumber = numbers[i];
        sum += thisNumber;
        i++;
    }
    return sum;
}

function fitWithinVal(array,value){
    //define values - 
    //need counter, need number in array, need value, need sum, need return holder + ?return?
    var sum = 0;
    var returnArray = [];
    //loop through values
    for (i=0; i<array.length; i++){
        //take first number and add to number base.
        var numberInArray = array[i];
        //check less than value
        var testValue = sum + numberInArray;
        if (testValue<=value){
            //return first number to log
            sum += numberInArray;
            returnArray.push(numberInArray);
        };  
    }; 
    return returnArray;  
}

function getAllNamesShorterThan(array,value){
    //define values
        //will need a couter, a return value holder, an item holder
    var returnedNameList= [];
    //loop through all items
    for (i=0; i<array.length; i++){
    //compare itemlegnth with value
        var currentName = array[i];
        var nameLength = currentName.length;
        if (nameLength<value){
            returnedNameList.push(currentName);
        };
    };
    //return array
    return returnedNameList;
}

// - input: 
// 		[
//   {
//     "familyName": "McGee",
//     "givenName": "Chuckles",
//     "greeting": "Miss.",
//     "age": 28,
//     "height": 165,
//     "colors": {
//       "eye": "green",
//       "hair": "green"
//     },
//     "home address": {
//       "streetNumber": "12345",
//       "streetName": "Any St",
//       "state": "Mo",
//       "zip": 63102,
//       "city": "Kansas City"
//     }
//   }
// ]
// 	- return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"



function makeLabel(contact){
    var address = "";
    var line1 = contact.greeting + " " + contact.givenName + " " + contact.familyName;
    var line2 = contact['home address']['streetNumber'] + " " + contact['home address']['streetName'];
    var line3 = contact['home address']['city'] + ", " + contact['home address']['state'] + " " + contact['home address']['zip'];
    address = line1 + "\n" + line2 + "\n" + line3;
    return address;
}
