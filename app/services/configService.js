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
            title: 'Hot web technology: Angular 2.0 and Polymer',
            subtitle: "Join us 2016-10-04 @ 7:00 PM to dive into the recently released Angular 2.0 and explore the current state of Polymer",
            button: {
                text: 'RSVP',
                url: 'http://www.meetup.com/GDG-Sudbury/events/234427953/'
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
