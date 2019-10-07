let findWord = () => {
    let input = document.getElementById('inp').value.toLowerCase();
    input = input.match(/[a-z]/g);
    
    let findSameLetter = (inp) => {           // find same letters
        let str = inp[0];
        for(let i = 0; i < inp.length && str[i] === str[0]; i++){
            let j = i + 1;
            if(inp[i] === inp[j]){
              str = str + inp[i];
              j = j + 1;
            } else return str;    
        }
    };

    let intermediateResult= ''; // intermediate result
    let result = ''; // overall result
    result = result + findSameLetter(input); 
    let resultForSameLetters = findSameLetter(input); // write result function call

    let checkLength = (intermediateResult, resultForSameLetters) => {
        if(resultForSameLetters.length%2 !== 0) {
            intermediateResult += resultForSameLetters[0];
        }
        return intermediateResult;
    };

    intermediateResult =  checkLength(intermediateResult, resultForSameLetters);

    for(let i = result.length + 1; i < input.length; i++){
        if(result.length < input.length){
            let newStr = input.slice(result.length);
            result = result + findSameLetter(newStr);
            resultForSameLetters = findSameLetter(newStr);
            intermediateResult = checkLength(intermediateResult, resultForSameLetters);
        }
    }

    let text = document.getElementById('text');
    return text.value = intermediateResult;
};
