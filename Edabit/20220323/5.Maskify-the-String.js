// Usually when you sign up for an account to buy something, your credit card number,
// phone number or answer to a secret question is partially obscured in some way.
// Since someone could look over your shoulder, you don't want that shown on your screen.
//  Hence, the website masks these strings.

// Your task is to create a function that takes a string,
// transforms all but the last four characters into "#" and returns the new masked string.

const maskify = (str) => {
  let last = str.substr(-4);
  let pre = str.substr(0, str.length - 4);
  let new1 = "";
  for (let i = 0; i < pre.length; i++) {
    new1 += "#";
  }
  return new1 + last;

  //return str.length > 4 ? '#'.repeat(str.length - 4) + str.substr(str.length - 4) : str; sorter ans
};

maskify("4556364607935616"); // "############5616"

maskify("64607935616"); // "#######5616"

maskify("1"); // "1"

maskify(""); // ""

maskify("12345");
