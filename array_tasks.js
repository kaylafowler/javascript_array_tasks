var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	 },

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	 },

	square: function (arr) {
		let result = arr.map(i => i * i);
		return result;
	},

	// square: function (arr){
	// 	return arr.map(function(number){
	// 		return number * number
	// 	})
	// },


	sum: function (arr) {
	let sum = arr.reduce(function(a, b) { return a + b; }, 0);
	return sum;
},

// return arr.reduce(function(total, number){
// 	return number + total
// })


	findDuplicates: function (arr) {
		const sortedArr = arr.slice().sort();
		let results = [];
		for (var i = 0; i < sortedArr.length - 1; i++){
			if(sortedArr[i + 1] == sortedArr[i]){
				results.push(sortedArr[i])
			}
		}
		const uniqueResults = Array.from(new Set(results));
		return uniqueResults;
	},


// findDuplicates: function(arr){
// 	return arr.filter(function(item, i){
// 		var restOfArrayIncludesItem = arr.slice(i + 1).includes(item)
// 		var isFirstInstanceOfItem = arr.indexOf(item) === i
// 		return restOfArrayIncludesItem && isFirstInstanceOfItem
// 	})
// },


// hashrocket is actually a fuction under the hood
	removeAndClone: function (arr, valueToRemove) {
		const result = arr.filter(item => item != valueToRemove);
		return result;
	},


	findIndexesOf: function (arr, itemToFind) {
		let indexes = [], i = -1;
		//The .indexOf() method has an optional second parameter that specifies the index to start searching from
			while((i = arr.indexOf(itemToFind, i+1)) != -1){
				indexes.push(i);
			}
			return indexes;
	},

// findIndexesOf: function (arr, itemTOFind) {
// 	var results = []
// 	arr.forEach(function(item, index){
// 		if (item  === itemToFind){
// 			results.push(index)
// 		}
// 	})
// 	return results
// },

	sumOfAllEvenNumbersSquared: function (arr) {
		let evenNums = [];
		for(i in arr){
			if(i % 2 === 0){
				evenNums.push(i * i);
			}
		}
		return evenNums.reduce(function(a,b) {return a + b;}, 0);
	},
}


// return arr.reduce(function(total,number){
// 	if(number % 2 === 0) {
// 		return total + math.pow(number, 2)
// 	}
// 	return total
// },0)



module.exports = arrayTasks
