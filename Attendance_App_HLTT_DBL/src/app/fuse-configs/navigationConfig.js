
const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Menu',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'Information-component',
                'title': 'Employee Information',
                'type' : 'item',
                'icon' : 'info',
                'url' : '/Information/'
                
            },
            {
                'id'   : 'Getdata-component',
                'title': 'Attendance Report',
                'type' : 'item',
                'url' : '/Getdata/',
                'icon' : 'assessment',
            },
            {
                'id'   : 'Settingtime-component',
                'title': 'Setting',
                'type' : 'item',
                'url' : '/Settingtime/',
                'icon' : 'settings',
            },
            {
                'id'   : 'Record-component',
                'title': 'Attendance Record',
                'type' : 'item',
                'url' : '/Record/',
                'icon' : 'library_books',
            }
        ]
    }
];
export default navigationConfig;
