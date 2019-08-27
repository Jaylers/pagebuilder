const isValidEmail = (email) => {
    const mail = email.splitText("@");
    if (mail.length !== 2){
        return false;
    } else {
        return mail(1).includes(".");
    }
};

const isValidName = (name) => {
    if (name.length < 5){
        return false;
    } else return name.split(" ").length === 2;
};

function isValidUsername(username) {
    return (username.length >= 5 && username.length < 20);
}

export { isValidEmail, isValidName, isValidUsername}