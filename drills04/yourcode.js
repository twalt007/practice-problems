// - changeElements: Change any element with a given class (for example "numConvert")
// 	- grab their text, which will be a number in word form (ie one, three, nine)
// 	- The numbers will only be from one to nine
// 	- Change their text to the numeric form (1-9)
// 	- If it doesn't understand the word, it leaves it unchanged

function changeElements(elClass){
    //select elements; loop through each element
    //grab text from element
    //change -- do I need to do a bunch of switchh?  or is there a better way to d this?
    
    
    $(elClass).each(function(){
        var checkString = $(this).text();
        console.log("checkString", checkString);
        switch(checkString){
            case "one":
                $(this).text("1");
                console.log("one");
                break;
            case "two":
                $(this).text("2");
                console.log("two");
                break;
            case "three":
                $(this).text("3");
                console.log("three");
                break;
            case "four":
                $(this).text("4");
                console.log("four");
                break;
            case "five":
                $(this).text("5");
                console.log("five");
                break;
            case "six":
                $(this).text("6");
                console.log("six");
                break;
            case "seven":
                $(this).text("7");
                console.log("seven");
                break;
            case "eight":
                $(this).text("8");
                console.log("eight");
                break;
            case "nine":
                $(this).text("9");
                console.log("nine");
                break;
            default:
                break;
        }
    });
    


}

function appendTextToElement(){

}

function addClass(){
}

function removeElements(){

}

