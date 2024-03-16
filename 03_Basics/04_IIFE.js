// Immediate Invoked Function Expressions (IIFE)
 // () (); 

 //to use IIFi in a code, using of semicolon ; is must 

 (function chai() {
    console.log(`DB Connected`); 
 }) ();

 ( (name)  => {
    console.log(`DB Connected two ${name}`);
 }) ('Aquib')