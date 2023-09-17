let num1 = 0
let num2 = 0

let results

function add(num1, num2) {
    return num1 + num2
}

const subtract = (num1, num2) => num1 - num2


let rootOfSquare = (a, b, c) => {
    let discriminant = Math.pow(b,2) - 4 * a * c
    let root1 = 0
    let root2 = 0

    //outcome 1 - discriminant is more than 0, roots are real and different
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant))/2*a
        root2 = (-b - Math.sqrt(discriminant))/2*a
        console.log ("Root 1 is", root1)
        console.log ("Root 2 is", root2)
    }

    //outcome 2 - discriminant is equal to 0, roots are real and equal
    else if (discriminant == 0) {
        root1 = -b/2*a
        root2 = root1
        console.log ("Root 1 is", root1)
        console.log ("Root 2 is", root2)
    }

    // //outcome 3 - discriminant is less than 0, roots are complex and different
    else {
    let firstPart = -b/(2*a)
    let secondPart = (Math.sqrt(-discriminant)/2*a).toFixed(2);
    console.log(`Root 1 is ${firstPart} + ${secondPart}i`)
    console.log(`Root 2 is ${firstPart} - ${secondPart}i`)

     }
}


