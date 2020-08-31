//event listener runs function upon 'enter' key being pressed
document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        convert();
    }

})

function convert() {

    //reads input box value
    let input = document.getElementById('input-box').value;

    //reads type of conversion
    const conversion = document.getElementById('convert-to-from').value;

    //results div variable
    const resultDiv = document.getElementById('result');

    //number and roman numeral arrays
    const rnArr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    const numArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    //empty array values for conversions
    let converted = [];

    //regular expression checks for text
    const aZRegex = /[a-z]/ig;

    //regular expression checks for valid roman numerals
    const romanRegex = /^M{0,3}(?:CM|CD|D?C{0,3})(?:XC|XL|L?X{0,3})(?:IX|IV|V?I{0,3})$/g;
    const convertRomanNumerals = /M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I/g;

    //if input is empty
    if (!input) {
        result.innerHTML = 'What do you want converted?';

        //Numbers to roman numerals converter
    } else if (conversion === 'numbers to roman numerals') {


        //checks for decimal numbers
        if (input % 1 !== 0) {
            result.innerHTML = 'Whole Numbers Only Please';

            //runs if input does not contains letters
        } else if (!aZRegex.test(input)) {

            //converts input into a number
            input = parseInt(input);

            //num variable used for while loop
            let num = numArr.length - 1;

            //while loop reduces input number and adds roman numeral to 'converted' array variable
            while (input > 0) {
                //pushes value into converted array, subtracts input varibale and resets num variable
                if (input - numArr[num] >= 0) {
                    converted.push(rnArr[num]);
                    input -= numArr[num];
                    num = numArr.length - 1;
                } else {
                    //decement num variable
                    num--;
                }
            }

            //display result
            result.innerHTML = converted.join('');

        }

        //Roman numerals to numbers
    } else if (conversion === 'roman numerals to numbers') {

        //converts input to upper case
        input = input.toUpperCase();

        //runs if valid roman numerals
        if (romanRegex.test(input)) {

            //resNum variable is incremented by the equivalent roman numeral numerical value
            let resNum = 0;

            //looks for roman numerals and adds each value to resNum variable
            input.match(convertRomanNumerals).forEach(cur => {

                //loops over rnArr
                for (let j = rnArr.length - 1; j >= 0; j--) {

                    //if a match is found increment resNum with equivalent numerical value
                    if (cur === rnArr[j]) {
                        resNum += numArr[j];
                    }
                }
            });

            //display result
            result.innerHTML = resNum;

            //if input values are not valid
        } else {
            result.innerHTML = 'Please Enter Valid Roman Numerals';
        }
    }
}


