import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from '../../actions/colors.js';
import template from './welcome.template';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'React Starter Template',
    };
  }

  componentDidMount() {
    this.props.generateColor();
  }

  getMessage = () => {
    return this.state.message;
  }

  render() {
    return template.call(this);
  }
}

Welcome.propTypes = {
  color: PropTypes.string,
  generateColor: PropTypes.func,
};

const mapStateToProps = state => ({
  color: state.colors.color,
});

const mapDispatchToProps = dispatch => ({
  generateColor: () => {
    dispatch(api.generateColor());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
