/**
 * @function MK
 * @param q {Number} Quantity
 * @param q1 {Number} Quantity - 1
 * @param tk {Number} Totale kost
 * @param tk1 {Number} Totale kost - 1
 * @returns {number}
 * @constructor
 */
function MK (q,q1,tk,tk1) {
 var MK = (tk-tk1)/(q-q1)
 return MK
}


function identity(x) {
 return x
}


// console.log(MK(6,5,25,20))



/**
 days
 var quantity = [100, 110, 105, 111, 90, 100]

 kost 1 per product

 gisteren:
  q: 100
  tk: 100
 vandaag:
  q: 110
  tk: 110

 MK (100, 110, 100, 110)

 kost = eur 75  per dag
 1 eur per product

 **/
console.log('MK', MK (100, 110, 100, 110))

var quantity = [0,5,10,15,20,25,30,35]
var tk  = [10,23,34,44,55,66,80,97]


function tk (kpp,quantity,tck) {
 var tk = ( kpp * quantity)+tck
 return tk
}
var mkList =[]
for (i = 1; i < quantity.length; i++) {
 var m_k = MK(quantity[i],quantity[i-1],tk[i],tk[i-1])
 mkList.push(m_k)
}
console.table(mkList)

var data = quantity.map((x, idx)  => {
 return {
  quantity: x,
  tk: tk[idx]
 }
})

/*
* var data = [
*  {
*   quantity: 0,
*   tk: 10
*  }
* ]
* */
function delen(q,q1,tk,tk1) {
 var para = tk/q
 return para
}

function delen2(q,q1,tk,tk1) {
    var para = q/tk
    return para
}

function generateList (fn,data) {
 let arr = []
 for (i = 1; i < data.length; i++) {
     var m_k = fn(data[i].quantity,data[i-1].quantity,data[i].tk,data[i-1].tk)
     arr.push(m_k)
 }
 return arr
}
var week1 = generateList(MK,data)
console.table(week1)

var week2 = generateList(identity,data)
console.table(week2)

var week3 = generateList(delen,data)
console.table(week3)

var week4 = generateList(delen2,data)
console.table(week4)
