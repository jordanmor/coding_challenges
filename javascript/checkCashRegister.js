// Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"

// ***** Exact Change *****

/* 
Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/


// Solution #1
function checkCashRegister(price, cash, cid) {
  // const denominations = [0.01, 0.05, 0.10, 0.25, 0.50, 1, 5, 10, 20, 100]
  const denominations = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]; // Multiplied by 100
  let change = (cash * 100) - (price * 100); 
  let allCash = true;

  let moneyBack = cid.reduceRight((prev, curr, index) => {
      let out = Math.min(change - (change % denominations[index]), curr[1] * 100);
      change -= out;
      if (out !== curr[1] * 100) { allCash = false; }

      return out ? prev.concat( [[curr[0], out / 100]] ) : prev;

    },[]);

  return change > 0 ? "Insufficient Funds" : allCash ? "Closed" : moneyBack;
}

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

/*
Return :
[
  [ 'TWENTY', 60 ],
  [ 'TEN', 20 ],
  [ 'FIVE', 15 ],
  [ 'ONE', 1 ],
  [ 'QUARTER', 0.5 ],
  [ 'DIME', 0.2 ],
  [ 'PENNY', 0.04 ]
]
*/

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function checkCashRegister2(price, cash, cid) {

  const denominations = [
    {name: 'ONE HUNDRED', value: 100},
    {name: 'TWENTY', value: 20},
    {name: 'TEN', value: 10},
    {name: 'FIVE', value: 5},
    {name: 'ONE', value: 1},
    {name: 'QUARTER', value: 0.25},
    {name: 'DIME', value: 0.10},
    {name: 'NICKEL', value: 0.05},
    {name: 'PENNY', value: 0.01}
  ];

  let change = +(cash - price).toFixed(2);

  const register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc.total = +acc.total.toFixed(2);
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  const returnChange = denominations.reduce((acc, curr) => {
    let value = 0;
    while(register[curr.name] > 0 && change >= curr.value) {
      change -= curr.value;
      register[curr.name] -= curr.value;
      value += curr.value;

      change = Math.round(change * 100) / 100;
    }

    if(value > 0) {
      acc.push([curr.name, value]);
    }

    return acc;

  }, []);

  if (register.total < change) {
    return "Insufficient Funds";
  } else if(register.total === change) {
    return "Closed";
  } else {
    return returnChange;
  }

}

