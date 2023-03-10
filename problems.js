const addToZero = arr => {
    for(let i = 0; i < arr.length; i++){
    for(let j =0; j < arr.length; j++){
        let iValue =arr[i]
        let jValue =arr[j]
        if(iValue + jValue === 0){
            return true
        }
    }
    }
    return false
}

//O(n^2) time complexity
//O(1) space complexity


const hasUniqueChars = str => {
    for (let i=0; i<str.length; i++){
        for(let j = i +1; j <str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true

}

//O(n^2) time complexity
//O(1) space complexity

const isPanagram = str => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < str.length; i++){
        if(alphabet.includes(str[i])){
            let plz = alphabet.indexOf(str[i])
            alphabet.splice(plz,1)
        }
        if(alphabet.length === 0){
            return true
        }
    }
    return false
}
console.log(isPanagram('A quick brown fox jumps over the lazy dog'))

//O(n) time complexity
//O(1) space complexity

const findLongestWord = (arr) => {
    let long = 0
    for(let i =0; i<arr.length; i++){
        if(arr[i].length > long){
            long = arr[i].length
        }
    }
    return long
}
console.log(findLongestWord(['hi', 'hello']))

//O(n) time complexity
//O(1) space complexity
