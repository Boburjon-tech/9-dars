// Array

// let ismlar = ["Bobur","Saidrahim","Mustafo","Farrux"];
// console.log(ismlar[Math.floor(Math.random()*ismlar.length)]);

// Hex;

// let hex_color = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let hex_value="#";

// for (let i=0;i<6;i++){
//     hex_value+=(hex_color[Math.floor(Math.random()*hex_color.length)]);
// }console.log(hex_value);
// function Random_color() {
//   let hex_value = "#";
//   for (let i = 0; i < 6; i++) {
//     hex_value += hex_color[Math.floor(Math.random() * hex_color.length)];
//   }
//   return hex_value;
// }

// let bgColor = `linear-gradient(${Random_color()}, ${Random_color()})`;

// document.body.style = `
// background=${bgColor};
// background-repeat: no-repeat;
// background-size:cover;
// height:100vh;
// `;

// 41-masala:Funksiya 2ta argument qabul qiladi. Birinchi argument ikkinchi argumentdan katta emas. Agar birinchi argumentni ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false ;

function DelOne (a,b){
  if(a%b==0){
    return true;
  } else {
    return false;
  }
}console.log(DelOne(12,3));

//42-masala: Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib bersin.
function toNum(n){
  return Number(n);
}console.log(toNum("123"));

// 43-masala:To’rtburchakning yuzini hisoblaydigan funksiya yasang. Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak) tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak, agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

function FaceSquert(a,b){
  if (a<=0||b<=0){
    return -1;
  }else {
    return a*b;
  }
}console.log(FaceSquert(12,10));

// 44-masala: Funksiyaga ism va familiya argument qilib berilsa, funksiya “ism, familiya” formatdagi string qaytarsin.

function reverse(name,surname){
  let revNames="";
  revNames+=name;
  revNames+=", ";
  revNames+=surname;
  return revNames;
}console.log(reverse("Samandar","Xamidullayev"));

// 45-masala:.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna: 
// bug(true) ➞ "sad days"

// bug(false) ➞ "it's a good day";

function LengthOf(word){
  let spacy=0;
  for (let i=0;i<word.length;i++){
    if (word[i]===" "){
      spacy+=1;
    }
  }
  return spacy;
}console.log(LengthOf("salom dunyo nima gap"));

// 46-masala:Shunday funksiya yasangki, ushbu funksiya 2ta argument qabul qiladi. Birinchi argument massive, ikkinchi argument ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani qaytarsin.

function deleteElement(n){
  let arrey=[1,2,3,4,5,6,7,8,9];
  for (let i=0; i<n;i++){
    arrey.shift();
  }
  return arrey;
}console.log(deleteElement(3));

// 47-masala:Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya natijani qaytarsin;
function up_downVotes(a,b){
  return  a-b;
}console.log(up_downVotes(12,13));

// 48-masala:Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.

function toNegative(n){
  if (n>0){
    return n-(n*2);
  }else if(n<0){
    return n;
  }
}console.log(toNegative(-16));

// 49-masala:Massivni elementlarini o’rnin almashtiradigan funksiya yasang. Reverse metodi siz ham urinib ko’ring.

function ReverseArray (){
  let arrey = [1,2,3,4,5,6];
  let cop = [];
  for (let i = 0; i<arrey.length;i++){
    cop.push(arrey.pop());
  }
  return cop;
}console.log(ReverseArray());

// 50-masala:.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa funksiya true qaytarsin aks holda false;
function toCinema (n,tOrf){
  if (n<15 && tOrf==false){
    return false;
  }else {
    return true;
  }
}console.log(toCinema(18,false));

// 51-masala:Quyidagi namunalarda kamchilik bor funksiya aslida har bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri yasang.

function addOne(){
  let arrey = [1,2,3,4,5,6,7];
  for (let i=0; i<arrey.length;i++){
    arrey[i]=arrey[i+1];
  }return arrey;
}console.log(addOne());

// 52-masala:Template string yordamida ya’ni backticlar orqali  `` ushbu formatdagi stringni hosil qiling. 
// var ism = "Donyor";
// var familiya = "Olimov";
// var natija; -> sizning kodingiz.

function inBacktick (ism,familiya){
  return `${ism} ${familiya}`;
}console.log(inBacktick("samandar","Xamidullayev"));

//53-masala:Quyidagi namunani ternary operator ko’rinishida yozing. 

function isGood (word){
  if (word==="yaxshi"){
    return true;
  }else if (word==="yomon"){
    return false;
  }
}console.log(isGood("yomon"));

// 54-masala: Funksiya string qabul qiladi. Agar ushbu stringning uzunligi. juft bo’lsa funksiya true qaytarsin, aks holda false;

function lengthStr (word){
  if  (word.length%2==0){
    return true;
  }else {
    return false;
  }
}console.log(lengthStr("salom"));

// 55-masala:Funksiya 2ta argument qabul qiladi. Ikkala argument ham son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni qaytarsin;
function degreeNum (a,b){
  return a**b;
}console.log(degreeNum(5,5));

// 56-masala:Funksiya massiv qabul qiladi. Ushbu funksiya massivning so’nggi elementini qaytarib bersin ;

function LastWord (){
  let arrey=["salom","samandar","qalb"];
  let lastword= arrey.pop();
  return lastword;
}console.log(LastWord());

// 57-masala:Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda 400ga ham bo’linganidagina kabisa hisoblanadi.

function isKabisa (year){
  if (year%4==0 || year %400==0){
    return true;
  }else {
    return false;
  }
}console.log(isKabisa(2400));

// 58-masala: Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi harfisiz qaytarib bersin;

function withoutLetter (word){
  let worrd = word.slice(1);
  return worrd;
}console.log(withoutLetter("salom"));

// 59-masala:Boolen qiymatini teskarisini qaytarib beradigan funksiya yasang;
function reverseBoolean(word){
  if(word==true){
    return false;
  }else{
    return true;
  }
}console.log(reverseBoolean(false));

// 60-masala:Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft” qaytaradi, agar toq bo’lsa “toq” qaytarsin;

function juftOrtoq(n){
  if (n%2==0){
    return "juft";
  }else{
    return "toq";
  }
}console.log(juftOrtoq(1));