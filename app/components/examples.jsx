const React = require('react');
const { Link } = require('react-router');

const Examples = props => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to tye out:</p>
      <ol>
        <li>
          <Link to="/?location=Hermosillo">Hermosillo, SON</Link>
        </li>
        <li>
          <Link to="/?location=San Miguel de Allende">San Miguel de Allende, GTO</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
