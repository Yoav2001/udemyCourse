//function that caulute the quare or number
//the function use time out of 1 second 
// // if the type of the nuber not a numbr return error
// function calculateSquare(num, callback){
//     setTimeout(function(){
//         if(typeof num!=='number'){
//              callback(new Error("Arugment of type number is expected"))
//              return;

//         } 
//             return callback(null,num*num)

//     },1000)
// }


function calculateSquare(number) {
    const promise = new Promise(function (resolve,reject){
        setTimeout(function () {
            if(typeof number !== 'number'){
                return reject(new Error('Argument of type number is ecpected'))
            }
            const result = number*number;
            resolve(result);

        },1000)

    })
    return promise
}

calculateSquare(2)
  .then(value => {
    console.log('Success: ' + value);
  }, reason => {
    console.log('ERROR: ' + reason);
  });