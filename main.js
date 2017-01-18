let str = 'Elwvim yickgltizkjc rh jvznroc xzhvw lm ezgjvezgryzo gjvlic zmw ylekfgvi hyrvmyv kizygryv yickgltizkjry zotlirgjeh ziv wvhrtmvw zilfmw ylekfgzgrlmzo jziwmvhh zhhfekgrlmh ezprmt hfyj zotlirgjeh jziw gl xivzp rm kizygryv xc zmc zwnvihzic Rg rh gjvlivgryzooc klhhrxov gl xivzp hfyj z hchgve xfg rg rh rmuvzhrxov gl wl hl xc zmc pmldm kizygryzo evzmh Gjvhv hyjvevh ziv gjvivuliv gvievw ylekfgzgrlmzooc hvyfiv gjvlivgryzo zwnzmyvh zmw uzhgvi ylekfgrmt gvyjmloltc ivsfriv gjvhv hlofgrlmh gl xv ylmgrmfzooc zwzkgvw Gjviv vbrhg rmuliezgrlmgjvlivgryzooc hvyfiv hyjvevh gjzg kilnzxoc yzmmlg xv xilpvm vnvm drgj fmorergvw ylekfgrmt kldvizm vbzekov rh gjv lmvgrev kzwxfg gjvhv hyjvevh ziv eliv wruuryfog gl rekovevmg gjzm gjv xvhg gjvlivgryzooc xivzpzxov xfg ylekfgzgrlmzooc hvyfiv evyjzmrheh';
let englishFrequencies = [0.08167,0.01492,0.02782,0.04253,0.12702,0.0228,0.02015,0.06094,0.06966,0.00153,0.00772,0.04025,0.02406,0.06749,0.07507,0.01929,0.00095,0.05987,0.06327,0.09056,0.02758,0.00978,0.02360,0.00150,0.01974,0.00074];
let englishLetterOrdering = 'etaoinshrdlcumwfgypbvkjxqz';
let englishLetterOrderingArray = englishLetterOrdering.split('');

function shiftString(str, shift) {
    let array = str.toLowerCase().split('');
    let aCharCode = 'a'.charCodeAt(0);
    let zCharCode = 'z'.charCodeAt(0);
    for(let i = 0; i < array.length; i++) {
        if(/^[a-z]*$/.test(array[i])) {
            array[i] = (array[i].charCodeAt(0) + shift);
            if(array[i] > zCharCode) {
                array[i] -= 26;
            }
            array[i] = String.fromCharCode(array[i]);
        }
    }
    return array.join('');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function calculateLetterOccurrences(str) {
    let occurences = {};
    for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        occurences[String.fromCharCode(i)] = 0;
    }
    let array = str.toLowerCase().split('');
    for(let i = 0; i < array.length; i++) {
        if(/^[a-z]*$/.test(array[i])) {
            occurences[array[i]] += 1;
        }
    }
    return occurences;
}

function calculateLetterFrequencies(str) {
    let frequencies = {};
    let occurences = calculateLetterOccurrences(str);
    for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        let char = String.fromCharCode(i);
        frequencies[char] = occurences[char] / str.length;
    }
    return frequencies;
}

function calculateMean(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function calculateStandardDeviation(array) {
    let mean = calculateMean(array);
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i] - mean, 2);
    }
    return Math.sqrt(sum / array.length);
}

function calculateOrdering(array) {
    let ordering = [];
    for(let i = 0; i < array.length; i++) {
        let largestValue = -1;
        let largestIndex = -1;
        for(let j = 0; j < array.length; j++) {
            if(array[j] > largestValue) {
                largestValue = array[j];
                largestIndex = j;
            }
        }
        ordering[largestIndex] = i;
        array[largestIndex] = -1;
    }
    return ordering;
}

function reorderLetters(str, ordering) {
    let array = str.toLowerCase().split('');
    let aCharCode = 'a'.charCodeAt(0);
    for(let i = 0; i < array.length; i++) {
        if(/^[a-z]*$/.test(array[i])) {
            array[i] = englishLetterOrderingArray[ordering[array[i].charCodeAt(0) - aCharCode]];
        }
    }
    return array.join('');
}

function main() {
    // for(var i = 1; i < 26; i++) {
    //     console.log(shiftString(str, i));
    //     console.log('-----------------------------------------------------------');
    //     console.log(reverseString(shiftString(str, i)));
    //     console.log('-----------------------------------------------------------');
    // }
    let frequencies = calculateLetterFrequencies(str);
    // let frequencyValues = Object.values(frequencies);
    let frequencyValues = Object.keys(frequencies).map(function(key) {
        return frequencies[key];
    });
    // console.log(calculateStandardDeviation(frequencyValues));
    let ordering = calculateOrdering(frequencyValues);
    // console.log(ordering);
    console.log(reorderLetters(str, ordering));
    // console.log(frequencies);
}
