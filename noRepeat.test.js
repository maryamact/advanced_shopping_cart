function noRepeatChar(str)
{
    let charArr = str.split("");
    let noRepeatArr = [];
    for (let i = 0; i < charArr.length; i++) {
        const element = charArr[i].localeCompare(charArr[i + 1]);
        if (element != 0)
        {
            noRepeatArr.push(charArr[i]);
        }
    }
    return noRepeatArr;
}
console.log(noRepeatChar("ABCDDDEFGH"));
