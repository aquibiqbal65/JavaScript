const name= "Aquib"
const repocount= 50;

console.log(name + repocount+ "value")  // this is an outdated way of printing an o/p

//instead use
 console.log(`Hello my name is ${name} and my repocount is ${repocount}`)


 const getName = new String('Aquib65')

 console.log(getName[0]);
 console.log(getName.toUpperCase());
 console.log(getName.charAt(2));
 console.log(getName.indexOf('6'));

 const newstring = "   Aquib iqbal   ";
 console.log(newstring)
 console.log(newstring.trim());  // it removes the  side blank spaces of the string


 const url = "https://aquibiqbal.com/%20iqbalfile";
 console.log(url.replace('%20','-'));

 console.log(url.includes('aquib'))
