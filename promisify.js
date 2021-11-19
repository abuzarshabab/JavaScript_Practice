const promisify = require ('util').promisify;

function slowCallbackFunction(done){
    setTimeout(function(){
        done();
    },3000);
}
const slowPromise = promisify(slowCallbackFunction);

slowPromise()
.then(() =>{
    console.log('slow function resolved')
})
.catch((error) => {
    console.log('there has been an error : ', error)
})
    