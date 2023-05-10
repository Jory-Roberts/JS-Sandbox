const person = {
    fullName: {
        'First Name': 'Bob',
        'Last Name': 'Made Up',
        Occupation: 'Software Engineer',
    },
};

const addCardContent = (person) => {
    const card = document.querySelector('.card');
    const paragraph = document.createElement('p');
    paragraph.id = 'paragraph';
    paragraph.textContent = person.fullName['First Name'];
    card.appendChild(paragraph);
    console.log(paragraph);
};

addCardContent(person);
