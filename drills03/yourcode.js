
// getPath: given a path string, return an array with the different parts of the path for 
// - example: 'folder1/folder2/folder3' 
// - returns ['folder1','folder2','folder3']
function getPath(string){
    var array= string.split('/');
    //way to loop through this all until no more
    //count number of slashes and make this the legnth
    return array;
    //lastindexof or other, slice and pop into an array

}
// - getPathParts: Given a full URL string, break it up into parts in an object For 	
// 	- example: 'http://localhost:8000/happy/go/lucky/file.html' 
// 	- return { protocol: 'http', host: 'localhost', port: 8000, path: '/happy/go/lucky', file: 'file.html' }
function getPathParts(url){
    //split by / and push into array
    var fileData = url.slice((url.lastIndexOf("/")+1));    
    var urlLessEnd = url.slice(0,(url.lastIndexOf("/")));
    
    var protocolData = urlLessEnd.slice(0,(urlLessEnd.indexOf(":")));    
    var urlLessProtocolEnd = urlLessEnd.slice((urlLessEnd.indexOf(":")+3));
    
    var hostData = urlLessProtocolEnd.slice(0,(urlLessProtocolEnd.lastIndexOf(":")));
    var portData = urlLessProtocolEnd.slice((urlLessProtocolEnd.indexOf(":")+1),urlLessProtocolEnd.indexOf("/"));
    var portDataInt = parseInt(portData);
    
    var pathData = urlLessProtocolEnd.slice(urlLessProtocolEnd.indexOf('/')+1);
    
    // console.log ("full Url", url);
    // console.log ('fileData', fileData);
    // console.log ('urlLessEnd', urlLessEnd);
    // console.log ('protocolData', protocolData);
    // console.log('urlLessProtocolEnd',urlLessProtocolEnd);
    // console.log ('host', hostData);
    // console.log ('port', portData);
    // console.log("path",pathData);

    var urlObejct = {
        protocol: protocolData,
        host: hostData,
        port: portDataInt,
        path: pathData,
        file: fileData
    }
    return urlObejct;
}




// - getCapitalCount: given an array of words, return a count of how many start with capital letters, For 
// 	- example: ['it','will','not','Be','long','Till','we','Are'] 
// 	- returns: 3


function getCapitalCount(array){  
    var counter = 0;  
    for (var i=0;i<array.length; i++){
        var currentWord = array[i];
        var firstLetter = currentWord[0];
        if (firstLetter === firstLetter.toUpperCase()){
            counter++;
        }
    }
    return counter;
}


// correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations for 
// - example: [ 
//     { num1: 3, num2: 3, op: '/', result: 3}, 
//     { num1: 12, num2: 4, op: '-', result: 8}, 
//     { num1: 2, num2: 3, op: '+', result: 5}, 
//     { num1: -5, num2: -2, op: '*', result: 10} 
// ] 
function correctCalcChecker(array){
    var returnArray = [];
    for (var i=0;i<array.length;i++){
        var innerObject = array[i];
        var num1 = innerObject.num1;
        var num2 = innerObject.num2;
        var op = innerObject.op;
        var result = innerObject.result;
        //alertnative method:  eval()  or if statements are both good
        // var resultToTest = eval(num1+op+num2);

        var convertMath = {
            '/': function(x,y){return x/y},
            '+': function(x,y){return x+y},
            '-': function(x,y){return x-y},
            '*': function(x,y){return x*y},
        }
        var resultToTest = convertMath[op](num1,num2);
        if (resultToTest === result){
            returnArray.push(innerObject);
        }
    }
    return returnArray;
//loop through item in array
//for each itme, loop through inner items and place into testing structure
//testing structure is the"math" being performed.   num1 op num 2 result.
    //need to store in variables
    //can I insert these into an equation?
    //how to I get the math symbol to proccess??
    //store output in variable
    //test if output variable === last inner item.  
    //if true, return this array
}

function doMath(){

}
