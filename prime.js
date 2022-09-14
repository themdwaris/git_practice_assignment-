let num = 11;
let result = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        result = false;
    }
}
console.log(result);
