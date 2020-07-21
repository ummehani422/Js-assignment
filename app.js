// chap01
//task 01
alert("HELLO! WELCOME TTO OUR WEBSITE.")
//task 02
alert("Error! Please enter a valid password.")
//task 03
alert("Welcome to JS land...\nHappy Coding.")
//task 04
alert("Welcome to JS land...")
alert("Happy Coding.")
//task 05
alert("Hello! I can run JS through my web browser's console")
//chap02
//task 01
var username;
//task 02
var myNAme="Umme Hani"
//task 03
var message="Hello World"
alert(message)
//task 04
var name = "Umme hani"
var age ="19"
var course="Certified Mobile App Development"
alert(name)
alert(age)
alert(course)
//task 05
var item="pizza"
alert(name+"\n"+name.slice(0,4)+name.slice(0,3)+name.slice(0,2)+name.slice(0,1))
//task 06
var email="ahmedhania266@gmail.com"
alert("My Email Address is " + " " + email)
//task 07
var book="A smarter way to learn JavaScript"
alert("I am tring to learn from the book." + " " + book)
//task 08
document.write("Yah! I can write HTML content through JavaScript")
//task 09
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

//chap03
//task 01
var age= 19
alert("I am " + age +   " years old.")
//task 02
var visit=5
alert("You have visited this site"+visit+"times")
//task 03
var birthyear= 2000
document.write("My birth year is " + birthyear )
document.write("<br>")
document.write("Data type of my declared variable is number.")
//task 04
var name = "Hania"
var title = "Shirts"
var quantity = "2"
document.write(name + " ordered " + quantity + " " + title + " on XYZ clothing store.")

//chap05
//task 01
var a=5
var b=4
var c = a+b
document.write("Sum of "+ a+ " "+ "+" + b +" is "  +c)
//task 02
var a=5
var b=4
var c = a-b
document.write("Subraction of "+ a+ " "- "+" + b +" is "  +c)

var a=5
var b=4
var c = a*b
document.write("Multipication of "+ a+ " "+ "*" + b +" is "  +c)

var a=5
var b=4
var c = a%b
document.write("Modulus "+ a+ " "+ "%" + b +" is "  +c)
//task 03
var num
var initalno=5
var d=7
var b = initalno++
var c = initalno+d
var e =c--
document.write("Value after variable declaration is\n "+num+" ")
document.write("Initial Value:\n "+b+" ")
document.write("Value after Increment:\n "+initalno +" ")
document.write("Value after addition is.\ \n" +c+" ")
document.write=("Value after decrement is:"+e)
//task 04
var cost=600
var a= cost*5
document.write("Total cost to buy 5 tickets to a movie is "+a +" PKR.")
//task05
var i
for(i=1 ; i <=10 ;i++)
{
    document.write("4 "+ "* "+ i + "=" + 4*i + "<br>")
}
//task 06
var cel=25
var far=70
var c = (c*9/5)+32
var f = (f-32)*5/9
document.write(cel+"<sup>o</sup> C is"+c+"<sup>o<sup>")
document.write(fer+"<sup>o</sup> F is"+f+"<sup>o<sup>")

//task 07
var firstitem =650
var firstquanity=3
var a =firstitem*firstquanity
var seconditem=100
var secondquantity=7
var b=seconditem*secondquantity
var shipcharges=100
var total =a+b+shipcharges
document.write("<h1>Shopping Cart</h1><br><br>")
document.write("Price of item 1 is"+firstitem+"<br>")
document.write("Quantity of item is "+firstquanity+"<br>")
document.write("Price of item 2 is"+seconditem+"<br>")
document.write("Quantity of item 2 is"+secondquantity+"<br>")
document.write("Shipping charges"+shipcharges+"<br>")
document.write("Total Cost of your order is"+total)
//task 08
var totalmarks=980
var marks=804
var per=(marks*100)/980
document.write("Total Marks:"+totalmarks+"<br>")
document.write("Marks Obtained:"+marks+"<br>")
document.write("Percentage:"+per+"%")
//task 09
var usdollar=104.80
var noOfDollar=10
var totaldollar=usdollar*noOfDollar
var saudiRiyals=28
var noOfRiyals=25
var totalRiyals=saudiRiyals*noOfRiyals
var total = totaldollar+totalRiyals
document.write("Total Currency in PKR:"+tptal)

