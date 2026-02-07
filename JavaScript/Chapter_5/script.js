//Higher Order Function HOFs
//Ek aisa Function joh yaa toh return kare function nahi toh accept kare function in parameter,yaa fir dono
function abc4(){
    console.log("1");
    return function(){
        console.log("2");
        return function(){
            console.log("3");
        }
    }
}
abc4()()();

//CallBack Function
//Kisi function mein joh func pass hota hai usse call kartre time callback function kehte h
function abcd(val){

}

abcd(function(){

})