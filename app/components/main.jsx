const React = require('react');
const Nav = require('nav');

const Main = props => {
  return (
    <div>
      <Nav/>
      {props.children}
    </div>
  );
};

module.exports = Main;
