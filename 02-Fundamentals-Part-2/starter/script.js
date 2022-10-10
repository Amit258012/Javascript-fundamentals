//2.2  ACTIVATING STRICT MODE
    
    //Always use it
    //protects our code & helpful to find bugs
'use strict'; // it must be at the first line of code


//2.3  FUNCTIONS

    //declaration [you can call function early]
    function logger(){
        console.log("My name is Amit");
    }

    //function call[calling /invoking/ running function]
    logger();


//2.4  FUNCTION DECLARATION VS EXPRESSIONS

    //expression [ you must write function before calling]
    const cal= function (a, b){    // no function name in expression
        return a+b;
    }
    const res = console.log(cal(3, 4));


//2.5  ARROW FUNCTIONS

    //in this you can't use this keyword
    //const/let function_name = parameter/(parameters)=> return_statement/{return statements};
    const cal1= (a,b)=>a+b;
    const res1 = console.log(cal1(5,5));

    //using return statement
    const cal2=(a, b)=>{
        const add1=a+b;
        const sub1=a-b;
        return `c= ${add1} & d= ${sub1}`
    }

    const res2 = console.log(cal2(5,3));


//2.6 FUNCTION CALLING OTHER FUNCTIONS

function double(d){
    return d*2;
}
const cal3=(a, b)=>{
    const x= double(a);     //calling another fuction inside a function
    const y= double(b);     //calling double func insde cal3 func
    const add2=x+y;
    const sub2=x-y;
    return `c= ${add2} & d= ${sub2}`
    console.log("hello");       //doesn't execute
}
const res3 = console.log(cal3(10,3));


//2.7  REVIWING FUNCTIONS

    //function declaration
    //=> Function that can be used before it is declared

    //Function expression
    //=>Essentially a function value stred in a variable.

    //Arrow function
    //=>Quick one line function. this keyword can't be used


//2.8   CODING CHALLENG#1   

let dolphinAvg, koalasAvg;
const calcAvg= (s1, s2, s3)=>(s1+s2+s3)/3;
dolphinAvg= calcAvg(44,23,71);
koalasAvg=calcAvg(65,54,49);
console.log(`dolphin avarege is ${dolphinAvg}`);
console.log(`koalas avarege is ${koalasAvg}`);

function checkWinner(dolphinAvg,koalasAvg){
    if(dolphinAvg>koalasAvg*2){
        console.log(`dolphin win (${dolphinAvg} vs ${koalasAvg})`);
    } else if(koalasAvg>dolphinAvg*2){
        console.log(`koalas win (${koalasAvg} vs ${dolphinAvg})`);
    } else {
        console.log(`no one wins`)
    }
}

console.log(checkWinner(dolphinAvg,koalasAvg));


//2.9   INTRODUCTION ARRAY

    //1st way of declaration
    let greeting=['hi', 'hlo','hey'];
    console.log(greeting);

    //2nd way of declaration
    greeting=new Array('hi', 'hello');
    console.log(greeting);

    //specific element
    console.log(greeting[greeting.length-1]);  //last element

    //no. of elements in array
    console.log(greeting.length);

    //changing elements
    greeting[1]='hey'
    console.log(greeting);

    //Array as array object
    const WelcomeGreeting=['welcome',greeting];
    console.log(WelcomeGreeting);


    //fuction call as array objects
    const arry=[10, 20, 30];
    const darr=[double(arry[0]),double(arry[1]),double(arry[2])];   //line no 47
    console.log(darr);


//2.10   BASIC ARRAY OPERATION(METHODS)

    //1. push
    arry.push('40'); //adds object in array at last position 
    console.log(arry);

    //2. unshift
    arry.unshift("0"); //adds objects at the begining
    console.log(arry);

    //3. pop
    arry.pop();   //remove last element
    console.log(arry);

    //4. shift
    arry.shift();    //remove first element
    console.log(arry);

    //5. indexof
    console.log(arry.indexOf('20'));   //finds postion of element

    //6. includes
    console.log(arry.includes('30'));   //strict checks for elements if present retuns true else false


