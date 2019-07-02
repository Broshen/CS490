// given a project object (see mock_projects.js) and a list of
// consultant objects (see mock_consultants.js), filter the list
// of consultants down to a list that are qualified to be assigned
// to the project, and return the list
function filterConsultantsForProject (project, consultants){
	// TODO: actually implement this. return all consultants for now
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