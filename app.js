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


// function sortHighToLow(arr){
//     return arr.sort((a , b) => b.price - a.price)
// }

// console.log(sortHighToLow([
//     { id: 1, price: 50},
//     { id: 2, price: 30}, 
//     { id: 3, price: 60},
//     { id: 4, price: 10},
// ]))







// ** before Async Await **//
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// });

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife: I have tics');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: I got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter in my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// });

// getButter.then((t) => console.log(t));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');





// ******************************




// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async () => {

// const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve('ticket'), 3000);
// });

// const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
// const addButter = new Promise((resolve, reject) => resolve(`butter`));

// let ticket = await promiseWifeBringingTicks;

//     console.log(`wife: I have ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');

// let popcorn = await getPopcorn;

//     console.log(`husband: I got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: I need butter in my popcorn');

// let butter = await addButter;

//     console.log(`husband: I got some ${butter} on popcorn`);
//     console.log('husband: anything else?');

// return ticket;
// }

// preMovie().then((m) => console.log(`person3: shows ${m}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');



// **********************************
// All promises activate at once 

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async () => {

// const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve('ticket'), 3000);
// });

// const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
// const getCandy = new Promise((resolve, reject) => resolve(`candy`));
// const getCoke = new Promise((resolve, reject) => resolve(`coke`));

// let ticket = await promiseWifeBringingTicks;
// let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke])

// console.log(`${popcorn},${candy},${coke}`)
// return ticket;
// }

// preMovie().then((m) => console.log(`person3: shows ${m}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


//*************************************************

const testUserFrom = async () => {

    const loadUserForm = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('page loaded'), 3000);
    });

    const enterUsername = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('user entered'), 3000);
    });

    const verifyUserDetails = () => {

    }

    await loadedUserForm;
    await enterUserName;
    verifiedUserDetails();

return testResult;
}

