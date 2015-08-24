exports.ParseNumber = function(str){
	if(str){
		return Number(str);
	}
}

exports.ConvertNumberToString = function(num){
	var str ="";
	if(typeof(num) == "number" && num){
		str=num.toString();
	}
	return str;
}

exports.ParseDate = function(str){
	if(str){
		var date = new Date(str);
		return date;
	}
}

exports.ConvertDateToString = function(dateValue){
	return dateValue.toDateString();
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
	var nums = [];
	if(typeof(str) === "string"&& str){
		str = str.split(",");
		var length = str.length;
		for(var index=0;index<length;index++){
			nums.push(Number(str[index]));
		}
	}
	return nums;
}

exports.ConvertArrayOfNumbersToString = function(obj){
	var str="";
	if(typeof(obj)== "object" && obj){
		var length = obj.length;
		for(var index=0;index<length;index++){
			if(index)
				str+=",";
			str +=obj[index].toString();
		}
	}
	return str;
}


exports.ConvertStringToObject = function(str){
	try{
		var object = JSON.Stringify(str);
		return object;		
	}
	catch{
	}
}

exports.ConvertObjectToString = function(obj){
	return JSON.stringify(obj);
}


