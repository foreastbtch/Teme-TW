const distance = (a, b) => {
    if ((typeof a !== "string" && typeof a !== "String") || (typeof b !== "string" && typeof b !== "String")) {
        // throw new Error('Unul din parametri nu este de tip string!');
        throw Error('InvalidType');
    }
    if (a === "" || b === "") {
        return 0;
    }
    let A = b.length + 1;
    let B = a.length + 1;
    let M = new Array(A);
    for (let i = 0; i < A; i++) {
        M[i] = new Array(B);
    }
    for (let i = 0; i < A; i++) {
        for (let j = 0; j < B; j++) {
            if (i == 0 || j == 0) {
                M[i][j] = Math.max(i, j);
            } else {
                M[i][j] = 0;
            }
        }
    }
    for (let i = 1; i < A; i++) {
        for (let j = 1; j < B; j++) {
            if (b[i - 1] != a[j - 1]) {
                M[i][j] = Math.min(M[i - 1][j - 1], M[i - 1][j], M[i][j - 1]) + 1;
            } else {
                M[i][j] = Math.min(M[i - 1][j - 1], M[i - 1][j], M[i][j - 1]);
            }
        }
    }
    // console.log(M);
    // console.log("Costul este: " + M[A - 1][B - 1]);
    return M[A - 1][B - 1];
}

// distance("pisic", "caine");
// distance("benyam", "ephrem");
// distance(1, 2);
console.log(distance("cat", "rat"));

module.exports.distance = distance