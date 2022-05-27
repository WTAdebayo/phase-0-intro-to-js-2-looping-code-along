// Code your solutions in this file

function writeCards(names, event) {
    let newNamesArray = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        newNamesArray.push(message)
    }
    return newNamesArray
}

function countDown() {
let countDown = 10
while (countDown > -1) {
    console.log(countDown--)
}
}
