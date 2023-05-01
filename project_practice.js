document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((dog) => {
            appendDog(dog);
        });

    fetch('http://localhost:3000/users')
        .then((res) => res.json())
        .then((users) => {
            let list = document.querySelectorAll('#list li');

            list.forEach((li, index) => {
                li.innerText = ` ${users[index].name} ${users[index].email}`;
            });

            console.log('DOM fully loaded and parsed');
            addingEventListeners();
        });

    const submitBtn = document.getElementById('submit-btn');
    console.log(submitBtn);
    const clearBtn = document.getElementById('clear-btn');
    console.log(clearBtn);
    const randomBtn = document.getElementById('random-btn');
    console.log(randomBtn);

    function addingEventListeners() {
        submitBtn.addEventListener('click', handleFormSubmit);
        randomBtn.addEventListener('click', randomize);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const form = document.getElementById('create-info-form');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        postNewInfo(formData);
    }

    function appendDog(dog) {
        const imageContainer = document.getElementById('image-container');
        const img = document.createElement('img');
        img.src = dog.message;
        imageContainer.appendChild(img);
    }

    function appendPerson(person) {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        li.innerText = `${person.name} ${person.email}`;
        list.appendChild(li);
    }

    function randomize(e) {
        e.preventDefault();
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((dog) => {
                const img = document.querySelector('#image-container img');
                img.src = dog.message;
            });
    }

    function postNewInfo(formData) {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData.entries())),
        })
            .then((res) => res.json())
            .then((person) => {
                appendPerson(person);
                console.log(person);
            });
    }
});
