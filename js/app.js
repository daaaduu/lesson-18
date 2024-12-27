function isMultipleOfFive(number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
  return number % 5 === 0 ? true : false;

  return number % 5 === 0;
}
console.log(isMultipleOfFive(5));
console.log(isMultipleOfFive(9));

function calculateDiscountedPrice(price, discount) {
  const percentage = discount / 100;
  const discountPrice = price * percentage;
  return Math.round(price - discountedPrice);
}

function getCurrencySymbolFromCode(code) {
  const formatedCode = code.toUpperCase();

  switch (code.toUpperCase()) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GEL":
      return "₾";
    default:
      return "Unknown currency code";
  }
}
console.log(getCurrencySymbolFromCode("USd"));
console.log(getCurrencySymbolFromCode("EUR"));

function convertToLowerCase(string) {
  return string.toLowerCase();
}

console.log(convertToLowerCase("MY NAME IS DAVID"));

function filterOddNumbers(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterOddNumbers(numbers));


function getCheapestProduct(products) {
  const cheapestProductFromProducts = products.reduce(
    (cheapestProduct, product)) => 
      +product.price < +cheapestProduct.price ? product : cheapestProduct
    return cheapestProductFromProducts;
}
