let str = 'Elwvim yickgltizkjc rh jvznroc xzhvw lm ezgjvezgryzo gjvlic zmw ylekfgvi hyrvmyv kizygryv yickgltizkjry zotlirgjeh ziv wvhrtmvw zilfmw ylekfgzgrlmzo jziwmvhh zhhfekgrlmh ezprmt hfyj zotlirgjeh jziw gl xivzp rm kizygryv xc zmc zwnvihzic Rg rh gjvlivgryzooc klhhrxov gl xivzp hfyj z hchgve xfg rg rh rmuvzhrxov gl wl hl xc zmc pmldm kizygryzo evzmh Gjvhv hyjvevh ziv gjvivuliv gvievw ylekfgzgrlmzooc hvyfiv gjvlivgryzo zwnzmyvh zmw uzhgvi ylekfgrmt gvyjmloltc ivsfriv gjvhv hlofgrlmh gl xv ylmgrmfzooc zwzkgvw Gjviv vbrhg rmuliezgrlmgjvlivgryzooc hvyfiv hyjvevh gjzg kilnzxoc yzmmlg xv xilpvm vnvm drgj fmorergvw ylekfgrmt kldvizm vbzekov rh gjv lmvgrev kzwxfg gjvhv hyjvevh ziv eliv wruuryfog gl rekovevmg gjzm gjv xvhg gjvlivgryzooc xivzpzxov xfg ylekfgzgrlmzooc hvyfiv evyjzmrheh';

function shiftString(str, shift) {
    let array = str.toLowerCase().split('');
    let aCharCode = 'a'.charCodeAt(0);
    let zCharCode = 'z'.charCodeAt(0);
    for(var i = 0; i < array.length; i++) {
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
    for(var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        occurences[String.fromCharCode(i)] = 0;
    }
    let array = str.toLowerCase().split('');
    for(var i = 0; i < array.length; i++) {
        if(/^[a-z]*$/.test(array[i])) {
            occurences[array[i]] += 1;
        }
    }
    return occurences;
}

function calculateLetterFrequencies(str) {
    let frequencies = {};
    let occurences = calculateLetterOccurrences(str);
    for(var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        let char = String.fromCharCode(i);
        frequencies[char] = occurences[char] / str.length;
    }
    return frequencies;
}

function calculateMean(array) {
    let sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function calculateStandardDeviation(array) {
    let mean = calculateMean(array);
    let sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += Math.pow(array[i] - mean, 2);
    }
    return Math.sqrt(sum / array.length);
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
    console.log(calculateStandardDeviation(frequencyValues));
}
