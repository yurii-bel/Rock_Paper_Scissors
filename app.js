const player = document.querySelector('#player_budget');
const ai = document.querySelector('#ai_budget');
let player_score_span = document.querySelector('.player_score');
let ai_score_span = document.querySelector('.ai_score');
const alert_p = document.querySelector('.alert');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


let player_score = 0;
let ai_score = 0;

const aiArray = ['r','p','s'];

//  переводит букву в соответствующее слово. Например: r - rock (к - камень)
function fromLetterToWord(letter){  // 
    if(letter === 'r'){ return 'rock' }
    else if (letter === 'p') { return 'paper'} 
    else { return 'scissors' }
}
 
// сравнивает значения и показывает в параграфе кто победил
function game(playerChoice, aiChoice){

    switch(playerChoice+aiChoice){
        case 'rs':
        case 'pr':
        case 'sp':
        scoreCalc('win');
        alert_p.innerHTML = `Player (${fromLetterToWord(playerChoice)}) BEATS AI (${fromLetterToWord(aiChoice)})`;
        // visual effect if win
        if(playerChoice === 'r'){
            rock.classList.add('win');
            setTimeout(() => {
                    rock.classList.remove('win');
            }, 300);
        } else if(playerChoice === 'p'){
            paper.classList.add('win');
            setTimeout(() => {
                    paper.classList.remove('win');
            }, 300);}
            else{
                scissors.classList.add('win');
            setTimeout(() => {
                scissors.classList.remove('win');
            }, 300);   
        }

        console.log('player wins!');
        break;
        case 'rp':
        case 'ps':
        case 'sr':
        scoreCalc('lost');
        alert_p.innerHTML = `Player (${fromLetterToWord(playerChoice)}) LOST to AI (${fromLetterToWord(aiChoice)})`;

                // visual effect if lost
                if(playerChoice === 'r'){
                    rock.classList.add('lost');
                    setTimeout(() => {
                            rock.classList.remove('lost');
                    }, 300);
                } else if(playerChoice === 'p'){
                    paper.classList.add('lost');
                    setTimeout(() => {
                            paper.classList.remove('lost');
                    }, 300);}
                    else{
                        scissors.classList.add('lost');
                    setTimeout(() => {
                        scissors.classList.remove('lost');
                    }, 300);   
                }
        console.log('player lost...');
        break;
        case 'rr':
        case 'pp':
        case 'ss': 
        alert_p.innerHTML = `Seems like it's a DRAW between Player (${fromLetterToWord(playerChoice)}) and AI (${fromLetterToWord(aiChoice)}) ..`;
          // visual effect if draw
          if(playerChoice === 'r'){
            rock.classList.add('draw');
            setTimeout(() => {
                    rock.classList.remove('draw');
            }, 300);
        } else if(playerChoice === 'p'){
            paper.classList.add('draw');
            setTimeout(() => {
                    paper.classList.remove('draw');
            }, 300);}
            else{
                scissors.classList.add('draw');
            setTimeout(() => {
                scissors.classList.remove('draw');
            }, 300);   
        }
        console.log('Its a draw..');
        break;
    }
    
}



// Подсчитывает очки игрока и компа в поле
function scoreCalc(status){ 
    if(status === 'win'){
        player_score++;
        player_score_span.innerHTML = player_score;
    } else if(status === 'lost'){
        ai_score++;
        ai_score_span.innerHTML = ai_score;
    } else {
        player_score = player_score;
        ai_score = ai_score;
    }
}

// 3 евента возвращают значения того, на что нажал игрок (камень, ножницы, бумага)
rock.addEventListener('click', function(){
    let aiRandom = Math.floor(Math.random()*3);
    game('r',aiArray[aiRandom]);
});

paper.addEventListener('click', function(){
    let aiRandom = Math.floor(Math.random()*3);
    game('p',aiArray[aiRandom]);
});

scissors.addEventListener('click', function(){
    let aiRandom = Math.floor(Math.random()*3);
    game('s',aiArray[aiRandom]);
});