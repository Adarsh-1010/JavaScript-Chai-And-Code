console.log(2>1);
console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log("2">1)
// Type Coercion:
// When comparing a string with a number, JavaScript attempts to convert the string to a number.
// In this case, the string "2" is converted to the number 2.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0)

// 1. console.log(null > 0);
// Operation: This uses the > (greater than) comparison.
// Type Coercion: When null is compared to a number using relational operators (>, <, >=, <=), JavaScript converts null to a number. The numeric value of null is 0.
// Comparison: The expression becomes 0 > 0.
// Result: Since 0 is not greater than 0, this evaluates to false.
// Output: false
// 2. console.log(null == 0);
// Operation: This uses the == (equality) comparison.
// Type Coercion: The == operator performs type coercion but treats null and undefined as special cases. Specifically, null is only loosely equal to undefined and no other value.
// Comparison: Since null is not equal to 0 (or any other number), this evaluates to false.
// Output: false
// 3. console.log(null >= 0);
// Operation: This uses the >= (greater than or equal to) comparison.
// Type Coercion: Similar to the first case, null is converted to 0 when using relational operators.
// Comparison: The expression becomes 0 >= 0.
// Result: Since 0 is indeed greater than or equal to 0, this evaluates to true.
// Output: true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// 1. console.log(undefined == 0);
// Operation: This uses the == (loose equality) operator.
// Type Coercion: The == operator performs type coercion but has specific rules for comparing undefined and null.
// Comparison: undefined is only loosely equal to null and not to any other value, including 0.
// Result: Since undefined is not equal to 0, this evaluates to false.
// Output: false
// 2. console.log(undefined > 0);
// Operation: This uses the > (greater than) relational operator.
// Type Coercion: When comparing undefined with a number using relational operators (>, <, >=, <=), JavaScript tries to convert undefined to a number. The numeric value of undefined is NaN (Not-a-Number).
// Comparison: Comparing any value with NaN using relational operators results in false.
// Result: Since undefined is effectively NaN in this comparison, undefined > 0 evaluates to false.
// Output: false
// 3. console.log(undefined < 0);
// Operation: This uses the < (less than) relational operator.
// Type Coercion: Similar to the previous comparison, undefined is converted to NaN when used with relational operators.
// Comparison: NaN is not a valid number for comparison with other numeric values, so any comparison involving NaN will be false.
// Result: Since undefined is NaN, undefined < 0 evaluates to false.
// Output: false

console.log("2" ==2);

console.log("2" ===2);

// == (Loose Equality)
// Type Coercion: The == operator compares two values for equality after converting both values to a common type. This process is known as type coercion.
// Example:
// javascript
// Copy code
// 5 == '5';  // true
// In this example, the string '5' is converted to the number 5 before the comparison, so the result is true.
// === (Strict Equality)
// No Type Coercion: The === operator compares two values for equality without converting them to a common type. It checks both the value and the type.
// Example:
// javascript
// Copy code
// 5 === '5';  // false
// Here, the comparison is between a number (5) and a string ('5'), and since their types are different, the result is false.


























