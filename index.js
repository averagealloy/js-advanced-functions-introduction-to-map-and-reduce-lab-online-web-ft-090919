// Your code here


function mapToNegativize(src) {
    let a = []
    for(let i = 0; i < src.length; i++){
        a.push(-1*src[i])
    }
    return a 
}


function mapToNoChange(src) {
    let a = []
    for(let i = 0; i < src.length; i++){
        a.push(src[i])
    }
    return a 
}


function mapToDouble(src) {
    let a = []
    for(let i = 0; i < src.length; i++){
        a.push(2*src[i])
    }
    return a 
}

function mapToSquare(src) {
    let a = []
    for(let i = 0; i < src.length; i++){
        a.push(src[i] * src[i])
    }
    return a 
}

function reduceToTotal(src, begin=0){
    let total = begin 
    for (let i = 0; i < src.length; i++){
        total = total + src[i]
    }
    return total
} 

function reduceToAllTrue(src){
    for (let i = 0; i < src.length; i++) {
        if (!src[i]) return false
    }
    return true 
}

function reduceToAnyTrue(src){
    for (let i = 0; i < src.length; i++) {
        if (src[i]) return true
    }
    return false
}


