const validate = (user) => {
    const errors = {};
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!user.email) {
        errors.email = 'Please enter your email';
    } else if (!validEmail.test(user.email)) {
        errors.email = 'This email is invalid';
    }
    if (!user.firstName || user.firstName.length < 3) {
        errors.firstName = 'Please enter your First Name';
    }
    if (!user.lastName || user.lastName.length < 3) {
        errors.lastName = 'Please enter your Last Name';
    }
    if (!user.password) {
        errors.password = 'Please enter your Password';
    }
    if (user.password && user.password.length < 8) {
        errors.password = 'Password should be longer than 8 symbols';
    }
    return errors;
};

export default validate;