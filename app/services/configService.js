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
        'meetup'        : 'GDG-Sudbury',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Women in Technology Event',
            subtitle: "Join us on March 15th from 5:00 PM to 9:00 PM to discuss women in technology: with a talk from a female CTO, Sarah Paajanen, a codelab lead by Sudbury's chapter of Ladies Learning Code and a game demo from some local students.",
            button: {
                text: 'RSVP',
                url: 'https://www.eventbrite.ca/e/women-in-technology-tickets-22046396365'
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
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
