define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'lamp/index' + location.search,
                    add_url: 'lamp/add',
                    edit_url: 'lamp/edit',
                    del_url: 'lamp/del',
                    multi_url: 'lamp/multi',
                    table: 'lamp',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'device_id', title: __('Device_id')},
                        {field: 'temp', title: __('Temp')},
                        {field: 'humidity', title: __('Humidity')},
                        {field: 'illumination', title: __('Illumination')},
                        {field: 'pm2_5', title: __('Pm2_5')},
                        {field: 'pm10', title: __('Pm10')},
                        {field: 'noise', title: __('Noise')},
                        {field: 'version', title: __('Version')},
                        {field: 'session_id', title: __('Session_id')},
                        {field: 'create_time', title: __('Create_time'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'update_time', title: __('Update_time'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});