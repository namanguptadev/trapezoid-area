let arr =[1,5];
let h =3;
function addition(arr){
    let total = arr[0]+arr[1];
    console.log(total);
    divideByTwo(total)
};
addition(arr);
function divideByTwo(additionValue){
    let dividedValue = additionValue/2;
    console.log(dividedValue);
    mutliplication(dividedValue,h);
};

function mutliplication(dividedValue,h){
    let multiple=dividedValue*h;
    console.log(multiple);
};


