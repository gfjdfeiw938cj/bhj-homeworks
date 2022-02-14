class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
//----------------------------------------------------------------------------
//                             Настройки для таймера
   
    this.formsTimer();
    this.TIME_LIMIT = 20;
    this.timePassed = 0;
    this.timeLeft = TIME_LIMIT;
    this.timerInterval = null;
    this.startTimer();
//----------------------------------------------------------------------------
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    
    document.addEventListener('keydown', function(event){ 
      const eventLetter = event.key.toLowerCase().charCodeAt(0);
      const screenLetter = this.currentSymbol.textContent.toLowerCase().charCodeAt(0);
      if (screenLetter === eventLetter) {
          this.success();
      } else {
          this.fail();
      }
    });
  }
//----------------------------------------------------------------------
//                                     Методы для таймера 
  formsTimer(){
    document.getElementById("app").innerHTML = `
        <div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining green"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;
  }

  startTimer(){
    this.timerInterval = setInterval(() => {
      // Количество времени, которое прошло, увеличивается на  1
          this.timePassed = this.timePassed += 1;
          this.timeLeft = this.TIME_LIMIT - this.timePassed;
      // Обновляем метку оставшегося времени
          document.getElementById("base-timer-label").innerHTML = formatTime(this.timeLeft);
          setCircleDasharray();
          // setRemainingPathColor(timeLeft);
      
          if (timeLeft === 0) {
            onTimesUp();
          }
        }, 1000);
  }

  formatTime(time){
    const minutes = Math.floor(time / 60); // Наибольшее целое число меньше или равно результату деления времени на 60.
 
    let seconds = time % 60; // Секунды – это остаток деления времени на 60 (оператор модуля)

    if (seconds < 10) {
    seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  calculateTimeFraction(){
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  setCircleDasharray(){
    const circleDasharray = `${(calculateTimeFraction() * 283).toFixed(0)} 283`;
    document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
  }

//-----------------------------------------------------------------------
  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))