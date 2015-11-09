import React from 'react';

var TodoTable=React.createClass({
    render: function () {
        return (
            <table>
                <thead>
                <tr>
                    <td>name</td>
                    <td>age</td>
                    <td>sex</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>leilihuang</td>
                    <td>25</td>
                    <td>男</td>
                </tr>
                </tbody>
            </table>
        )
    }
});
module.exports=TodoTable;