const inputFieldValueById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    return inputValue;
}

const sendName = () => {
    const nameField = inputFieldValueById('name-field');
    console.log(nameField);

    localStorage.setItem('Name', nameField);
}
const deleteName = () => {
    const nameField = inputFieldValueById('name-field');

    localStorage.removeItem('Name');
}

const sendEmail = () => {
    const emailField = inputFieldValueById('email-field');
    localStorage.setItem('email', emailField);
}
const deleteEmail = () => {
    const emailField = inputFieldValueById('email-field');

    localStorage.removeItem('email');
}


const sendMessage = () => {
    const messageField = inputFieldValueById('message-field');
    console.log(messageField);

    localStorage.setItem('message', messageField);
}
const deleteMessage = () => {
    const messageField = inputFieldValueById('message-field');

    localStorage.removeItem('message');
}

const clearAll = () => {
    localStorage.clear();
}

