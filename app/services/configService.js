angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Sudbury',
        'id'            : '115803993493374365281',
        'googleApi'     : 'AIzaSyCZz36CDoUcO7dM16TNDlI6N5vQQ-Lhwfk',
        'pwaId'         : '5915725140705884785', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://gdgsudbury.ca',
        'twitter'       : 'gdgsudbury',
        //'facebook'      : 'gdgspacecoast',
        //'youtube'       : 'UCkiYHK3IZMk5XsYZ626b9Rw',
        'meetup'        : 'GDG-Sudbury',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Google Cloud Platform Next - Extended',
            subtitle: 'Get a concentrated dose of the best from GCP Next, including a ' +
		'technical keynote, one of the best talks from the conference, and one or more codelabs',
            button: {
                text: 'March 13, 2017',
                url: 'http://www.meetup.com/GDG-Sudbury/events/237035902/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            // appClinics: true,
            // panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
