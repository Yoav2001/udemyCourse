//function that caulute the quare or number
//the function use time out of 1 second 
// if the type of the nuber not a numbr return error
function calculateSquare(num, callback){
    setTimeout(function(){
        if(typeof num!=='number'){
             callback(new Error("Arugment of type number is expected"))
             return;

        }

        
            return callback(null,num*num)

    },1000)
}


export default calculateSquare