import React from 'react';

var names=['lei','li','huang','ssdss','ddDDD','sSSSs','ssss'];
var Greet=React.createClass({
    render: function () {
        return <h1>Hello {this.props.name}</h1>;
    }
});
React.render(
    <Greet name="leilihuang" />,
    document.body
)