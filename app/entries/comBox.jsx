import React from 'react';
import ComList from './../service/comList.jsx';
import ComForm from './../service/comForm.jsx';

var ComBox=React.createClass({
    render: function () {
        return (
            <div className="comBox">
                <h1>comments</h1>
                <ComList />
                <ComForm />
            </div>
        );
    }
});
React.render(
   <ComBox />,
    document.body
);
