// let add = (a, b) => {
//     console.log(2 * a)
//     return (a + b)
// }


function add(a, b) {
    console.log(2 * a)
    return (a + b)
}

function mul(a, b) {
    console.log(2 * a)
    return (a * b)
}

module.exports.add = add;
module.exports.mul = mul;