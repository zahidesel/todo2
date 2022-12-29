// var ika= Number(prompt("Syötetty ikä: "));

// if (ika>=18) {console.log("hekoo "+ ika+ "\nKäyttäjä on täysi-ikäinen.");}
// else if (ika<18 && ika>0) {console.log("Käyttäjä ei ole vielä täysi-ikäinen.");}
// else {console.log("Virheellinen syöte");}
// var luku = 10; //(14)
// while (luku >= 1) { //(15)
//   console.log(luku-1); //(16)
//   luku = luku - 2; //(17)
// }

// var asal = true;
// for (var i = 0; i <= sayi / 2; i++) {
//     if (sayi % i == 0) {
//         asal = false;
//         break;
//     }
// }


// var prime =[];
// prime.push(2); //smallest prime number

// var flag=0;

// for(var i=3; i<=60; i=i+2)  //skip all even numbers because prime numbers are all odd except 2
//     {
//         for(var j=3; j*j <=i; j=j+2) // check by upto sqrt(i), skip all even numbers
//             {
//                 if(i % j == 0){
//                     flag=0
//                     break //not a prime break
//                 }
//                 flag=1;
//             }
//             if(flag==1)
//             prime.push(i)
//     }
//     for(var k=0; k< prime.length; k++)
//     {console.log(prime[k])}
// var count=0
// var i,j
// var x=0
// for(j=2;j<=60;j++){
// 	for( i=1;i<=j;i++){
//   		if(j%i==0)
//   		count++ 
		
// 	}
// 		if(count==2)
// 		console.log(j)
// 		count=0
		
// }
// console.log("Alkulukuja löydetty yhteensä:"+x)
// var variable;
// if ( 10 > 4){
//   variable = true;
// }
// else {
//   variable = 55;
// }

// console.log(variable)

// var x=5
// var a=toString(x)
// console.log(typeof(a))
// var count=0
// var i,j
// var x=0
// for(j=2;j<=60;j++){
// 	for( i=1;i<=j;i++){
//   		if(j%i==0)
//   		count++ }
		
// if(count==2)
// console.log(j)
// 	x+=1
// count=0
		
// }
// console.log("Alkulukuja löydetty yhteensä:"+x)
// var count=0
// for (var counter = 2; counter <= 60; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
            
//         }
//     }
//     if (notPrime === false) {
//                 count++
//                 console.log(counter);
               
//     }
    
// }
// console.log("Alkulukuja löydetty yhteensä: "+count)

// function laskeNelio(){
// const luku= document.getElementById("luku");
// const teksti = document.createElement("p");
// teksti.id="tulos";
// document.body.appendChild(teksti);
// teksti.innerHTML="luku on"+luku.value*luku.value;


// function log(s) {
//     var s = 'Mr. X';
//     console.log(s);
//   }
//   log('Hello!');
//  var array1=[1,2,4];
//  var array2=[3,5,3]
//  console.log("Taulukko 1: "+array1)
//  console.log("Taulukko 2: "+array2)
//      while (array2.length!=0){
//  array1.push(array2.pop());
//  array1.push(array2.shift());
//      }
     
//  console.log("Lopputulos: "+array1)
// a=(new Array("test",1,2,3, -1,-2,-3,0xFFFFF)).sort()
// console.log(a)
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['b', 'c', 'a'];

// console.log(
//   arr1.sort() === arr1,
//   arr2.sort() == arr2,
//   arr1.sort() === arr2.sort()
// );
// function greatestNumberInArray(arr) {
//     let greatest = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (greatest < arr[i]) {
//         greatest = arr[i];
//       }
//     }
//     return greatest;
//   }

