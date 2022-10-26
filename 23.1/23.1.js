

console.log(this);

const myObj = {
    name: "Timmy",
    greet: function() {
    console.log(`Hello ${this.name}`);
    }
   };

myObj.greet();



const myFuncDec = function () {
    console.log(this);
};

myFuncDec();



const myFuncArrow = () => {
    console.log(this);
   };
 myFuncArrow();



document.querySelector(".element").addEventListener('click',() => {
    console.log(this);
});


document.querySelector(".element").addEventListener('click',(event) => {
    let that = document.querySelector(".element");
    console.log(that);
});


const storm = {
    superPower: "controling the weather",
    printSuperPower() {
    console.log("my superpower is " + this.superPower);
   }
}

storm.printSuperPower();