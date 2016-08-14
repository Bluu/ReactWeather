const React = require('react');

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
    const MODAL = new Foundation.Reveal($('#error-modal'));
    MODAL.open();
  },
  render: function () {
    const { title, message } = this.props;

    return (
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
  }
});

module.exports = ErrorModal;
