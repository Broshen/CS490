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
	assigned_consultant,// idk figure this out later
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
	this.assigned_consultant = assigned_consultant
}


module.exports = {
	getProject: function (projectId) {
		// TODO: use projectId to actually find a project with matching project ID
		return new Project(
			projectId,
			"Drug Recovery Clinic",
			["Toronto, ON, Canada"],
			"01/01/2020",
			"01/09/2020",
			1000, // approx 4 months
			50000,
			["Healthcare", "Medicine"],
			null,
			"We need a contant within the healthcare industry to help us set up a non-profit clinic to help drug addicts get clean.",
			"Mothers against Druggers",
			null,
		)
	}
}
