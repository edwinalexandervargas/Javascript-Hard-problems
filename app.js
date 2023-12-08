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

function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*"
        if (i !== Math.floor(rating) - 1) {
            ratings += " ";
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " .";
    }
    return ratings;
}

console.log(showRating(4.5))


