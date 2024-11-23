
async function factor(n) {
    if (n === 0) { return 1; }
    let result = n;
    for (i = 1; i < n; i++) {
        result *= n-i;
    }
    return result;
}

async function main() {
     console.log(factor(process.argv[2]));

}
main();