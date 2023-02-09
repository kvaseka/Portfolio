function calculate(sum, quantity, promo = null) {
  let result = sum;
  if (promo === 'ДАРИМ300' && sum < 300) {
    result = 0;
  } else if (promo === 'ДАРИМ300') {
    result = sum - 300;
  }
  if (quantity >= 10) {
    result *= 0.95;
  }
  if (result > 50000) {
    result -= (result - 50000) * 0.2;
  }
  if (promo === 'СКИДКА15' && result >= 20000) {
    result *= 0.85;
  }
  return result;
}
calculate(1000000, 10, 'СКИДКА15');

export default calculate;
