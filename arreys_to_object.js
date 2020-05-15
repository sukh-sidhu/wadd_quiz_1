let array = ['carrot', 'pear', 'bananas', 'mango', 'pear', 'carrot', 'bananas', 'pear', 'pineapple'];

   result = { };
   
     for(var i = 0; i < array.length; ++i) {

            if(!result[array[i]])

                result[array[i]] = 0;

            ++result[array[i]];
}
// let Name = []
    // var result = Object.keys(array).map(function(key){
        //     return [Name(key), array[key]];
            // })
                    // console.log(result);
​
            // const Output =[];
        // function array_to_object(array){
    //     return array.reduce((result,num)=>{
//         result[num]=!result[num]?1:result[num]
//         return result;
//     })
// }