//task 10
var a =20
var total=((a+5)*10)/2

//task 11
var cuurentYear=2016
var birthYear=1992
var age= cuurentYear-birthyear
document.write("Current Year:"+cuurentYear+"<br>")
document.write("birth Year:"+birthYear+"<br>")
document.write("Your Age is:"+age)

//task 12
var radius=20;
var circumference=6.284*radius;
var area=3.142*(r*r);
document.write("Radius of a circle"+radius+"<br>")
document.write("The Circumference is: "+circumference+"<br>")
document.write("The area is:"+area)

//task13
var FavSnack="chocolate chip";
var currentAge=15;
var  maxAge=65;
var Snacksperday=3;
var total = (maxAge-currentAge)*Snacksperday;
document.write("<h1>The Lifetime Supply Calculator</h1><br><br>")
document.write("Favorite Snack:"+FavSnack+"<br>")
document.write("Current Age:"+currentAge+"<br>")
document.write("Estimated Maximum Age:"+maxAge+"<br>")
document.write("Amount of snacks per day:"+Snacksperday+"<br>")
document.write("You will need "+total+" "+FavSnack+"to last you untill the ripe old age of "+maxAge)
//chap 6-9
//task 01
var a=10;
document.write("Result<br>")
document.write("The value of a is:"+a+"<br>")
document.write("--------------------------------------------<br>")
++a;
document.write("The value of ++a is:"+a+"<br>")
document.write("Now the value of a is:"+a+"<br>")
a++;
document.write("The value of a++ is:"+a+"<br>")
document.write("Now the value of a is:"+a+"<br>")
--a;
document.write("The value of --a is:"+a+"<br>")
document.write("Now the value of a is:"+a+"<br>")
a--;
document.write("The value of a-- is:"+a+"<br>")
document.write("Now the value of a is:"+a+"<br>")
//task 02
var a=2;
var b=1;
var Result=--a - --b + ++b +b--;
--a;
var num1=(--a - --b);
var num2=(--a - --b + ++b)
var r=(--a - --b + ++b + b--)
document.write("a is"+num1+"<br>")
document.write("b is:"+num2+"<br>")
document.write("result is:"+r)
//task 03
var a = prompt("Enter your name:")
alert("Welcome"+a+" Have A Nice Day!")
//task 05
var num=prompt("Enter A number");
if(n==0)
{
    tabel(5);
}
else
{
    table(n);
}
function tabel(a){
for( var i=1;i<=10;i++)
{
    document.write(a+" * "+ i + " = " + (a*i)+ "<br>")
}}
//task 06
var a = prompt("Enter first subject name.")
var b = prompt("Enter second subject name.")
var c = prompt("Enter third subject name.")
var d= +prompt("Enter "+a+ " Subject Marks")
var e= +prompt("Enter "+b+ " Subject Marks")
var f= +prompt("Enter "+c+ " Subject Marks")
document.write("<br>")
var total = d + e + f;
document.write("Subjecy Total Marks Obtained Marks Percentage")
document.write(a+" 100 "+"\t"+d+"%"+"<br>")
document.write(b+" 100 "+"\t"+e+"%"+"<br>")
document.write(c+" 100 "+"\t"+f+"%"+"<br>")
var per =(t/300)*100;
document.write("<br>\t\t"+300+"\t\t"+total+"\t\t"+per+"5")
//chap 9-11
//TASK 01
var a= prompt("Enter your city:")

