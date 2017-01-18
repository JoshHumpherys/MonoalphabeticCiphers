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

function main() {
    for(var i = 1; i < 26; i++) {
        console.log(shiftString(str, i));
        console.log('-----------------------------------------------------------');
        console.log(reverseString(shiftString(str, i)));
        console.log('-----------------------------------------------------------');
    }
}