// function puolitus(x){return x/2;}
// function nelio(y){return y*y;}
// function toisto(a,b,c){
//     if (a<=0){console.log("Toistoja tulee olla ainakin yksi!");}
//     else if (a>0){
//         if (c==puolitus){return puolitus(b);}
//         else if (c==nelio) { s=0; while (s<a){ s+=1; return nelio(b);}}
//     }
//  }
// function puolitus(x){return x/2;}
// function nelio(y){return y*y;}
// function toisto(a,b,c){
//     if (a<=0){console.log("Toistoja tulee olla ainakin yksi!");}
//     else if (a>0){
//         if (c==puolitus){return puolitus(b);}
//         else if (c==nelio) { for (var i=0; i<a; i++){return nelio(b);}}
//     }
//  }


//  console.log(puolitus(50));
//  console.log(toisto(5,200,puolitus));
//  console.log(toisto(3,5,nelio));
//  console.log(toisto(-1,3,puolitus));

// function a(x){return x*x;}
// function repeat(n, a) {
//     for (var i = 3; i < n; i++) {
//       return a(i);
//     }
//   }
//   repeat(9, a);
// function puolitus(x,y) { 
//     for (var i=0; i<y;i++){
//         x= x / 2;
//     }
     
// return x}

// function nelio(x,y) { 
//     for (var i=0; i<y;i++){
//         x= x*x;
//     }
// return x}

// function toisto(a, b, c) {
//     if (a <= 0) { 
//         console.log("Toistoja tulee olla ainakin yksi!") 
    
//     }
//     else{
//         if (c==puolitus){
//             return puolitus(a,b)
//                 }
//         else if(c==nelio){
//             return nelio(a,b)
        
//             }
//      }   
  

// }
//   console.log(puolitus(50));
//   console.log(toisto(5,200,puolitus));
//   console.log(toisto(3,5,nelio));
//   console.log(toisto(-1,3,puolitus));



// function repeat(n, b, action) {
//     function action(x){return x*3;}
//     for (var i = 0; i < n; i++) {
//     action(b);
//     }
//   }
//   repeat(3, console.log);





// function puolitus(x){return x/2;}

//  function toisto(a,b,c){
     
 
//          if (c==puolitus){
            
//             {
//             return puolitus(b);}
        
//      }
  

//  console.log(puolitus(50));






// function puolitus(x) { 
//     for (var i=0; i<b;i++){
//         x= x / 2;
//     }
     
// return x}

// function nelio(x) { 
//     for (var i=1; i<toista.b;i++){
//         x= x*x;
//     }
// return x}



// function toista(a, b, c) {
//    this.b=function(){
//     return b
//    }
//     if (a <= 0) { 
//         console.log("Toistoja tulee olla ainakin yksi!") 
    
//     }
//     else{
//         if (c==puolitus){
//             return puolitus(b)
//                 }
//         else if(c==nelio){
//             return nelio(b)
        
//             }
//      }   
  

// }
// console.log(toista(16,2,puolitus))



// function checkFunc(arry){ 
    
//     for (var i=0; i<arry.length; i++){
//        var x=arry[i]; var b=arry[i+1];
//         if (typeof(x)==="string"){
//             return false;} 
//             else if (typeof(x)==="number" && typeof(b)==="string"){return false;}
//         else if (typeof(x)==="number") {return true; }
        
//     } 
// }
// function combineFunc(arry){
//     console.log("Taulukossa tekstiä. Yhdistetään sanat:"); 
//     var  y=""; 
//     for (var i=0; i<arry.length; i++){
//         var x=arry[i]; y=y+x+" "; } return y;
// }
// function sumFunc(arry){
    
//     console.log("Taulukossa vain lukuja. Lasketaan summa:"); 
//     var z=0;
//     for (var i=0; i<arry.length; i++){
//         var a=arry[i]; 
//         z+=a; } return z;
// }

// var array1=["lais", "heo", "djd"];
// var array2=[7,8,6,3];
// var array3=[4,"ioi",5, "ido"]
// function someFunction(arry, f1, f2, f3){
//     if(!f1(arry)){
//         console.log(f2(arry));
//     }
//     else{
//         console.log(f3(arry));
//     }
// }

