var firebase = require('firebase');
require('firebase/database');

var config = {
    "apiKey": "AIzaSyApbbE90LsWekODFSlRLDz4nOIegHajMSc",
    "authDomain": "cs490-e9fd5.firebaseapp.com",
    "databaseURL": "https://cs490-e9fd5.firebaseio.com",
    "projectId": "cs490-e9fd5",
    "storageBucket": "",
    "messagingSenderId": "1073025923441",
    "appId": "1:1073025923441:web:1e5196bf90ba1485"
}

var app = firebase.initializeApp(config);
var database = firebase.database();


module.exports = {
	db: firebase.database()
	// getAllClients: async function() {
	// 	let snapshot = await database.ref("/clients/").once('value')
	// 	return await snapshot.val()
	// },
	// newProject: function(projectJSON){
	// 	var newProjectKey = database.ref().child('projects').push().key;
	// 	var updates = {};
	// 	updates["/projects/" + newProjectKey] = projectJSON;
	// 	database.ref().update(updates);

	// 	return newProjectKey;
	// }
}