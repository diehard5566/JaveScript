const f = n => {
    // let n1 = 1;
    // let n2 = 1;
    // let f;

    // for (i = 2; i < n; i++){
    //     f = n1 + n2;
    //     n1 = n2;
    //     n2 = f
    // }return f
    const result = [0, 1];
    for (i = 2; i <= n; i++) {
        const a = result[i - 1];//倒數第一個數
        const b = result[i - 2];//倒數第二個數

        result.push(a + b);       
    }
    return result//result[result.length - 1]//整個序列 /最後一個數
}

console.log(f(6));