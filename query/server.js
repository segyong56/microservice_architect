const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};
// QUICK EXAMPLE

const handleEvent = (type, data) => {

}

app.get('/posts', (req, res) => {

    res.send(posts)
})

app.post('/events', (req, res) => {

    const { type, data } = req.body;

    console.log(type)

    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        post.comments.push({ id, content, status });
    }

    if (type === 'CommentUpdated') {
        console.log('comment updated')
        const { id, content, postId, status } = data;

        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        })

        comment.status = status;
        comment.content = content;

    }

    res.send({});

})

app.listen(4002, async () => {
    console.log('Listening on 4002')

    const res = await axios.get("http://localhost:4005/events");

    for(let event of res.data) {
        console.log('Processing event:', event.type)

        handleEvent(event.type, event.data);
    }
})