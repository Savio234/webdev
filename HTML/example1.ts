// var [identifier]: [type-annotation] = value
// var [identifier]: [type-annotation];
// var [identifier] = value
// var [ident];

let b: boolean = false;
console.log(b);

function log(a)
{
    console.log(a);
}
var a = "Hello World. This is my first typescript code"
log(a);

let c: number = 100;
console.log(c);

let d: number = 0x123;
console.log(d);

let firstname: string = "Dominicsavo";
console.log(firstname);

let ds: string[] = ["welcome", "to my world"];
console.log(ds);

let cc: Array<number> = [10000, 23.45];
console.log(cc)

let gd: [number, string] = [10, "bodies were found on the floor"];
console.log(gd);

const s = 10;
console.log(s);

enum fruit 
{
    apple,
    orange,
    mango,
    banana,
    cucumber,
    pawpaw
}
let fruitname: string = fruit[3];
console.log(fruitname);

let bg: any;
bg = 200;
bg = 34.3;
bg = "amara";
console.log(bg);

let g: Object;

function myfunc()
{
    for (var i=1; i<=2; i++){
        console.log("I am Dominic, nice to meet you")
    }
    console.log("Final value of i is = "+i)
}
myfunc();


function multiply(a, b:number) {
    return a*b;
}
multiply(2, 3);

//anonymous
let q = function (x, y:any) {
    return x*y;
}
console.log(q(67, 34));

let z=4;
function star(x, y:any) {
    return x*y*z;
}
console.log(star(6, 5));