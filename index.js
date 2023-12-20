// Code your solutions in this file
function writeCards(names, eventName) {
    // an empty array to hold the messages
    const thankYouMessages = [];

    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

        // Add the message to the new array
        thankYouMessages.push(message);
    }

    // Return the new array
    return thankYouMessages;
}

// Implementation
const namesArray = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const messages = writeCards(namesArray, event);

function countDown(startingNumber) {
    // Check if the input is a positive integer
    if (typeof startingNumber !== 'number' || startingNumber <= 0 || !Number.isInteger(startingNumber)) {
        console.error("Please provide a valid positive integer.");
        return;
    }

    // Start counting down
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);

console.log(messages);

