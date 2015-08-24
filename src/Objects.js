exports.GetObjectPropertyNames = function(obj) {
	if(obj){
		var property_names = [];
		for(property in obj){
			property_names.push(property);
		}
		return property_names;
	} 
	return obj;
}

exports.GetObjectPropertyValues = function(obj) {
	if(obj){
		var property_values = [];
		for(property in obj){
			property_values.push(obj[property]);
		}
		return property_values;
	}
	return obj;
}

