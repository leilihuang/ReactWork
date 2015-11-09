import React from 'react';
import Form from './../service/TodeForm.jsx';
import Table from './../service/TodoTable.jsx';

var Todo=React.createClass({
    render: function () {
        return (
            <div>
                <Form/>
                <Table/>
            </div>
        )
    }
});

module.exports=Todo;
