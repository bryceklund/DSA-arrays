//5. URLify a string
function URLify(input) {
    input.split(' ').join('%20')
}

//6. Filtering an array
function arrFilter(input) {
    const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const resultArr = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 5) {
            resultArr.push(input[i])
        }
    }
    return resultArr
}

//7. Max sum in an array
function maxSum(input) {
    const results = []
    input.forEach((v, i) => {
        if (i === 0) {
            results.push(v)
        } else {
          results.push(v + results[i - 1])
        }
    })
    results.sort((a, b) => b - a)
    return results[0]
}

//8. Merge sorted arrays
function merge(a, b) {
    return a.push(b).sort()
}

//9. Remove characters
function removeChars(input, filter) {
    const split = []
    const splitFilter = []
    const resultArr = []
    let resultStr = ''
    for (let i = 0; i < input.length; i++) {
        split.push(input[i])
    }
    for (let i = 0; i < filter.length; i++) {
        splitFilter.push(filter[i])
    }
    split.forEach((l, i) => {
        splitFilter.forEach((f, j) => {
            if (l !== f) {
                resultArr.push(l)
            }
        })
    })
    resultArr.forEach(w => resultStr += w)
    return resultStr
}

//10. Products
function products(input) {
    const res = []
    input.forEach((n, i) => {
        input.forEach((d, j) => {
            if (j !== i) {
                res.push(d *= n)
            }
        })
    })
    return res
}

//11. 2D array
function tda(arr) {
    arr.forEach((a, i) => {
        a.forEach((n, j) => {
            if (n === 0) {
                //set stuff to 0
            }
        })
    })
}

//12. Absolutely not. Goodbye!