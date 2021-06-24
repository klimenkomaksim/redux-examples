import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter'

class Counter extends Component {
	_handleDecrement = () => {
		this.props.decrement();
	}

	_handleIncrement = () => {
		this.props.increment();
	}

	render () {
		const { count } = this.props;
		
		return (
			<div>
				<button onClick={this._handleDecrement}>Decrement</button>
					<p>{count}</p>
				<button onClick={this._handleIncrement}>Increment</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		count: state.counter.count,
	};
}

const mapActionToProps = {
	increment,
	decrement,
};

export default connect(mapStateToProps, mapActionToProps)(Counter);
