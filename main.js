// for(let i=1;i<=5;i++)
// {
// 	for(let j=5;j>i;j--)
// 	{
// 		document.write("&nbsp;&nbsp;");
// 	}
//         for(let j=1;j<=i;j++)
//         {
//             document.write(j);
            
//         }
//             for(let k=1;k<=i;k++)
//             {
//                 document.write(k);
                
//             }
// 	 document.write("<br>");
// }


// ABC pattern

// for(i=65;i<=69;i++){
// for(j=65;j<=i;j++){
//   document.write("&nbsp;")
//   document.write(String.fromCharCode(j))
// }
// document.write("<br>")
// }

// for(i=1;i<=5;i++){
//   for(j=1;j<=(5-i);j++){
//     document.write("&nbsp;")
//   }
//   for(k=1;k<=i;k++){
//     document.write(i)
//   }
//   document.write("<br>")
// }




function start(){
	setId=setInterval(function(){
		let date=new Date()
		// console.log(date);
		let time=date.toLocaleTimeString();
		// console.log(time);
		document.getElementById("timer").innerHTML=time
	},1000)
}

function stop(){
	clearInterval(setId)
}

function delay(){
	timeId=setTimeout(function(){
		alert("Hi iam delay")
	},2000)
}

function delaystop(){
	setTimeout(function(){
		alert("delay stop")
	},5000)
	
}





