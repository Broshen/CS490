// create a new mock consultant object
function Consultant(
	name,			// string
	locations,		// array of strings
	industries,		// array of strings
	available_times,// array of tuples of day/month/year, e.g. [["01/01/2019", "01/04/2019"]...]
	pay_amount,		// number
	pay_frequency,	// should be "hr", "week", "month", or "year"
	qualifications,	// idk figure this out later
	prev_jobs,		// idk figure this out later
	avg_rating,		// number between 1-10
	bio,			// string
	current_project,// idk figure this out later
	) {
	this.name = name
	this.locations = locations
	this.industries = industries
	this.available_times = available_times
	this.pay_amount = pay_amount
	this.pay_frequency = pay_frequency
	this.qualifications = qualifications
	this.prev_jobs = prev_jobs
	this.avg_rating = avg_rating
	this.bio = bio
	this.current_project = current_project
}


module.exports = {
	getAllConsultants: function () {
	return [
		new Consultant("Billy T.",
			["Toronto, ON, Canada", "Scarborough, ON, Canada", "Markham, ON, Canada", ],
			["Healthcare", "Medicine", "Medical Equipment"],
			[["01/01/2020", "01/04/2020"], ["01/06/2020", "31/12/2020"]],
			40,
			"hr",
			null,
			null,
			8.4,
			"Hi, my name is Billy Talent! I specialize in the Healthcare industry, specifically in dealing with specialized medical equipment and medicine.",
			null
		),
		new Consultant("Max W.",
			["Waterloo, ON, Canada", "Kitchener, ON, Canada", "Cambridge, ON, Canada"],
			["Clean Water", "Water Systems", "Construction"],
			[["01/10/2019", "01/03/2020"], ["01/10/2020", "01/03/2021"]],
			4000,
			"week",
			null,
			null,
			9.2,
			"Hi, my name is Max Well! I have experience working in the civil engineering industry, and I specializing in developing and maintaining water systems and clean water.",
			null
		),
	]
}
}
