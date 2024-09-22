// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
// 測試pop功能
console.log("---test pop function---")
stack.pop();
stack.print();
console.log("\n")

// 測試peek功能
console.log("---test peek function---")
stack.peek();
stack.print();
console.log("\n")

//  測試isEmpty功能(非空的情況)
console.log("---test isEmpty function(not empty)---")
console.log(stack.isEmpty());
console.log("\n")

//  測試isEmpty功能(空的情況)
console.log("---test isEmpty function(empty)---")
stack.pop();
stack.print();
console.log(stack.isEmpty());
console.log("\n")

//  測試size功能(將空的stack加入1~10 size應為10)
console.log("---test size function---")
for (var i = 1; i <= 10; i++) {
    stack.push(i);
}
stack.print();
console.log(stack.size());
console.log("\n")

//  測試clear功能(size應為0 isEmpty應為true)
console.log("---test clear function---")
stack.print();
stack.clear();
stack.print();
console.log(stack.size());
console.log(stack.isEmpty());