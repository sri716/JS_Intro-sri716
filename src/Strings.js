exports.ReverseString = function(str){
	if(str){
		str = str.split('');
		var temp;
		for(var index = 0,index_back=(str.length)-1;index<=index_back;index++,index_back--){
			temp = str[index];
			str[index] = str[index_back];
			str[index_back] = temp;
		}
		str=str.join("");
	}
	return str;
}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]
function firstName(name){
	if(name){
		var index_comma = name.indexOf(',');
		var name = name.slice(index_comma+1);
	}
	return name;
}
exports.GetFirstNames = function(str){
	if(str){
		var arr_first_name=[];
		str = str.split(";");
		if(str){
			var length = str.length;
			for(var index=0;index<length;index++){
				if(str[index]){
					arr_first_name.push(firstName(str[index]));
				}
			}
		}
		return arr_first_name;
	}
	return str;
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
	if(arrayOfStrings){
		var length = arrayOfStrings.length;
		var paragraph="";
		for(var index =0;index<length;index++){
			paragraph += arrayOfStrings[index]+".";
		}
		return paragraph;
	}
}

