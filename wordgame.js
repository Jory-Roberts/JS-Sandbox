const tileDisplay = document.querySelector('.tile-container');
console.log(tileDisplay);
const keyboard = document.querySelector('.key-container');
console.log(keyboard);
const messageDisplay = document.querySelector('.message-container');
console.log(messageDisplay);

const jordle = 'SUPER';

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'W',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<',
];
console.log(keys);

const guessRows = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
];

console.log(guessRows);

let currentRow = 0;
let currentTile = 0;

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', 'guessRow- ' + guessRowIndex);
    guessRow.forEach((guess, guessIndex) => {
        const tileElement = document.createElement('div');
        tileElement.setAttribute(
            'id',
            'guessRow- ' + guessRowIndex + '-tile-' + guessIndex
        );
        rowElement.append(tileElement);
        tileElement.classList.add('tile');
    });
    tileDisplay.append(rowElement);
});

keys.forEach((key) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', () => handleClick(key));
    keyboard.append(buttonElement);
});

const handleClick = (letter) => {
    console.log('clicked', letter);
    if (letter === '<') {
        deleteLetter();
        console.log('guessRows', guessRows);
        return;
    }
    if (letter === 'ENTER') {
        checkRow();
        console.log('clicked ENTER');
        console.log('check row');
        console.log('guessRows', guessRows);
        return;
    }
    addLetter(letter);
};

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById(
            'guessRow- ' + currentRow + '-tile-' + currentTile
        );
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter;
        tile.setAttribute('data', letter);
        currentTile++;
    }
    console.log('guessRows', guessRows);
};

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById(
            'guessRow- ' + currentRow + '-tile-' + currentTile
        );
        tile.textContent = ' ';
        guessRows[currentRow][currentTile] = ' ';
        tile.setAttribute('data', ' ');
    }
};

const checkRow = () => {
    const guess = guessRows[currentRow].join(' ');
    if (currentTile === 5) {
        console.log(`guess is ${guess} : jordle is ${jordle}`);
        if (jordle == guess) {
            showMessage('Wonderful!');
            console.log(showMessage);
            return;
        }
    }
};

const showMessage = (message) => {
    const messageElement = document.createElement('p');
    console.log(messageElement);
    messageElement.textContent = message;
    messageDisplay.append(messageElement);
};
