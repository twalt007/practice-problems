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

// - appendTextToElement: given a particular element, replace its text with the original text plus the word 2nd parameter given.
// 	- For example, if you got changeElements('.helloElements','hello'), all elements with a class of helloElements would have their text concatenated with "hello"
//  	- For example, if the text of the element was "yo", it would be changed to "yohello"`,

function appendTextToElement(el,text){
//method1 .text
    // $(el).each(function(){
    //     var getText = $(this).text();
    //     console.log("getText",getText);
    //     var newText = getText+text;
    //     console.log("newText", newText)
    //     $(this).text(newText);
    // })


//method2 append
$(el).each(function(){
    $(this).append(text);
})

}

// - addClass: Make a function that takes in 2 strings.  The first selector it looks for, the 2nd it adds as a class
// 	- For example, if you had addClass(".haha","hehe"), then every element
// 	- with a class of haha would now also have a class of hehe.
//   Additionally, return the number of elements so changed`,


function addClass(string1,string2){
    var counter = 0;
    $(string1).each(function(){
        $(this).addClass(string2);
        counter++
    })
return counter;


}
//- removeElements: given a particular selector, remove any element that matches that selector
function removeElements(selector){
    $(selector).each(function(){
        $(this).remove();
    })
}

