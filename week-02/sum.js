// ary: number array
function sum1(ary) {
	// TODO: sum all elements in ary
    // Method 1
    if(ary.length == 0)
        return  0;
    else{
        return ary.pop() + sum1(ary)
    }
}

function sum2(ary) {
	// TODO: sum all elements in ary
    //  Method 2
    return ary.reduce(function(total, value){
        return total + value;
    },0);
}

function sum3(ary) {
	// TODO: sum all elements in ary
    //  Method 3
    if(ary.length == 0)
        return  0;
    else
        return eval(ary.join('+'));
}
console.log(sum1([1, 5, 3, 2])); // 11
console.log(sum2([1, 5, 3, 2])); // 11
console.log(sum3([1, 5, 3, 2])); // 11