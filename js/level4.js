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

/*..........Write only single object. after fill input filed again value is replace.............

const getDetailsFromLS = () => {
    let saveDetails = localStorage.getItem('details');
    let details = {};
    if (saveDetails) {
        details = JSON.parse(saveDetails);
    }
    return details;
}

const saveDetailsToLS = (key, value) => {
    const details = getDetailsFromLS();
    details[key] = value;
    const detailsStrigified = JSON.stringify(details);
    localStorage.setItem('details', detailsStrigified);
}

const sendAll = () => {
    const nameField = inputFieldValueById('name-field');
    const emailField = inputFieldValueById('email-field');
    const messageField = inputFieldValueById('message-field');
    // saveDetailsToLS('Name', nameField);
    // saveDetailsToLS('email', emailField);
    // saveDetailsToLS('message', messageField);
}
*/


//.................. add different different object in an array.................
const sendAll = () => {
    const nameField = inputFieldValueById('name-field');
    const emailField = inputFieldValueById('email-field');
    const messageField = inputFieldValueById('message-field');

    const details = JSON.parse(localStorage.getItem('Details'));
    if (!details) {
        const detailsList = [
            {
                name: nameField,
                email: emailField,
                message: messageField,
            },
        ];
        localStorage.setItem('Details', JSON.stringify(detailsList));
    }
    else {
        const detailsList = [
            ...details,
            {
                name: nameField,
                email: emailField,
                message: messageField,
            },
        ];
        localStorage.setItem('Details', JSON.stringify(detailsList));
    }
}
