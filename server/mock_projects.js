var db = require('./database');
var database = db.db;

const PRIORITIES = {
    BUDGET: 'Budget',
    LOCATION: 'Location',
    QUALITY: 'Quality',
    EXPERIENCE: 'Experience'
};

// create a new mock Project object
function Project(
    id,					// alphanumeric string
    name,
    locations,			// array of strings
    start_date,			// string of day/month/year - e.g. "31/12/2019"
    deadline,			// string of day/month/year - e.g. "31/12/2019"
    hours_required,		// number
    budget,				// number
    industries,			// array of strings
    qual_required,		// idk figure this out later
    rfp_document,		// string
    client,				// idk figure this out later
    assigned_consultant,// idk figure this out later,
    priority // can be location, budget, etc.
) {
    this.id = id
    this.name = name
    this.locations = locations
    this.start_date = start_date
    this.deadline = deadline
    this.hours_required = hours_required
    this.budget = budget
    this.industries = industries
    this.qual_required = qual_required
    this.rfp_document = rfp_document
    this.client = client
    this.assigned_consultant = assigned_consultant || '';
    this.priority = priority;
}

module.exports = {
	getProject: function (projectId) {
        return database.ref('/projects/'+projectId).once('value').then(function(snapshot) {
          console.log(snapshot.val())
          return snapshot.val()
        });
	},

	getAllProjects: function () {
        return database.ref('/projects/').once('value').then(function(snapshot) {
          return snapshot.val()
        });
    },

    addProject: function (
        name,
        locations,
        start_date,
        deadline,
        hours_required,
        budget,
        industries,
        qual_required,
        rfp_document,
        client,
        assigned_consultant,
        priority
    ) {
        var newProjectKey = database.ref().child('projects').push().key;

        var newProj = new Project(
            newProjectKey,
            name,
            locations,
            start_date,
            deadline,
            hours_required,
            budget,
            industries,
            qual_required,
            rfp_document,
            client,
            assigned_consultant,
            priority
        );

        console.log(newProj)

        var updates = {};
        updates["/projects/" + newProjectKey] = newProj;
        database.ref().update(updates);

        return newProjectKey;
  },
  
  PRIORITIES
}
