// 1-using + operator combine your partner first and last name .
function fuliName(str1,str2){
	return str1 + " " + str2;
}
// 2-find if the number 13 is a multiple of 3 or not.
function multiple(nam1,nam2){
	if(nam1%nam2===0){
		return nam1 + " is a multiple of" + " " + nam2;
	}
	return nam1 +  " is not a multiple of " + " " + nam2;
}
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function sum(arr){
	var total= 0;
	for (i=0; i<arr.length ; i++){
		total= total + arr[i];
	}
	return total ;
}
function  average (arr){
   for( i=0; i<arr.length; i++){
   	sum(arr)/(arr.length-1);
   }

	
}

// 4-calculate your age in seconds.
function age(number){
	return number*365*24*3600;
}

// your code is here
