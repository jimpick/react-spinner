/** @jsx React.DOM */

var React = require('react');
var spinnerCSS = require('statics/spinner.css');

var Spinner = React.createClass({displayName: 'Spinner',
  render: function() {
    var bars = [];
    var barStyle;

    for (var i = 0; i < 12; i++) {
      barStyle = {};
      barStyle.WebkitAnimationDelay =
        barStyle.animationDelay = (i - 12) / 10 + 's';

      barStyle.WebkitTransform =
        barStyle.transform = 'rotate(' + (i * 30) + 'deg) translate(9.5px)';

      bars.push(
        React.DOM.div( {style:barStyle, className:spinnerCSS['.loading-spinner-bar']} )
      );
    }

    return this.transferPropsTo(
      React.DOM.div( {className:spinnerCSS['.loading-spinner']}, bars)
    );
  }
});


// test
React.renderComponent(Spinner(null ), document.body);
// useless right now
module.exports = Spinner;
