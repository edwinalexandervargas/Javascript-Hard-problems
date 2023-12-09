// question 1 show rating 
// given a rating, display a (*) for each full rating and a full-stop(.) for each half rating 
// showRating(4.5) -> "****."

// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < rating; ++i) {
//         ratings = ratings + "*"
//         if (i !== rating - 1) {
//             ratings = ratings + " "
//         }
//     }
//     return ratings;
// }

// console.log(showRating(4));

// **half star

// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings += "*"
//         if (i !== Math.floor(rating) - 1) {
//             ratings += " ";
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings += " .";
//     }
//     return ratings;
// }

// console.log(showRating(4.5))



// question 2 Sort by lowest to highest price 
// given an array of numbers, return the prices sorted low to highest
// sortLowToHigh([20, 40, 10, 30, 50, 10]) 

// function sortLowToHigh(numbers) {
//     return numbers.sort((a, b) => a - b)
// }

// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));


// question 3 sort by highest to lowest price 
// given an array of objects, return the prices sorted by high to lowest
// sortHighToLow([
//     { id: 1, price: 50},
//     { id: 2, price: 30}, 
//     { id: 3, price: 60},
//     { id: 4, price: 10},
// ])

// function sortHighToLow(price) {
//     return price.sort((a, b) => b.price - a.price)
// }

// console.log(
//     sortHighToLow([
//     { id: 1, price: 50},
//     { id: 2, price: 30}, 
//     { id: 3, price: 60},
//     { id: 4, price: 10},
//     ])
// )





