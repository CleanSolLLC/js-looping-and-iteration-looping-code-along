 
 function writeCards(names, event) {
 	var newArray = []
   for (let i = 0; i < names.length; i++)
   {
     newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
   }
   return newArray	
 }
 
function countDown(num) {
  let count = -1;
    while (count < num) {
      console.log(num--);
    }
} 
