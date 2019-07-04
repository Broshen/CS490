// package imports
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

// local imports
var consultants = require('./mock_consultants');
var projects = require('./mock_projects');
var algorithm = require('./matching_algorithm');

const API_PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
const router = express.Router();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this endpoint returns all unassigned projects
router.get('/projects/unassigned', (req, res) => {
  return res.json(projects.getAllProjects())
});

// this endpoint returns the project with that has the specified
// projectId, or null if no project is found
router.get('/project/:projectId', (req, res) => {
  return res.json(projects.getProject(req.params.projectId))
});


// this endpoint returns all the possible consultants that
// are qualified for, and can be matched with the project
// with id <projectId>
router.get('/suggested_consultants/:projectId', (req, res) => {

  // fetch the data for the project with id <projectId>
  var project = projects.getProject(req.params.projectId)

  // get all consultants available
  var allConsultants = consultants.getAllConsultants()

    console.log('matching')

  // return a list of possible candidates
  var matchedConsultants = algorithm.getConsultants(project, allConsultants)
  return res.json(matchedConsultants)
});



// append /api for our http requests
app.use('/api', router);

// serve frontend static build files from react app
console.log("dirname: ", __dirname)
app.use(express.static(path.join(__dirname, '/../client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
	console.log(path.join(__dirname+'/../client/build/index.html'))
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
