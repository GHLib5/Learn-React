const square = function (x) {
    return x * x;
}

console.log(square(4));

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;
console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Ghalib Nugroho'));