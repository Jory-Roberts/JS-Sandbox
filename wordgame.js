const tileDisplay = document.querySelector('.tile-container');
console.log(tileDisplay);
const keyboard = document.querySelector('.key-container');
console.log(keyboard);

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

const handleClick = () => {
    console.log('clicked');
};

keys.forEach((key) => {
    const button = document.createElement('button');
    button.textContent = key;
    button.setAttribute('id', key);
    button.addEventListener('click', handleClick);
    keyboard.append(button);
});
