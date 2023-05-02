const tileDisplay = document.querySelector('.tile-container');
console.log(tileDisplay);
const keyboard = document.querySelector('.key-container');
console.log(keyboard);

const word = 'SUPER';

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

const handleClick = (key) => {
    console.log('clicked', key);
    addLetter(key);
};

const addLetter = (key) => {
    const tile = document.getElementById(
        'guessRow- ' + currentRow + '-tile-' + currentTile
    );
    tile.textContent = key;
};
