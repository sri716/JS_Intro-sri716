exports.SumOfArray = function(arrayOfNums){
	var sum = 0, length = arrayOfNums.length;
	for(var index = 0;index< length; index++){
		sum = sum+arrayOfNums[index];
	}
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum = 0,length = arrayOfNums.length;
	var arr_unique_elements = new Array();
	for(var index=0;index<length;index++){
		if(!arr_unique_elements.includes(arrayOfNums[index]){
			arr_unique_elements.push(arrayOfNums[index]);
		}
	}
	length = arr_unique_elements.length;
	for(var index=0;index<length;index++){
		sum = sum+arr_unique_elements[index];
	}
	return sum;
}

//2-D array exercises
// Given a 2-d array, verify it is of equal dimensions and return
// the sum of diagonal elements.
function isSquare(array2d){
	var length = array2d.length;
	for(var index=0; index<length; index ++){
		if(array2d[index].length != length){
			return false;
		}
	}
	return true;
}
exports.SumOfDiagonalCells = function(array2d){
	var sum = 0, length = array2d.length;
	if(isSquare(array2d)){
		for(var index=0;index<length;index++){
			sum = sum + array2d[index][index];
		}
	}
	return sum;
}
