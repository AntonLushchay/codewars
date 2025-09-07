// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

humanReadable = (seconds) => {
    const time = { hours: 0, minutes: 0, seconds: 0 };
    while (seconds > 0) {
        if (seconds - 60 >= 0) {
            seconds -= 60;
            time.minutes += 1;
        } else {
            time.seconds += seconds;
            seconds = 0;
        }

        if (time.minutes >= 60) {
            time.minutes -= 60;
            time.hours += 1;
        }
    }
    return (
        `${time.hours}`.padStart(2, 0) +
        ':' +
        `${time.minutes}`.padStart(2, 0) +
        ':' +
        `${time.seconds}`.padStart(2, 0)
    );
};

console.log(humanReadable(666));
