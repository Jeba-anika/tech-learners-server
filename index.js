const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/course-category.json')
const allCourses = require('./data/all-course-details.json')

app.get('/', (req, res)=>{
    res.send('Tech Learners API running')
})


app.listen(port, ()=>{
    console.log('Tech Learners Server is running at port:', port)
})