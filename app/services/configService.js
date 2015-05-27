angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Sudbury',
        'id'            : '115803993493374365281',
        'googleApi'     : 'AIzaSyCZz36CDoUcO7dM16TNDlI6N5vQQ-Lhwfk',
        'pwaId'         : '5915725140705884785', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://gdgsudbury.ca',
        //'twitter'       : 'gdgspacecoast',
        //'facebook'      : 'gdgspacecoast',
        'meetup'        : 'GDG-Sudbury',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
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
