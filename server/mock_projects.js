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
    this.assigned_consultant = assigned_consultant;
    this.priority = priority;
}


const projects = {
    '00000': new Project(
        '00000',
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
        PRIORITIES.QUALITY
    ),
    '00001': new Project(
        '00001',
        "Employment Clinic",
        ["Toronto, ON, Canada"],
        "02/11/2020",
        "02/24/2020",
        800,
        60000,
        ["Accessibility", "Employment", "Counselling"],
        null,
        "The organization provides employment services across the greater Toronto area to individuals who are facing barriers to integrating into the labour market. Employment preparation and job placement support for newcomers, people on social assistance and individuals facing barriers to finding employment; a series of sector specific bridge training programs for internationally trained individuals, mentoring and enhanced language training for newcomers",
        "Accessible Community Counselling and Employment Services",
        null,
        PRIORITIES.LOCATION
    ),
    '00002': new Project(
        '00002',
        "Society Fund",
        ["Strathory, ON, Canada"],
        "03/30/2019",
        "06/29/2019",
        500,
        30000,
        ["Community", "Children", "Camp"],
        null,
        "Within the partnership of the Air Cadet League of Canada, with the Department of National Defence, provide the youth of Strathroy-Caradoc, Ontario, and Area, ages 12-19, of all socioeconomic background, with a structured program of discipline, life skills, physical fitness, citizenship, leadership, adventure and social activities in an aviation setting.",
        "#3 Striker Air Cadet Squadron Sponsoring Committee",
        null,
        PRIORITIES.BUDGET
    ),
    '00003': new Project(
        '00003',
        "Church Services Fund",
        ["Toronto, ON, Canada"],
        "02/02/2020",
        "02/09/2020",
        40,
        1200,
        ["Religion"],
        null,
        "We distributed Gospel tracts and invited people to church. We dedicated babies, conducted water baptism and Holy Communion.",
        "Ark of God Bible Ministries Prophetic Centre",
        null,
        PRIORITIES.QUALITY
    ),
    '00004': new Project(
        '00004',
        "Asthama Awareness",
        ["Toronto, ON, Canada"],
        "09/01/2019",
        "09/29/2019",
        1300, // approx 4 months
        120000,
        ["Healthcare", "Medicine", "Medical Condition", "Awareness"],
        null,
        "National charitable volunteer-supported organization devoted to enhancing the quality of life of people living with asthma.",
        "Asthma Canada/Asthme Canada ",
        null,
        PRIORITIES.BUDGET
    ),
    '00005': new Project(
        '00005',
        "Community Potluck Event",
        ["Sudbury, ON, Canada"],
        "08/05/2019",
        "08/09/2019",
        120, // approx 4 months
        3000,
        ["Food", "Low Income Assistance"],
        null,
        "To provide meals and other basic supplies to the homeless and other needy persons.",
        "Blue Door Soup Kitchns",
        null,
        PRIORITIES.EXPERIENCE
    ),
    '00006': new Project(
        '00006',
        "Fundraising for Haiti",
        ["Ottawa, ON, Canada"],
        "06/05/2019",
        "01/19/2019",
        400,
        30000,
        ["Foreign Aid", "Disaster Relief"],
        null,
        "Cultes d'adoration -etudes bibiliques et prieres - evangelisation - mission",
        "Église baptiste Haitienne Salem",
        null,
        PRIORITIES.LOCATION
    )
}

module.exports = {
	getProject: function (projectId) {
		console.log(projects[projectId])
		return projects[projectId]
	},
	getAllProjects: () => projects,
    PRIORITIES
}
