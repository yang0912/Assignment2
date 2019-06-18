const filename = '/Users/tcyz/Desktop/Assignment2/server/data/messages.json';
let messages = require(filename)
const helper = require('../helpers/helper')
function getMessages() {
    return new Promise((resolve, reject) => {
        if (messages.length === 0) {
            reject({
                message: 'no messages available',
                status: 202
            })
        }
        console.log(messages)
        resolve(messages)
    })
}
// function getPost(id) {}
// function insertPost(newPost) {}
// function updatePost(id, newPost) {}
// function deletePost(id) {}
module.exports = {
    // insertPost,
    getMessages,
    // getPost, 
    // updatePost,
    // deletePost
}