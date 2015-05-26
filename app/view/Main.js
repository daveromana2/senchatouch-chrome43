Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.List'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Example',
                iconCls: 'home',
                xtype: 'list',
                itemTpl: '{name}',
                store: Ext.create('Ext.data.Store', {
                    fields: ['name'],
                    data: [
                        { name: 'Lee Boonstra' },
                        { name: 'Max Rahder' },
                        { name: 'Kevin Jackson' },
                        { name: 'Christopher Rodes'},
                        { name: 'Danny McLaughlin' },
                        { name: 'Simon Brunel' },
                        { name: 'Rob Doughan' },
                        { name: 'Vitaly Kravchenko' },
                        { name: 'Andrea Cammarata' },
                        { name: 'Steffen Hiller' },
                        { name: 'Lee Boonstra' },
                        { name: 'Max Rahder' },
                        { name: 'Kevin Jackson' },
                        { name: 'Christopher Rodes'},
                        { name: 'Danny McLaughlin' },
                        { name: 'Simon Brunel' },
                        { name: 'Rob Doughan' },
                        { name: 'Vitaly Kravchenko' },
                        { name: 'Andrea Cammarata' },
                        { name: 'Steffen Hiller' },
                        { name: 'Lee Boonstra' },
                        { name: 'Max Rahder' },
                        { name: 'Kevin Jackson' },
                        { name: 'Christopher Rodes'},
                        { name: 'Danny McLaughlin' },
                        { name: 'Simon Brunel' },
                        { name: 'Rob Doughan' },
                        { name: 'Vitaly Kravchenko' },
                        { name: 'Andrea Cammarata' },
                        { name: 'Steffen Hiller' },           
                    ]
                })
            }
        ]
    }
});