if(a == "Karachi")
{
    alert("Welcome to city of lights")
}
else{
    alert("Welcome to your city")
}
//task 02
var a = prompt("Enter your gender")
if(a == "Female")
{
    alert("Good Morning Maam!")
}
else if(a == "Male")
{
    alert("Good Morning Sir!")
}
//task 03
var a = prompt("Enter color of road signal")
if(a == "Red")
{
    alert("Must Stop!")
}
else if(a == "Green")
{
    alert("Go.")
}
else if(a == "Yellow")
{
    alert("Ready to move.")
}
//task 04
var a = prompt("Enter your fuel")
if( a < 0.25)
{
    alert("Please refill your fuel in your car.")
}
else{
    alert("Already full, no need to refill")
}
//task 05
 var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
  var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
   var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 
 
 var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
 if (true){ alert("True"); } if (false){ alert("False"); } 
if("car" < "cat"){ alert("car is smaller than cat"); }
//task 06
var a = +prompt("enter your subject 1 Marks");
var b = +prompt("enter your subject 2 Marks");
var c = +prompt("enter your subject 3 Marks");
var t = a+b+c;
var per = (t/300)*100;
document.write("<h1>Marks Sheet</h1>");
if (per >= 80 && per <=100){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : A-One"+"<br>");
	document.write("Remarks : Excellent"+"<br>");
}
else if(per >=70 && per<80){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : A"+"<br>");
	document.write("Remarks : Good"+"<br>");
}
else if (per >=60 && per<70 ){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : B"+"<br>");
	document.write("Remarks : You need to improve"+"<br>");
}
else if(per < 60 ){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : Fail"+"<br>");
	document.write("Remarks : Sorry"+"<br>");
}
else{
	document.write("Please enter correct Marks")
}
//TASK 07
var secretNo= 10
var a = prompt("Enter a secret no:")
var b = secretNo-a;
if( a == secretNo)
{
    alert("Bingo!Correct answer.")
    c=false;   
}
else if(b == 1)
{
    alert("Close Enough")
}
else{
    alert("try again")
}
//task 08
var a = prompt("Enter your number.")
if(a%3 == 0)
{
    alert("Yes"+ a + "is divisible by 3")
}
else
{
    alert("This"+ a+ "is not divisible by 3")
}
//task 09
var a = prompt("Enter your number.")
if(a%2 == 0)
{
    alert(a + "is an even number")
}
else
{
    alert(a+ "is odd number")
}
//task 10
var a =prompt("Enter the temperature:")
if(a > 40)
{
    alert("It is too hot today.")
}
else if(a > 30)
{
    alert("The Weather today is Normal")
}
else if(a > 20)
{
    alert("Today’s Weather is cool")
}
else if(a >10)
{
    alert("OMG, Today's weather is so cool.")
}
//task 11
var num1=prompt("Enter First Number.")
var num2=prompt("Enter Second Number.")
var op = prompt("Enter Operator")
var result
if( op == "+")
{
 num1+num2;   
}
else if(op == "-")
{
  num1-num2;
}
else if(op == "*")
{
    num1*num2
}
else if(op == "/")
{
     num1/num2

}
else if (op == "%")
{
   num1%num2
}
//chap 12-13
//task 02
var n1=prompt("Enter first no")
var n2=prompt("Enter Second no")
if(a > b)
{
   alert("Larger")
}
else if(a == b)
{
    alert("They are equal.")
}
else 
{
    alert(" larger.")
}
//task 03
var a = prompt("Enter a numnber");
if (a==0){
	document.write("ZERO")
}
else if (a>0){
	document.write("POSITIVE");
}
else if (a <0){
	document.write("NEGATIVE");
}
//task 04
var a = prompt("Enter a character");
a = a.toLowerCase();
if (a=="a" || a=="e" || a=="i" || a=="o"){
	document.write("Vowel")
}
else{
	document.write("This is not vowel.")
}
//task 05
var a = "hania";
var b = prompt("Enter a password");
if (b=="" || b==" "){
	document.write("Please enter your password")
}
else{
	if (a == b){
		document.write("Correct! The password you entered matches the original password")
	}
	else{
		document.write("Incorrect password");
	}
}
//task 06
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day";
}
 else {
     greeting = "Good evening";
     }
     alert(greeting);
