const nameField = document.getElementById('name')

console.log(nameField.value)
//tracking changes in input field
nameField.addEventListener('input', (event)=>{
    console.log(event.target.value)
});
//handling form submission
const form = document.getElementById('form')
form.addEventListener('submit', (event) => {event.preventDefault();
    //create an object to hold form data
const name = nameField.value;
const email = document.getElementById('email').value;
const message = document.getElementById('messag').value;
const formData = {
    name: name,
    email,
    message
};
console.log('Form submitted',formDate);
});
