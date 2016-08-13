const React = require('react');
const Nav = require('nav');

const Main = props => {
  return (
    <div>
      <h1>Main Component</h1>
      <Nav/>
      {props.children}
    </div>
  );
};

module.exports = Main;
