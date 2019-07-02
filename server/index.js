// package imports
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

// local imports
var consultants = require('./mock_consultants');
var projects = require('./mock_projects');
var algorithm = require('./matching_algorithm');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


// this endpoint returns the project with that has the specified
// projectId, or null if no project is found
router.get('/project/:projectId', (req, res) => {
  console.log("project",  projects.getProject(req.params.projectId))
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

  // return a list of possible candidates
  var matchedConsultants = algorithm.getConsultants(project, allConsultants)
  return res.json(matchedConsultants)
});



// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT || 5000, () => console.log(`LISTENING ON PORT ${API_PORT}`));
