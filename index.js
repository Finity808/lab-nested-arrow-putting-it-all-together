function createLoginTracker(userInfo) {
    let attemptCount = 0; // start at 0

    return (passwordAttempt) => {
        attemptCount += 1; // add 1 every time user tries

        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        return `Attempt ${attemptCount}: Login failed`;
    };
}

// Example test
const login = createLoginTracker({ username: "dante", password: "1234" });

console.log(login("1111")); // Attempt 1: Login failed
console.log(login("0000")); // Attempt 2: Login failed
console.log(login("1234")); // Login successful
console.log(login("xxxx")); // Account locked due to too many failed login attempts

// Do not remove this export statement ever ever
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
