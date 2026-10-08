//console.log("Hello");

//================================
//Random Numbers Generate
//================================

// let num=Math.random()*10+1;

// let randomNum=Math.floor(num);
// console.log(randomNum);

//=======================================
//Alert display-sweet alert
//=======================================
// function btnGuessNumberOnAction() {
//     Swal.fire({
//         title: "Number Guessing...........",
//         width: 600,
//         padding: "3em",
//         color: "#fa5ded",
//         background: "#fff",
//         backdrop: `
//             rgba(0,0,123,0.4)
//             url("videos/monsters-inc-look-at-those-numbers.gif")
//             center center
//             / cover
//             no-repeat
//         `
//     });
// }


//=======================================
//  let, var, const
//=======================================

// {
//   let name="Saman";
//   console.log(name);
// }

//when end the blocks scope all elements arre destroyed. It cannot access from the outside of the blockscope. (in the let )
// {
//   let age =34;
// }
// console.log(age);

// But it can be used using var variable. but var variables does not destroyed when the program done. Therefore it takes too much space in the RAM. 

// {
//   var age = 12;
//   var name = "Chathu";
//   console.log(name);
// }
// console.log(age);

// let best for the performance. 

// {
//   var studentName = "Saman";
//   let ahe = 18;
// }

// console.log(studentName);
// console.log(age);

// const customerList =[];

// const variable values cannot be change

// customerList.push("Saman");

// customerList = "Saman";

// console.log(typeof customerList);

//==================================
// JS Array Methods
//==================================

// const customerList = [];

// customerList.push(1);
// console.log(customerList);

// customerList.push(2);
// customerList.push(3);
// customerList.push(4);
// customerList.push(5);
// console.log(customerList);

//------------------------------------
// Reverse array-----------------------
//-------------------------------------

// let revArray = customerList.reverse();
// console.log(revArray);

//----------------------------------
// Filter method----------------------
//------------------------------------

const products = [
  {name:"bun",instock: true},
  {name: "car",instock:false},
  {name: "Bus",instock:true},
  {name: "Bike",instock:false}
];

//let inStockItems = products.filter(product => product.instock == false);


// Callback Functions--------------------------

// let inStockItems = products.filter(
//   function(product){
//     return productFilter(product)
//   }
// )

// function productFilter(product){
//   return product.inStock == true;
// }

// console.log(inStockItems);

//for function use =>


// function getSum(num1,num2){
//   return num1+num2;
// }

//getSum(10,20);

// function getSum = function (num1,num2){
//   return num1+num2;
// }

// console.log(10,20);


//----------- Arrow Function --------------------


// let getSum = (num1,num2) => {
//   return num1+num2;
// }

// console.log(getSum(10,20));

// Step 04 ------------------------------------
// let sample = txtValue =>{
//   return txtValue;
// }

// console.log(sample("Hi saman"));

//Step 05-----------------------------
// let getSum = (num1, num2) => num1+num2;
// console.log(getSum(10,20));

//Step 06 ----------------------------------------------
// let sample = txtValue => txtValue;

// console.log(sample("Hi saman"));

