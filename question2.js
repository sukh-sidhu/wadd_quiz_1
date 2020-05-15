function isIsogram(string) {
    ​
        var word = string.split(''); //will split into array

        for (var a = 0, b = 1; a < word.length - 1; a++, b++) {

          if (word[a] == word[b]){
                                     
            console.log('false');

            return false;      //print false if the word is not an isogram

          }
        }
        console.log('true');

        return true;   //print true if the word is an isogram

       }
       
       isIsogram("new westminister");

       isIsogram("web application");

       isIsogram("sukhveer singh");
    
    