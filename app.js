const express = require('express');

const app = express();


let courses = [
  { id: 0, title: 'API' },

  { id: 1, title: 'JS' },

];

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//add authentication for all routes
app.all('*', requireAuthentication);


//add authentication for specific routes
add.all('/grades/*', requireAuthentication);


// get all courses data from the list
app.get('/', function (req, res) {
  res.json(courses);
});


//use for add data to the list of courses
app.post('/', function (req, res) {

  let newCourse = {
    id: req.body.id,
    title: req.body.title
  };

  courses.push(newCourse);
  res.json(courses);
});


//use for update data depend on id
app.put('/:id', function (req, res) {
  let found = courses.find(function (course) {
    return course.id === parseInt(req.params.id);
  });

  if (found) {
    let updated = {
      id: found.id,
      title: req.body.title
    };

    let targetIndex = courses.indexOf(found);
    courses.splice(targetIndex, 1, updated);
    // res.send(courses);
    res.json(courses);
  }
  else {
    res.sendStatus(404);
  }

});

//use for delete data depend on id
app.delete('/:id', function (req, res) {
  let found = courses.find(function (course) {
    return course.id === parseInt(req.params.id);
  });

  if (found) {
    let targetIndex = courses.indexOf(found);
    courses.splice(targetIndex, 1);
    res.json(courses);

  }
  else {
    res.sendStatus(404);
  }
});

//use for navigate to the courses/express page
app.get('/courses', function (req, res) {
  res.redirect('/courses/express');
});
app.get('/courses/express', function (req, res) {
  res.send('Welcome to the express page');
});

app.listen(3003);