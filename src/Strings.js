exports.ReverseString = function(str){
	if(str){
		str = str.split('');
		var temp;
		for(var index = 0,index_back=(str.length)-1;index<=index_back;index++,index_back--){
			temp = str[index];
			str[index] = str[index_back];
			str[index_back] = temp;
		}
		str.join('');
	}
	return str;
}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]
function firstName(name){
	var index_comma = name.indexOf(',');
	var first_name = name.substring(index_comma);
	return first_name;
}
exports.GetFirstNames = function(str){
	var length = str.length;
	var arr_first_name = [];
	for(var index=0;index<length;index++){
		arr_first_name.push(firstName(str[index]));
	}
	return arr_first_name;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	var temp;
	for(var index=0,index_last=(arrayOfStrings.length)-1;index<=index_last;index++,index_last--){
		temp = arrayOfStrings[index];
		arrayOfStrings[index]=arrayOfStrings[index_last];
		arrayOfStrings[index_last]=temp;
	}
	return arrayOfStrings;
}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// fullstop (.) after each senetences.
exports.CreateParagraph = function(arrayOfStrings){

}

