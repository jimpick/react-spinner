/** @jsx React.DOM */

var React = require('react');
var spinnerCSS = require('statics/spinner.css');

var Spinner = React.createClass({
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
        <div style={barStyle} className={spinnerCSS['.loading-spinner-bar']} />
      );
    }

    return this.transferPropsTo(
      <div className={spinnerCSS['.loading-spinner']}>{bars}</div>
    );
  }
});


// test
React.renderComponent(<Spinner />, document.body);
// useless right now
module.exports = Spinner;
