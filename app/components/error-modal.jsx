const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultsProps: function () {
    return {
      title: 'Error'
    };
  },
  componentDidMount: function () {
    const { title, message } = this.props;

    const MODAL_MARKUP = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    const JQUERY_MODAL = $(ReactDOMServer.renderToString(MODAL_MARKUP));
    $(ReactDOM.findDOMNode(this)).html(JQUERY_MODAL);

    const MODAL = new Foundation.Reveal($('#error-modal'));
    MODAL.open();
  },
  render: function () {


    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