// someFunction(array1, checkFunc, combineFunc, sumFunc);
// someFunction(array2, checkFunc, combineFunc, sumFunc);
// someFunction(array3, checkFunc, combineFunc, sumFunc);


// function loop(value,  reduceOne){
// 	while(value<=0){
// 	reduceOne(value);
// 	}
//     console.log(value)


//     // if (value<=0){
//     //     greaterThanZero(value);
//     // }
	
// }

// var value=3;
// var reduceOne= function(n){
//     return n-1;
// }

// var printValue=function(n){
//     console.log(n);

// }
// var greaterThanZero=function(n){
//     return n>0;
// }

// loop(value, reduceOne);

// function Henkilo(nimi, tyo, palkka){
//     this.nimi=nimi
//     this.tyo=tyo
//     this.palkka=palkka
// }

// henk1= new Henkilo("Mikko", "JS-koodari",5000)
// henk2= new Henkilo("Lea", "Python-koodari", 1500) 
// henk3= new Henkilo("Pena", "Opettaja", 1000)

// Henkilo.prototype.vertaaPalkka=
// function (henk){

//     if (this.palkka>henk.palkka){console.log(this.nimi, "tienaa", this.palkka-henk.palkka, "enemmän kuin", henk.nimi)}
//     else if (this.palkka==henk.palkka){console.log(this.nimi, "tienaa yhtä paljon kuin", henk.nimi)}
//     else if(this.palkka<henk.palkka){console.log(this.nimi, "tienaa", henk.palkka-this.palkka, "vahemmän kuin", henk.nimi)}
// }
// console.log(henk1.palkka)

// henk1.vertaaPalkka(henk2)


// var henk1 ={nimi:"Mikko" , tyo:"JS-koodari" , palkka:5000, vertaaPalkka(henk) }
// console.log(Pattern.matches("[^abc]", "aemngq"));

// function laskePotenssi(x,y){
//     return x^y;
//     }

// laskePotenssi(4,3)

const todoInput=document.getElementById("todoInput");
const addBtn =document.getElementById("addBtn");
const todoList =document.getElementById("todoList");

var todos=[];

addBtn.addEventListener("click", function(){
    if(todoInput.value===""){alert("Todo text can't be empty");
        return;}
  
        const todoContainer=document.createElement("div");
        const todoText= document.createElement("h2");
        const buttonsContainer=document.createElement("div");
        const done=document.createElement("button");
        const deleteBtn=document.createElement("button");

        const todoId=new Date().getTime();

        todoText.innerText=todoInput.value;
        done.innerText="Done";
        deleteBtn.innerText="Delete";
        buttonsContainer.appendChild(done);
        buttonsContainer.appendChild(deleteBtn);

        todoContainer.appendChild(todoText);
        todoContainer.appendChild(buttonsContainer);
        todoContainer.classList.add("todoContainer");
        // todoList.appendChild(todoContainer);
        todoContainer.id=todoId;
        deleteBtn.addEventListener("click", function () {
            deleteTodo(todoId);
          });

        done.addEventListener("click", function(){
            updateTodo(todoId);
            if (todoContainer.classList.contains("done")) {
                done.innerText = "Undone";
              } else {
                done.innerText = "Done";
              }
        })


        todos.push(todoContainer);
        appendTodos();

        todoInput.value="";

});

function appendTodos(){
    todoList.innerHTML="";
    for(let i=0; i<todos.length; i++){
        todoList.appendChild(todos[i]);
    }
}


function deleteTodo(id) {
    var tempArr = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id != id) {
        tempArr.push(todos[i]);
      }
    }
    console.log("temp", tempArr);
    todos = tempArr;
    console.log(todos);
    appendTodos();
  }



  function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        todos[i].classList.toggle("done");
      }
    }
  }