//task 07
var time = prompt("Enter a time");
if (time >= 0000 && time < 1200){
	document.write("Good Morning")
}
else if (time >= 1200 && time < 1700){
	document.write("Good Afternoon")
}
else if (time >= 1700 && time < 2100){
	document.write("Good Evening")
}
else if (time >= 2100 && time < 2359){
	document.write("Good Night")
}
//CHAP 14-16
//TASK 01
var array = new Array();
//task 02
var obj={}
//task 03
var myArray = ["Hania,Seemal,Mishal"]
//task 04
var myArray =[1,2,3,4,5,6,7,8,9]
//task 05
var myArray = [False,True]
//task 06
var myArray =["Ummehani,Student,",19]
//task 07
var myArray=[" SSC", "HSC", "BCS", "BS", "BCOM", "MS"," M. Phil.", "PhD"]
document.write("<h1>Qualification</h1>")
for(var a=0; a<myArray.length ; a++)
{
    document.write((a+1)+")  "+myArray[a]+"<br>")
}
//task 08
var students=["Hani","Wajih","Mishal"];
var Marks=[320,230,480];
for(var a=0;a<students.length;a++)
{
    document.write("Score of "+students[a]+"is "+Marks[a]+"."+"Percentage: "+(Marks[a]/500)*100)
    document.write("<br>")
    
}
//task 09
var color =["Red","Yellow","Blue"]
document.write(color+"<br>")
var beginning = prompt("Enter color you want to add to the beginning")
color.unshift(beginning) //insert
document.write(color+"<br>")
var End = prompt("Enter color you want to add to the end")
color.push(End)
document.write(color+"<br>")
color.unshift("Pink","white")
document.write(beginning+"<br>")
color.shift()
document.write(beginning+"<br>")
color.pop()
document.write(beginning+"<br>")
var index = prompt("Enter index you want to add a color")
var colorName =prompt("Enter color name: ")
color[index]=colorName
document.write(color+"<br>")
var startp = prompt("Enter start position for deletion")
var endp = prompt("Enter end position for deletion")
for(var a= startp;a<=endp;a++)
{
    delete color[a]
}
document.write(color+"<br>")
//task 10
var a =[320,230,480,120]
document.write("Scores of Students: "+a+"<br>")
a.sort()
document.write("Ordered scores of Students: "+a+"<br>")
//task 11
var city =["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("Cities list: "+"<br>")
document.write(city+"<br>")
var a=city.slice(2,4)
document.write("Selected list:"+"<br>")
document.write(a+"<br>")
//task 12
var arr = ["This" , "is ", "my ", "cat"]
document.write("Array: <br>")
document.write(arr+"<br>")
var arr2 = arr.join(" ")
document.write("String:<br>")
document.write(arr2)
//task 13
var arr =[]
arr[0]="Keyboard"
arr[1]="Mouse"
arr[2]="printer"
arr[3]="monitor"
document.write("Device: <br>")
document.write(arr+"<br><br>")
for(var i = 0; i<=arr.length+2;i++)
{
    j=arr.shift()
    document.write("Out: <br>")
    document.write(j+"<br>")
}
//task 14
var arr =[]
arr[0]="Keyboard"
arr[1]="Mouse"
arr[2]="printer"
arr[3]="monitor"
document.write("Device: <br>")
document.write(arr+"<br><br>")
for(var i = 0; i<=arr.length+2;i++)
{
    j=arr.pop()
    document.write("Out: <br>")
    document.write(j+"<br>")
}
//task 15
// task 1
var a=[[0,1],[1,2],[2,3]]
// task2 
var a=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
//task 3
for(let a =1 ; a<=10;a++)
{
    document.write(a+"<br>")
    
}
//task 04
var no=prompt("Enter your Number")
var lenght=prompt("Enter your lenght")
for(let a=1;a<=lenght;a++)
{
    document.write(no+" * "+a+" = "+no*a+"<br>")
}
//task 05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
document.write(fruits+"<br>")
for(let a= 0;a<=fruits.length;a++)
{
    document.write("Element at index "+a +" is "+fruits[a]+"<br>")
}
//TASK 06
document.write("Counting : <br>")
var Result=""
for (let a = 1; a <= 15; a++) {
    Result=Result+a;   
    Result=Result+", "
}
document.write(Result)
var Result=""
document.write("Reverse Counting : <br>")

for (let a = 10; a <= 1; a--) {
    Result=Result+a;   
    Result=Result+", "
}
document.write(Result)
Result=""
document.write("Even Counting : <br>")

for (let a = 0; a <= 20; a++) 
{if(a%2==0){
    Result=Result+a;   
    Result=Result+", "}
}
document.write(Result)

Result=""
document.write("Odd Counting : <br>")

for (let a = 0; a <= 20; a++) 
{if(a%2!=0){
    Result=Result+a;   
    Result=Result+", "}
}
document.write(Result)
Result=""
document.write("Series Counting : <br>")

for (let a = 2; a <= 20; a++) 
{if(a%2==0){
    Result=Result+a;   
    Result=Result+"k    , "}
}
document.write(Result)
//task 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("what do you want ")
var flag=0
for(let i=0;i<A.length;i++)
{
    if(A[i]==b)
    {
        document.write(b+" is available at index "+i)
        flag=1
        break
    }
}
if(flag==0)
{
    document.write(b+ " is not available ")
}
//TASK 08
var arr=[24,53,78,91,12]
var a=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>a)
{
    a=arr[i]
}
}
document.write("The largest no is: ",a)
//task 09
var arr=[24,53,78,91,12]
var a=100
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<a)
{
    a=arr[i]
}
}
document.write("The smallest no is: ",a)
//task 10
var Result="";
for (let i = 1; i <= 100; i++) {
    if (i%5==0) {
    Result=Result+i;   
    Result=Result+", "   
    }
}
document.write(Result);
//chap 21-25
//task 1
var f =prompt("Enter your First name")
var l= prompt("Enter your last name")
var fullName = document.write("Hello "+f+" "+l)
//task 2
var a = prompt("Enter your favorite mobile phone model")
document.write("My favorite phone is "+a +"<br>")
document.write("Lenght of string: "+(a.length))
//task 3
var l= "Pakistani"
document.write("String: "+l+"<br>")
document.write("Index of 'n': " +l.indexOf("n"))
//task 04
var l= "Hello World"
var b = l.lastIndexOf("l")
document.write("String: "+"<br>")
document.write("Index of 'l': " +b)
//task 05
var a ="Pakistani"

