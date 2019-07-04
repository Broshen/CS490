const projects = require('./mock_projects.js');

// given a project object (see mock_projects.js) and a list of
// consultant objects (see mock_consultants.js), filter the list
// of consultants down to a list that are qualified to be assigned
// to the project, and return the list
function filterConsultantsForProject (project, consultants){
	// TODO: actually implement this. return all consultants for now
	console.log(project);
	console.log(consultants);

	switch(project.priority) {
		case projects.PRIORITIES.LOCATION:
			console.log(project.location);
			consultants = consultants.filter(consultant => consultant.locations.includes(project.locations[0]));
			break;
		case projects.PRIORITIES.BUDGET:
			consultants = consultants.sort((a, b) => {
				return a.pay_amount - b.pay_amount;
			});
			break;
        case projects.PRIORITIES.QUALITY:
            consultants = consultants.sort((a, b) => {
                return b.avg_rating - a.avg_rating;
            });
            break;
		case projects.PRIORITIES.EXPERIENCE:
            consultants = consultants.sort((a, b) => {
                return b.prev_jobs.length - a.prev_jobs.length;
            });
            break;
	}
	return consultants
}

// given a project object (see mock_projects.js) and a list of
// consultant objects (see mock_consultants.js), rank the list
// of consultants based on most qualified to least, and
// return the list
function rankConsultantsForProject (project, consultants){
	// TODO: actually implement this. return all consultants for now
	return consultants
}

module.exports = {
	getConsultants: function (project, consultants) {
		filtered = filterConsultantsForProject(project, consultants)
		ranked = rankConsultantsForProject(project, filtered)

		return ranked
	}
}