// create a new mock consultant object
function Consultant(
	name,			// string
  position,		// string
	thumbnail, // thumbnail picture
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
  this.position = position
	this.thumbnail = thumbnail
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
			"JUNIOR CONSULTANT",
			"https://image.shutterstock.com/mosaic_250/698308/567772042/stock-photo-headshot-of-successful-smiling-cheerful-african-american-businessman-executive-stylish-company-567772042.jpg",
			["Toronto, ON, Canada", "Scarborough, ON, Canada", "Markham, ON, Canada", ],
			["Healthcare", "Medicine", "Medical Equipment"],
			[["01/01/2020", "01/04/2020"], ["01/06/2020", "31/12/2020"]],
			5000,
			"week",
			null,
			['00004','00000'],
			8.4,
			"Hi, my name is Billy Talent! I specialize in the Healthcare industry, specifically in dealing with specialized medical equipment and medicine.",
			null

		),
    new Consultant("Max W.",
      "SENIOR CONSULTANT",
      "https://image.shutterstock.com/mosaic_250/166685026/1144780058/stock-photo-headshot-of-attractive-unshaven-young-male-with-cheerful-expression-looks-confidently-at-camera-1144780058.jpg",
      ["Waterloo, ON, Canada", "Kitchener, ON, Canada", "Cambridge, ON, Canada"],
      ["Clean Water", "Water Systems", "Construction"],
      [["01/10/2019", "01/03/2020"], ["01/10/2020", "01/03/2021"]],
      3000,
      "week",
      null,
      ['00006'],
      9.2,
      "Hi, my name is Max Well! I have experience working in the civil engineering industry, and I specializing in developing and maintaining water systems and clean water.",
      null
    ),
    new Consultant("Danielle V.",
      "SENIOR CONSULTANT",
      "https://image.shutterstock.com/mosaic_250/166695862/1043077198/stock-photo-headshot-of-beautiful-smiling-woman-with-broad-smile-being-in-good-mood-as-poses-at-camera-1043077198.jpg",
      ["Ottawa, ON, Canada"],
      ["Low Income Assistance", "Food", "Event Planning"],
      [["01/10/2019", "06/13/2019"], ["07/10/2019", "01/03/2021"]],
      2400,
      "week",
      null,
      ['00005', '00003', '00004'],
      8.8,
      "Hi, my name is Danielle Vio! My experiences lie mostly with low income planning assistance and charity event planning",
      null
    ),
	]
}
}
