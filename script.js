function highlight() {
    //Write your code here
	let ele = document.getElementsByTagName("strong")
for(let i = 0; i < ele.length; i++){
	ele[i].style.color = "green";
}

}


function return_normal() {
    //Write your code here
	let ele = document.getElementsByTagName("strong")
for(let i = 0; i < ele.length; i++){
	ele[i].style.color = "black";
}
    
}
