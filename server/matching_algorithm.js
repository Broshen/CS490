const projects = require('./mock_projects.js');

// given a project object (see mock_projects.js) and a list of
// consultant objects (see mock_consultants.js), filter the list
// of consultants down to a list that are qualified to be assigned
// to the project, and return the list
function filterConsultantsForProject (project, consultants){
	// TODO: actually implement this. return all consultants for now
	switch(project.priority) {

		case projects.PRIORITIES.LOCATION:
			consultants = consultants.sort((a,b) => {
				return a.locations.includes(project.locations[0]) ? -1 : 1;
            });
			break;
		case projects.PRIORITIES.BUDGET:
			consultants = consultants.sort((a, b) => {
				// Give high weighting to this
				const standardizedPayRank = (a.pay_amount - b.pay_amount) * 1.5 /a.pay_amount;
				const standardizedExperienceRank = (b.prev_jobs.length - a.prev_jobs.length) / b.prev_jobs.length;
				const standardizedQualityRank = (b.avg_rating - a.avg_rating) / b.avg_rating;
				return standardizedPayRank + standardizedExperienceRank + standardizedQualityRank;
			});
			break;
        case projects.PRIORITIES.QUALITY:
            consultants = consultants.sort((a, b) => {
                const standardizedPayRank = (a.pay_amount - b.pay_amount) /a.pay_amount;
                const standardizedExperienceRank = (b.prev_jobs.length - a.prev_jobs.length) / b.prev_jobs.length;
                const standardizedQualityRank = (b.avg_rating - a.avg_rating) * 1.5 / b.avg_rating;
                return standardizedPayRank + standardizedExperienceRank + standardizedQualityRank;
            });
            break;
		case projects.PRIORITIES.EXPERIENCE:
            consultants = consultants.sort((a, b) => {
                const standardizedPayRank = (a.pay_amount - b.pay_amount) /a.pay_amount;
                const standardizedExperienceRank = (b.prev_jobs.length - a.prev_jobs.length) * 1.5 / b.prev_jobs.length;
                const standardizedQualityRank = (b.avg_rating - a.avg_rating) / b.avg_rating;
                return standardizedPayRank + standardizedExperienceRank + standardizedQualityRank;
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