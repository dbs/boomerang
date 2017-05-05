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
            title: 'I/O Extended 2017 Sudbury!',
            subtitle: 'Join us as we distill 2.5 days of Web and Android cutting-edge ' +
                'development updates into a few social hours!',
            button: {
                text: 'June 9, 2017',
                url: 'https://www.meetup.com/GDG-Sudbury/events/239341439/'
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
