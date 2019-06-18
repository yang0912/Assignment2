const filename = '/Users/tcyz/Desktop/Assignment2/server/data/messages.json';
let messages = require(filename)
const helper = require('../helpers/helper')
function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(messages)
    })
}

function insertMessage(newMessage) {
    return new Promise((resolve, reject) => {
        const mess = messages.messages;
        const id = { id: helper.getNewId(mess) }

        newMessage = { ...id, ...newMessage }
        mess.push(newMessage)
        helper.writeJSONFile(filename, { ...messages, messages: mess})
        resolve(newMessage)
    })
}

function updateMessage(id, newMessage) {
    return new Promise((resolve, reject) => {
        const mess = messages.messages
        const message = mess.find(m => m.id === id)

        const index = mess.findIndex(p => p.id === message.id)
        id = { id: message.id }

        mess[index] = { ...id, ...newMessage }
        helper.writeJSONFile(filename, { ...data, messages: mess})
        resolve(mess[index])
    })
}

module.exports = {
    insertMessage,
    getMessages,
    updateMessage,
}