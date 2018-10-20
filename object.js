function character(name){
	this.name= name;
	this.weapon;
	this.color;
	this.relationship= false;
	this.getInfo= getCharacter;

}


function getCharacter(){
	return this.name + " " + this.weapon + " " + this.color + " " + this.relationship;
}
let text="My name is Jeremiah Mena" + ", my name is Akeena Hall" + " ,and my name is Coach Mao." 
let maoText=" I am Coach Mao" + " AND A AM A BLUE AVATAR!!!!!"
let mena= new character("Jeremiah Mena");
mena.color= "black";

mena.relationship= true;

mena.weapon= "bayblade";

console.log(mena.getInfo());

let hall= new character("Akeena Hall");
hall.color="black";

hall.relationship= true;

hall.weapon="katania";

console.log(hall.getInfo());

let mao= new character ("Coach Mao");
mao.color="blue";
mao.relationship= undefined;
mao.weapon= "luscious hair";
console.log(mao.getInfo());
console.log(text);
console.log(maoText);