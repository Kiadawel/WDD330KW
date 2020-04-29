//basic Superman quiz function
function superMan() {
    const question = "What is Superman's real name?";
    const answer = prompt(question);
    alert(`You answered ${answer}`);
}

//Superheroes quiz function
function superHeroes(){
    //questions and answers
    const quiz = [
        ["What is Superman's real name?","Clark Kent"],
        ["What is Wonder Woman's real name?", "Diana Prince"],
        ["What is Batman's real name?", "Bruce Wayne"]
    ];
    //initial score
    let score = 0; 

    for(const[question,answer] of quiz){
        const response = prompt(question);
        if(response === answer){
            alert('Correct!');
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}.`)
        }
    }

    alert(`Game Over, you scored ${score} point${score !==1 ? 's' : ''}!`);
}

//superheroes quiz function 2
function newSuperHeroes() {
    const quiz = [
        ["What is Superman's real name?","Clark Kent"],
        ["What is Wonder Woman's real name?", "Diana Prince"],
        ["What is Batman's real name?", "Bruce Wayne"]
    ];
    function start(quiz){
        let score = 0;

        //main game loop
        for(const [question, answer] of quiz) {
            const response = ask(question);
            check(response,answer);
        }
        //end of main game loop
        gameOver();

        //function declarations
        function ask(question){
            return prompt(question);
        }

        function check(response, answer){
            if(response === answer || response === answer.toLowerCase()){
                alert('Correct!');
                score++;
            } else {
                alert(`Wrong! The correct answer was ${answer}.`);
            }
        }

        function gameOver(){
            alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}.`)
        }
    }
    start(quiz);
}

//EJS exercises
function loopTriangle(){
    let triangle = document.getElementById('show_triangle');
    let layer = '';
    triangle.innerHTML = '';
    for(let i=0; i < 8; i++){
        layer += '#';
        triangle.innerHTML += (layer + '<br />');
    }
}

function fizzBuzz() {
    let showBuzz = document.getElementById('show_buzz');
    showBuzz.innerHTML = '';
    for(let i=1; i <= 100; i++){
        if(i%5 == 0 && i%3 != 0){
            showBuzz.innerHTML += 'Buzz ';
        } else if(i%5 != 0 && i%3 == 0){
            showBuzz.innerHTML += 'Fizz ';
        } else if(i%5 == 0 && i%3 == 0){
            showBuzz.innerHTML += 'FizzBuzz ';
        }        
        else {
        showBuzz.innerHTML += i + ' ';
        }
    }
}

//parse the input for chessboard size
function gridSize(){
    let size = parseInt(document.getElementById('grid_num').value);
    return size;
}

//pass grid size through and generate chess board
function chessBoard(gridsize) {
    let showChess = document.getElementById('show_chess');
    let chessRow = '';
    showChess.innerHTML = '';
    for (let i=1; i <= gridsize; i++){
        chessRow = '';
        if (i%2==0){
            for (let j=1; j <= gridsize; j++){
                if(j%2 == 0){
                    chessRow += '&#9634;';
                }else {
                    chessRow += '&#9641;';
                }
            }
        } else {
            for (let j=1; j <= gridsize; j++){
                if(j%2 == 0){
                    chessRow += '&#9641;';
                }else {
                    chessRow += '&#9634;';
                }
            }
        }
        showChess.innerHTML += chessRow + '<br />';
    }
    showChess.style.display = 'inline-block';
}

//get minimum of two numbers
function getMinimum(){
    let numOne = parseInt(document.getElementById('min_one').value);
    let numTwo = parseInt(document.getElementById('min_two').value);

    let minFinal = Math.min(numOne, numTwo);

    document.getElementById('show_min').innerHTML = `The minimum number is ${minFinal}.`

}

//figure out whether a number is odd or even
function checkOddEven(){
    let checkNum = parseInt(document.getElementById('oddeven_num').value);
    let result = '';
    if (checkNum%2 == 0) {
        result = 'even';
    } else {
        result = 'odd';
    }

    document.getElementById('odd_even').innerHTML = `The number ${checkNum} is ${result}.`
}

//count characters
function beanCount(){
    let userPhrase = document.getElementById('bean_phrase').value;
    let userChar = document.getElementById('bean_letter').value.toUpperCase();
    result = countChars(userPhrase, userChar);
    document.getElementById('bean_count').innerHTML = `There ${result !== 1 ? 'are' : 'is'} precisely ${result} uppercase letter ${userChar}${result !== 1 ? 's' : ''} in your phrase.`;
}
function countChars(phrase, letter){
    let charCount = 0;
    for(let i=0; i < phrase.length; i++){
        if(phrase[i] === letter){
            charCount++;
        } else {
            continue;
        }
    }
    return charCount;
}

//sum of a range of numbers
function sumRange(){
    const rangeStart = parseInt(document.getElementById('range_start').value);
    const rangeEnd = parseInt(document.getElementById('range_end').value);
    const rangeStep = parseInt(document.getElementById('range_step').value);

    const rangeArray = range(rangeStart, rangeEnd, rangeStep);
    const rangeSum = addRange(rangeArray);
    
    document.getElementById('range_sum').innerHTML = `The range is ${rangeArray.join(', ')} <br /> These numbers add up to ${rangeSum}.`;
}
function range(start, end, step){
    step = Math.abs(step);
    var rangeArray = [];

    //counting up
    if(start == end){
        rangeArray.push(start);
        return rangeArray;
    }else if(start < end){
        for (let i=start; i <= end; i+=step){
            if(i >= start && i <=end){
                rangeArray.push(i);
            }
        }
    }else if(start > end){
        for (let i=start; i >= end; i-=step){
            rangeArray.push(i);
        }
    }
    return rangeArray;
}

function addRange(array){
    let sum = 0;
    for(const value of array){
        sum += value;
    }
    return sum;
}

//Group Work functions

//function to add all numbers together
function addAllNumbers(){
    const userNumber = parseInt(document.getElementById('user_number').value);
    document.getElementById('sum').innerHTML = 
    `The sum of all numbers between 1 and ${userNumber} inclusive is ${addThemUp(userNumber)}.`;
}
function addThemUp(num){
    let sumTotal = num;
    for (i=0; i < num; i++){
        sumTotal += i;
    }
    return sumTotal;
}
//function to add two numbers together
function addTwo(){
    const numOne = parseInt(document.getElementById('add_one').value);
    const numTwo = parseInt(document.getElementById('add_two').value);
    document.getElementById('sum_two').innerHTML = numOne + numTwo;
}
//function to retrieve numbers from inputs
function getNum(){
    let numArray = [2];
    numArray[0] = parseInt(document.getElementById('num_one').value);
    numArray[1] = parseInt(document.getElementById('num_two').value);

    return numArray;
}
//function to calculate inputs according to the operator clicked on
function calcTwo(operator,numberList){

    let calcTotal = 0;
    
    switch (operator){
        case 1:
            calcTotal = numberList[0] + numberList[1];
            break;
        case 2:
            calcTotal = numberList[0] - numberList[1];
            break;
        case 3:
            calcTotal = numberList[0] * numberList[1];
            break;
        case 4:
            calcTotal = numberList[0] / numberList[1];
            break;
        default:
            break;
    }

    document.getElementById('answer').innerHTML = calcTotal;
}