document.write("String:"+a+"<br>")
var b = a.charAt(3)
document.write("Character at index 3: "+b)
//task 6
var f =prompt("Enter your First name")
var l= prompt("Enter your last name")
var fullname = f.concat(l)
document.write("Hello "+fullName)
//task 07
var city = "Hyderabad"
document.write("City: "+city+"<br>")
var rep = city.replace("Hyder", "Islam")
document.write("After replacement: "+rep)
//task 08
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write("Before replacement: "+message+"<br>")
var rep= message.replace(/and/g , "&")
document.write("After replacement: "+rep)
//task 09
var a ="472"
document.write("Value : "+ a+"<br>"+"type : ")
document.write(typeof a);
var b =Number(a)
document.write("<br>Value : "+ b+"<br>"+"type : ")
document.write(typeof b)
//task 10
var a =prompt("Enter any word")
document.write("User input: "+a+"<br>")
u= a.toUpperCase()
document.write("Upper case: "+u)
//task 11
var l = prompt("enter lowercase input")
document.write("User input : "+a+"<br>")
var a= a.slice(0,1)
var a = a.toUpperCase()
var l =l.slice(1,l.length)
var b= a.concat(l)
document.write("Titel case : "+b)
//task 12
var num=35.36
document.write("Number: "+num+"<br>")
var a = num.toString()
var b = a.replace(".","")
document.write("Result: "+b)
//task 13
var a = prompt("Enter user input")
for(var i=0;i<a.length;i++)
{
    b=a.charAt(i)
    b=b.charCodeAt(0)
    if(b==33 || b==44 || b==46 || b==64)
    {
        alert("Enter name is invalid.")
 
    }
    else
    {
        alert("Welcome.")
    }
}
//task 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var b = prompt("what do you want ")
b=b.toLowerCase()
function s(b)
{
for(var i=0;i<A.length;i++)
{
    if(A[i]==b)
    {
        document.write(A[i]+" is available at index "+i)
      return
    }
}

    document.write(b+ " is not available ")
}
s(b)
//task 16
var a = "University of karachi"
var b =[]
var b =a.split('')
for(var i=0;i<b.length;i++)
{
    document.write(b[i]+"<br>")
}
//task 17
var a = prompt("Enter input");
document.write("User Input: "+a)
var b= a.charAt(a.length-1)
document.write("<br>last Character of input : "+b)
//task 18
var a ="the quick brown fox jumps over the lazy dog"
document.write("there are "+a.b(/the/g).length+" occurences of word 'the'")
//chap 26-30
//task 01
var a=+prompt("enter positive integer")
document.write("Number: "+a)
var round= Math.round(a)
document.write("<br>Round off value: "+round+"<br>")
var floor =Math.floor(a)
document.write("Floor value"+floor+"<br>")
var ceil =Math.ceil(a)
document.write("Ceil value"+ceil+"<br>")
//task 02
var a=+prompt("enter  integer")
document.write("Number: "+a)
var round= Math.round(a)
document.write("<br>Round off value: "+round+"<br>")
var floor =Math.floor(a)
document.write("Floor value"+floor+"<br>")
var ceil =Math.ceil(a)
document.write("Ceil value"+ceil+"<br>")
//task 03
var num=prompt("Enter a number")
var b = Math.abs(num)
document.write("The absolute value is: "+b)
//task 04
var x = Math.floor((Math.random() * 7) + 1);
document.write("random dice value : "+x)
//task 05
var x = Math.floor((Math.random() * 2) + 1);
if(x==0){
document.write("random dice value : Head")
}
else
{
    document.write("Tails wins")
}
//task 06
var x = Math.floor((Math.random() * 100) + 1);
document.write("Random no b/w 1-100 : "+x)
//task 07
var a=+prompt("enter weight in kg")
document.write("Weight: "+a)
var round= Math.round(a)
document.write("<br>Round off value: "+round+"<br>")
//task 08
var x = Math.floor((Math.random() * 10) + 1);
var a =prompt("Enter a number")
if(x==a)
{
    document.write("Congratulations,You are correct.")
}
else{
    document.write("Please try again!")
    
}
//CHAP 31-34
//TASK 01
var a =new Date()
document.write(a)
//TASK 02
var a = new Date()
var b = a.getMonth()
var mon = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
alert("Current Month:"+mon[b])
//task 03
var a = new Date()
var b = a.getDay()
var mon = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
alert("Today is:"+mon[b])
//TASK 04
var a = new Date()
var b = a.getDay()
var mon = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
if(b == 0 || b == 6)
{
alert("Today is fun day")
}
else{
    alert("Too busy day")
}
//task 05
var a = new Date();
var b = a.getDate();
if (b<16){
	alert("First fifteen days of the month")
}
else{
	alert("Last days of the month")
}
//TASK 06
var a = new Date();
document.write("Current Date: "+a+"<br>")
var b = a.getTime()
document.write("Elapsed milliseconds since january 1,1970: "+b+"<br>")
var min = b/(1000*3600)
document.write("Elapsed minutes since January 1,1970: "+min+"<br>")
//task 07
var a = new Date()
b = a.getHours()
if(b<12)
{
    alert("It's PM")
}
else
{
    alert("It's AM")
}
//task 08
var laterDate = new Date("Dec 31,2020")
document.write("lATER DATE: "+laterDate)
//TASK 09
var a = new Date("Jun 18, 2015")
b=a.getTime()
var today = new Date()
var tomili = today.getTime()
var diff = tomili-b
diff=diff/(1000*3600*24)
document.write(Math.round(diff)+" days have passed since 1st Ramadan,2015")
//task 10
var s = new Date("Jan 01, 2015")
var b = s.getTime()
var e = new Date("Dec 05, 2015")
var a = e.getTime()
document.write("On reference date "+e+"<br>")
var diff = a-b;
document.write(diff/(1000*60)+" seconds had passed since begining of 2015")
//task 13
var age = prompt("Enter your age")
var dob = new Date()
var year = dob.getFullYear()
document.write("Your age is: "+age+"<br>")
diff = year - age
document.write("Your birth year is: "+diff)
//TASK 14
var name = prompt("Enter your name")
var Month = prompt("Enter your month")
var noOfUnits = prompt("No of units: ")
var charges = prompt("Charges per unit ")
var a = new Date()
var b = a.getMonth()
var mon = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
var c = mon[b]
var net = noOfUnits*charges
var late = 350
var gross = net + late

