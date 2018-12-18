const React = require("react");

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">
      Your browser does not support JavaScript, which this site needs to load
      properly!
    </noscript>,
  ]);
};
