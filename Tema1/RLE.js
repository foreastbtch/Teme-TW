// AAAABBBCCCDEE => 4A3B3C1D2E
// AAAAAAA = > 7A
// AAABBC => 3A2BC
function rle(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let j = i + 1;
    let nr = 1;
    while (text[i] === text[j]) {
      j++;
      nr++;
    }
    if (nr > 1) {
      result += nr.toString();
    }
    result += text[i];
    i = j - 1;
  }
  return result;
}

let exemplu = "AAABBC";
let exemplu2 = "AAAAAAAAAAAAAHHHEEM";
let exemplu3 = "AAAAHHHEEM, HAHA";
// 19 chars => 7 chars
console.log(rle(exemplu));
console.log(rle(exemplu2));
console.log(rle(exemplu3));
