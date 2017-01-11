var permTable = new Vue({
    el: '#permission-table',
    data: {
        permissions: [
            { title: 'Finn', accessType: 4},
            { title: 'Stuart', accessType: 0},
            { title: 'Quyen', accessType: 2}
        ],
        accessTypes: [
            { title: 'No access', value: 0 },
            { title: 'View', value: 1 },
            { title: 'Download', value: 2 },
            { title: 'Edit', value: 3 },
            { title: 'Manage', value: 4 }
        ]
    }
});
