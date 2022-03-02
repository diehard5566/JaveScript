// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), 
// and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

// Examples

const generation = (num, str) => {
    // let great = -3;
    // let grand = -2
    // let ther = -1;
    // let Me = 0
    // let des = 1;
    // let des2 = 2;
    // let des3 = 3;
    // let gen = {
    //     great: {"m": "great grandfather", "f": "great grandmother"},
    //     grand: {"m": "grandfather", "f": "grandmother"},
    //     ther: {"m": "father", "f": "mother"},
    //     Me: "me!",
    //     des: {"m": "son", "f": "daughter"},
    //     des2: {"m": "grandson", "f": "granddaughter"},
    //     des3: {"m": "great grandson", "f": "great granddaughter"}

    // }

    // switch (num){
    //     case -3:
    //         return gen.great[str];
    //         break;
    //     case -2:
    //         return gen.grand[str];
    //         break;
    //     case -1:
    //         return gen.ther[str];
    //         break;
    //     case 0:
    //         return gen.Me;
    //         break;
    //     case 1:
    //         return gen.des[str];
    //         break;
    //     case 2:
    //         return gen.des2[str];
    //         break;
    //     case 3:
    //         return gen.des3[str];
    //         break;
    // }
    
    let gen = {
        "-3": {"m": "great grandfather", "f": "great grandmother"},
        "-2": {"m": "grandfather", "f": "grandmother"},
        "-1": {"m": "father", "f": "mother"},
        "0": "me!",
        "1": {"m": "son", "f": "daughter"},
        "2": {"m": "grandson", "f": "granddaughter"},
        "3": {"m": "great grandson", "f": "great granddaughter"}
    }

    console.log(gen[num][str]);
}

console.log(generation(2, "f")) // "granddaughter"

generation(-3, "m") // "great grandfather"

generation(1, "f") // "daughter"