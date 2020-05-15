array = 'sukhveer singh'.split(" ");
​
    const isPangram = (string) => {

     string = string.toLowerCase();

         return array.every(x => string.includes(x));
}
​
        console.log(isPangram("webapplicationdeploma"));
        
    console.log(isPangram("vdfhgsadlfagfuyg"));