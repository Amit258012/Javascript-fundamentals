//1.1 hello world

console.log("Hello world!");
// alert("Hello world!");


//1.2 linking js

//<script src="javascript file name.js"></script>


//1.3 values & variables

let js ='Intelligent';
let firstName="Amit";
firstName=23;
console.log(firstName);


//1.4 Datatype
//it is dynamic in nature 
//which means it selects datatye automatically
console.log(typeof firstName);
console.log(firstName +" is "+ js +"\nHi "+ firstName);  



//1.5 let , const & var

let age =10;
age=12; //using let you can change the value

const birthYear=2003; //it's value can't be changed

//don't use these 
var job='a';
job='b';

lastName="jahagirdar";
console.log(lastName); 

//*GETTING USER INPUT
const fav= Number(prompt("what's your favourite number?")); //*stores as String by default



//1.9   operators
    //1.ARITHMETIC [ +,-,*,**(pow),/,% ]
    //2.LOGICAL [   ]
    //3.COMPERISION [ >,<,<=,>=,===,  ]
    //4.ASSIGNMENT [ =,+=,-=,*=,/=,++, --   ]


    //ARITHMETIC OP
    const ageme=2022-2003;
    console.log(ageme," year old");

    //ASSIGNMENT OP
    let x=10+5;
    let y=x;
    y+=5;
    console.log("y=",y," x=",x);

    //COMPARISON OP
    console.log(5>1);  // TRUE OR FALSE

//1.10.   precedence:    search(mdn operators precedence)


//1.11 coding challeng#1

    // let markMass=95, johnMass=85, markHeight=1.88, johnHeight=1.76;
    // let bmiMark=markMass/markHeight**2;
    // console.log(bmiMark);
    // let bmiJohn=johnMass/johnHeight**2;
    // console.log(bmiJohn);
    // let bmiHigher=bmiMark>bmiJohn;
    // console.log(bmiHigher);



//1.12 STRINGS & TEMPLATE LITERALS
    const firstname="AMIT";
    const print="Hi "+firstname+" Happy coding < "+(335-2);
    console.log(print);

    // TEMPLATE LITERALS (useful soln for space problem)
    //* (   `hi ${variable/operation}`   )
    const newPrint=`Hi ${firstname} Happy coding < ${335-2}`;
    console.log(newPrint);


//1.13 if-else
    //if, else if, else if, ......... ,else

    const ageis=10;
    const isOldEnough=ageis>=18;
    let yearsLeft;   //always declare variable outside the conditions 
    if(isOldEnough) {
        console.log("you can now apply for driving licence 😎")
    } else {
        yearsLeft=18-ageis;
        console.log(`You are too young . Wait another ${yearsLeft}`)
    }



// 1.14 CODING CHALLENGE#2

let markMass=95, johnMass=85, markHeight=1.88, johnHeight=1.76;
let bmiMark=markMass/markHeight**2;
console.log(bmiMark);
let bmiJohn=johnMass/johnHeight**2;
console.log(bmiJohn);
if(bmiMark>bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher then John's (${bmiJohn})!`)
}else {
    console.log(`John's BMI (${bmiJohn}) is higher then Mark's (${bmiMark})!`)
}


/*1.15  TYPE CONVERSION [ Number() , String() ,Boolean()] 
& COERCION(AUTOMATICALLY TYPE CONVERTION)*/

    const ipYear='1993';        //string
    console.log(Number(ipYear)+10); //converted to number


    //COERCION
    console.log('23'-'10'-3); //10 :strings are coverted into numbers
    console.log('23'>'10');    //true :strings are coverted into numbers

    let n='1'+ 1;     //11
    n-=1;
    console.log(n);   //10

    console.log("10"-"4"-"3"-2+"5");   //15
    console.log(2+3+4+"5");   //95

//1.16   TRUTHY & FALSY VALUES

    //5 FALSY VALUES    [0, '' ,undefined, null, NaN]

    console.log(Boolean(0));   //FALSE
    console.log(Boolean(undefined));   //FALSE
    console.log(Boolean(null));   //FALSE
    console.log(Boolean(''));   //FALSE
    console.log(Boolean(NaN));   //FALSE


    console.log(Boolean("Amit"));   //true

    const money=100;
    if(money){
        console.log("Don't spent it all!");
    }else {
        console.log("You should get a job!");
    }                                        //Don't spent it all!



//1.17  EQUALITY OPERATORS ==(TYPE COERCION DONE) VS === (TYPE COERCION IS NOT DONE) 
// (!=)  loose not-equality vs (!==) Strict not-eqauity

const agee= "18";
if(agee === 18){
    console.log("You just became an adult: Strict equality")
}
if(agee == 18){
    console.log("You just became an adult: Loose equality")
}                                             //*op: You just became an adult: Loose equality


//1.18   BOOLEAN LOGIC  [AND , 0R , NOT]


//1.19 LOGICAL OPERATORS [ &&, ||, !]

const hasDriversLicence= true;
const hasGoodVision=false;
const isTired=true;

if(hasDriversLicence || hasGoodVision && !isTired){
    console.log("you can drive...");
} else{
    console.log("Someone else should drive...");
}



//1.20 CODING CHALLEGE#3

let dolphinAvg, koalasAvg;
let dolphilScore1=97, dolphinScore2=112,dolphinScore3=101;
let koalasScore1=109, koalasScore2=95, koalasScore3=106;
const minimumScore=100;
dolphinAvg=(dolphilScore1+dolphinScore2+dolphinScore3)/3;
console.log(`dolphin avarege is ${dolphinAvg}`);
koalasAvg=(koalasScore1+koalasScore2+koalasScore3)/3;
console.log(`koalas avarege is ${koalasAvg}`);
    if(dolphinAvg>koalasAvg && dolphinAvg>=minimumScore){
        console.log(`dolphin team wins`);
    } else if(koalasAvg>dolphinAvg && koalasAvg>=minimumScore){
        console.log(`koalas team wins`);
    } else if(dolphinAvg===koalasAvg && dolphinAvg>=minimumScore && koalasAvg>=minimumScore){
        console.log(`it's draw`);
    } else {
        console.log(`no one wins`)
    }


//1.21  SWITCH STATEMENTS

    /*switch(variable) {
        case ' ':
            break;
        case 2:
            .....
            break;
        default :
            ......
            break;
    }*/


//1.22  STATEMENT & EXPRESSIONS

    //expression  [3+4, 1993, true && !false ] :
    // they produces value
    
    /*statement [if (1>0){
                    console.log("big")
                }]*/
    //set of actions & not produces value
    //! in template literal you can't use


//1.23  THE CONDITIONAL(TERNARY) OPERATOR

    //*condition? expression1 : expression2;
    const drink= 19>20? "soda" : "water";
    console.log(`i like to drink ${19>20? "soda" : "water"}`);


//1.24 CODING CHALLENGE#4

const bill=430;
console.log(`tip is: ${bill>=50 && bill<=300? bill*.15: bill*.2}`)


//1.25  ES6,ES6+, ES6NEXT

    //write in ES6 then convert them into ES5 using (babel)
    //*ES6 compatible table



console.log