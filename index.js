const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
const courses = require('./Data/webCourses.json');
const blogs = require('./Data/Blogs.json');

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get('/course', (req, res) => {
  res.send(courses)
});
app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const signleCourse = courses.find(course => course.id === id);
  res.send(signleCourse);
});

app.get('/blogs', (req, res) => {
  res.send(blogs);
})




app.listen(port, () => {
  console.log("Dragon News Server running on port", port);
});