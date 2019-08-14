/**
 * -- Challenge Instructions --
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having only two divisors, 
 * one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 * The provided number may not be a prime.
 * 
 * Source: freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

function sumPrimes(num) {
  const sieve = [], primes = [];

  for (let i = 2; i <= num; i++) {
      if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          for (let j = i << 1; j <= num; j += i) {
              sieve[j] = true;
          }
      }
  }
  return primes.reduce((a, b) => a + b);
}

console.log(sumPrimes(10)); // 17