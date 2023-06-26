//function that caulute the quare or number
//the function use time out of 1 second 
// if the type of the nuber not a numbr return error
function calculateSquare(num, callback){
    setTimeout(function(){
        if(typeof num=='number')
            return callback(new Error("Arugment of type number is expected!     "))

        
            return callback(null,num*num)

    },1000)
}

calculateSquare("sdfdsf",function(context,err){
    console.log();
})

module.export=calculateSquare
