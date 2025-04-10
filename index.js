// Step 2: Create a createLoginTracker function
function createLoginTracker(userInfo) {
  // Step 3: Initialize attemptCount
  let attemptCount = 0;

  // Step 4: Create and return an arrow function
  const checkLogin = (passwordAttempt) => {
    // Step 5.1: Increment attemptCount
    attemptCount += 1;

    // Step 5.2: Check password and return messages
    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Login successful";
    } else if (attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    } else {
      return "Account locked due to too many failed login attempts";
    }
  };

  return checkLogin;
}

// Do not remove this export statement
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};