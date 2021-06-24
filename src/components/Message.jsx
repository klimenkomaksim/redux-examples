import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestMessage, clearMessage } from '../actions/message'

class Message extends Component {
	_handleFetch = () => {
		this.props.requestMessage();
	}

	_handleClear = () => {
		this.props.clearMessage();
	}

	render () {
		const { message } = this.props;
		
        return (
			<div>
				<button onClick={this._handleFetch}>Fetch Message</button>
					<p>{message}</p>
				<button onClick={this._handleClear}>Clear Message</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		message: state.message.message,
	};
}

const mapActionToProps = {
	requestMessage,
	clearMessage,
};

export default connect(mapStateToProps, mapActionToProps)(Message);
