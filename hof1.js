let higherHof = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reduce = (collector,listPrice) =>
     collector + listPrice;

        console.log(higherHof.reduce(reduce));
            console.log(higherHof.reduce(reduce, 5));
    console.log(higherHof.reduce(reduce,10));
console.log(higherHof.reduce(reduce,15));
console.log(higherHof.reduce(reduce,20));


// A callback that will be called wth two arguments;
function createWord(word, callback){ 
var word = "sukhveer is good student, " + word;
callback(word); 
}

function logword(word){
console.log(word);
}

createWord("and he is kind hearted.", logword); 