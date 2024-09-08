
//write your code here
// return the min cost
	function mincost(arr) {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);
  
    // Step 2: Initialize totalCost to 0
    let totalCost = 0;
  
    // Step 3: While the array has more than one element
    while (arr.length > 1) {
        // Remove the first two elements from the array
        let cost = arr.shift() + arr.shift();
      
        // Add this cost to totalCost
        totalCost += cost;
      
        // Insert this new rope back into the array in its proper place
        let idx = arr.findIndex(el => el >= cost);
        if (idx === -1) {
            arr.push(cost);
        } else {
            arr.splice(idx, 0, cost);
        }
    }
  
    // Step 4: Return totalCost
    return totalCost;
}

  
}

module.exports=mincost;
