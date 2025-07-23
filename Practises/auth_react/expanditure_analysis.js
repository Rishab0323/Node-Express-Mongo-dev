
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  //my logic to solve
  // let category1 = [];
  // let category2 = [];
  // let totalspent1 = 0;
  // let totalspent2 = 0;
  // for(let i=0;i<transactions.length;i++){
  //   if(transactions[i]["category"] != transactions[i]["category"]){
  //     category1.push(transactions[i]);
  //     totalspent1 = totalspent1 + transactions[i][price];
  //   }
  //   else{
  //     category2.push(transactions[i]);
  //     totalspent2 = totalspent2 + transactions[i][price];
  //   }
  // }
  // return totalspent1
  console.log(transactions);
  const totals = {};
  transactions.forEach((transaction) =>  {
    const {category,price} = transaction;
    if(!totals[category]){
      totals[category] = price;
    }
    else{
      totals[category] += price
    }
  });

  const result = [];
  Object.keys(totals).forEach((category) => {
    result.push({category:category,totalspent:totals[category]})
  });
  return result;
}


transaction =[
  {
    id: 2,
    timestamp: 1273486342,
    price: 20,
    category: 'software',
    itemName: 'anitvirus'
  },{
    id: 2,
    timestamp: 1273486562,
    price: 25,
    category: 'food',
    itemName: 'chaumin'
  },{
    id: 2,
    timestamp: 127335642,
    price: 35,
    category: 'food',
    itemName: 'samosa'
  },{
    id: 2,
    timestamp: 127345442,
    price: 25,
    category: 'software',
    itemName: 'game'
  },
]

console.log(calculateTotalSpentByCategory(transaction));
module.exports = calculateTotalSpentByCategory;
