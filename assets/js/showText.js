const showStringEffect = function(htmlTagContainString, string, timeToChange) {
    this.htmlTagContainString = htmlTagContainString;
    this.string = string;
    this.word = '';
    this.stringIndex = 0;
    this.timeToChange = parseInt(timeToChange, 10);
    this.typingFunc();
    this.deleting = false;
}
document.addEventListener('DOMContentLoaded', run);
function run() {
    const htmlTagContainString = document.querySelector('.cv-intro__info-name-major');
    const string = ["barbara kieu", "a photographer"];
    const timeToChange = 1000;
    new showStringEffect(htmlTagContainString, string, timeToChange);
}
showStringEffect.prototype.typingFunc = function () {
    const stringIndexCurrent = this.stringIndex % this.string.length;
    const stringCurrent = this.string[stringIndexCurrent];
    // console.log(stringCurrent);

    if(this.deleting) {
        this.word = stringCurrent.substring(0, this.word.length - 1);
    } else {
        this.word = stringCurrent.substring(0, this.word.length + 1);
    }
    this.htmlTagContainString.innerHTML = `<span class="word">${this.word}</span>`;

    let typingSpeed = 100;
    if(this.deleting) {
        typingSpeed = typingSpeed /2;
    }
    if(!this.deleting && this.word === stringCurrent) {
        typingSpeed = this.timeToChange;
        // console.log(this.timeToChange);
        this.deleting = true;
    } else if(this.deleting && this.word === ''){
        this.deleting = false;
        this.stringIndex++;
        typingSpeed = 300;
    }
    setTimeout(() => this.typingFunc(), typingSpeed);
}


    