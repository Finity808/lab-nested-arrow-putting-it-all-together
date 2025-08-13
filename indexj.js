function createLoginTracker(userInfo) {
    let attemptCount = 0; // starts at 0, per assignment

    // this will be replaced with our real logic in the next chunk
    return (passwordAttempt) => {
       attemptCount +=1;
       if(passwordAttempt === userInfo.password){
       }

       if(attempt >3){
        return "Account locked due to too many failed login attempts";
       }
    };
}