//2.11  CODING CHALLENGE#2

    let bills=[125, 555, 44];
    let tips, total,bill;
    function calcTip(bill){
        return bill>=50 && bill<=300? bill*.15: bill*.2;
    }
    tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
    total=[bills[0]+tips[0],bills[1]+tips[1] ,bills[2]+tips[2]];
    console.log(tips,total);



//2.12   INTRODUCTION TO OBJECTS

    //key value pair
    //aranges according to alphabetic order of key
    //object declaration
    const amit={
        firstName: 'Amit',
        lastName: 'Jahagirdar',
        age: 19,
        job: 'Student',
        friends: ['Raju', 'Shinu', 'Sanju'],
    };
    console.log(amit);


//2.13   DOT VS BRACKET NOTATION

    //specific element
    console.log(amit.lastName);
    console.log(amit['lastName']);

    const nameKey='Name';
    console.log(amit['first'+nameKey]);  //expression can be used in bracket notation
    //always use bracket notation when you take input from user
    //dot has higher precedence>bracket  & left to right

    console.log(`${amit['firstName']} has ${amit.friends.length} friends,and his best friend is called ${amit.friends[0]}`);


//2.14   OBJECT METHODS

    //function as object 
    const amit1={
        firstName: 'Amit',
        lastName: 'Jahagirdar',
        age: 19,
        job: 'Student',
        friends: ['Raju', 'Shinu', 'Sanju'],
        hasDriverLicence: false,
        calc: function (age){
            return this.age-1;          //this keyword
        },
        getSummary: function(){
            return `${this.firstName} is a ${this.age}-year old student, and he has ${this.hasDriverLicence? "a":
            "no"} driver's licence`;
        }
    };
    console.log(amit1.getSummary());


//2.15    CODING CHALLENGE#3

    const mark={
        Name: 'Mark M',
        mass: 78,
        height: 1.69,
        calcBMI : function(mass, height){
            return this.mass/this.height**2;
        }
    };
    const john={
        Name: 'John S',
        mass: 92,
        height: 1.95,
        calcBMI : function(){
            return this.mass/this.height**2;
        }
        
    };
    if(mark.calcBMI()>john.calcBMI()){
        console.log(`Mark's BMI (${mark.calcBMI()}) is higher then John's (${john.calcBMI()})!`)
    }else {
        console.log(`John's BMI (${john.calcBMI()}) is higher then Mark's (${mark.calcBMI()})!`)
    }


//2.16   FOR LOOP

    for(let i=0;i<3;i++) {
        console.log(`hi ${i}`);
    }


//2.17    LOOPING ARRAY BREAKING & COUNTING

console.log('---only strings---');
    for(let i=0; i<arry.length;i++){     //line no. 121
        if(typeof arry[i] !=='String') continue;
        console.log(arry[i], typeof arry[i]);

        darr.unshift(arry[i]);
        if(arry.includes[20]) break;
    }
    console.log(darr);


    //continue; [skip & go on]
    //break; [come out of the loop]


//2.18 LOOPING BACKWARDS & LOOP IN LOOP

    //looping backward
    for(let i=arry.length-1; i>=0;i--){ 
        console.log(arry[i]);    //line no. 121
    }

    //loop in loop
    for(let i=0;i<2;i++){           //hi hlo hlo hlo hi hlo hlo hlo
        console.log('hi');
        for(let j=0;j<3;j++){
            console.log('hlo');
        }
    }


//2.19   WHILE LOOP

    let i=0,j=0;
    while(i<2) {
        console.log('hi');
        while(j<3) {
            console.log('hlo');
            j++;
        }
        j=0;
        i++;
    }


//2.20   CODING CHALLENGE#4

    let bils=[22,295,176,440,37,105,10,110,86,52];
    let tip=[], totals=[],bil,tipss;
    function calcTip(bil){
        return bil>=50 && bil<=300? bil*.15: bil*.2;
    }
    function calcTotal(bil,tipss){
        return bil+tipss;
    }
    console.log('Bills', 'Tips', 'Total')
    for(let i=0;i<bils.length;i++){
        tip.push(calcTip(bils[i]));
        totals.push(calcTotal(bils[i],tip[i]));
        console.log(bils[i],tip[i],totals[i]);
    }