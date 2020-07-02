function logger(name) {
 for(let fahd of name ) 
{

    console.log(fahd)
}

}
let fahd =["hussain","moudy","nancy"]

logger(fahd)



let play=["10","15","20","25"]

function  hottestDays(y,k){
for(let f of y ){
    if(f > k){
    console.log(f)
}
}

}

hottestDays(play , 16);

let no=[

{
bookk:"read" ,id:1},

{bookk:"play" ,id:2},
    
{bookk:"how" ,id:3},
    
];

function getBookById(bookId, books){

for(book of no ){
if(book.id==bookId){
console.log(book.bookk);
}


  else {
    console.log("undefined");
 
}

}
}
getBookById(2,no);




// التمرين الثاني
let resturant=[];
let  request = prompt("اسم السعلة")


while( request !="انتهيت"){

let price=prompt("ادخل السعر");
let prmmeal=prompt("الكمية ");

resturant.push({resturan_name:request,resturan_money:price,resturan_meal:prmmeal})


  request = prompt("اسم السعلة");
}
for(l of resturant ){
    console.log(l.resturan_name +" "+l.resturan_money+" "+l.resturan_meal)
}
