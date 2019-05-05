
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

function makeLabel(contact){
    var address = "";
    var line1 = contact[0][greeting] + " " + contact[0].givenName + " " + contact[0].familyName;
    var line2 = contact[1].streetNumber + " " + contact[1].streetName;
    var line3 = contact[1].city + ", " + contact[1].state + " " + contat[1].zip;
    address = line1 + "\n" + line2 + "\n" + line3;
    return address;
}