document.write("<h1>Electric Bill</h1><br><br>")

document.write("Customer Name: "+name+"<br>")
document.write("Current Month: "+Month+"<br>")
document.write("No of units: "+noOfUnits+"<br>")
document.write("Charges per unit: "+charges+"<br>")

document.write("Net Amount Payable(within Due Date): "+net+"<br>")
document.write("Late payment charges: "+late+"<br>")
document.write("Gross Amount (After due date): "+gross)


//chap 35-38
var a =new Date()
document.write(a)
//task 02
var f=prompt("Enter your First Name")
var l = prompt("Ente your last name")
function greeting()
{
    alert("Hello "+f+" "+l)
}
greeting()
//task 03
var a=+prompt("Enter your First num")
var b = +prompt("Ente your last num")
document.write(add(a,b))
function add(a,b)
{
   return a + b;
}
//task 04
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
var c = prompt("Enter Operator")
document.write(Calculator(a,b,c))
function Calculator(a,b,c){
	if (c=="-") {
		return a-b
	}
	else if (c=="+") {
		return a+b
	}
	else if (c=="/") {
		return a/b
	}
	else if (c=="%") {
		return a%b
	}
}
//task 05
var a = +prompt("Enter a number")
Square(a)
 function Square(a){
 	document.write(Math.pow(a,2))
 }
 //task 06
 var a = +prompt("Enter number")
 document.write(Factorial(a))
 function Factorial(n) { 
            if (n === 0) {  
                return 1;  
            } 
            else {  
                return n * Factorial( n - 1 );  
            } 
 }
//task 07
var a = prompt("Enter first number" )
var b = prompt("Enter Last number")
count(a,b)
function count(a,b)
{
    for(var i = 0;i<=b;i++)
    {
        document.write("COUNTING: "+i+"<br>")
    }
}
//task 09
var a = +prompt("Enter width")
var b = +prompt("Enter height")
function CalculatesArea(width,height){
	document.write("<br>Area of Rectangle : "+(width*height))
}
CalculatesArea(a,b)
CalculatesArea(12,98)
//task 10
var word = prompt("Enter your  word")
var check = " "
for(var i = word.lenght-1;i>0;i--)
{
    document.write(word[i])
    check +=word[i]
}
if(check === word)
{
    alert("String is palindrome")
}
else{
    alert("String is not palindrome")
}

