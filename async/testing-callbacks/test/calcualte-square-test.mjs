
import calculateSquare from '../calculate-square.mjs';
describe('calculateSquare',function(){
    it('should return 4 if passed 2', function(done){
        calculateSquare(2,function(error,result){
            console.log('callback gets called');
            expect(result).to.equal(4);
            done();
        });
    });

    it('should returm an error if passed a string',function(done){
        calculateSquare('somestring',function(error,result){
            expect(error).to.not.equal(null);
            expect(error.message).to.equal('Arugment of type number is expected')
            done();

        })



    })
});