import React from 'react';
import pt from 'prop-types';
import { connect } from 'react-redux';
import { putInStore } from '../../actions/index';
import template from './welcome.template';

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.generateColor();
    this.colorGenerator = setInterval(() => {
      this.props.put('welcome/color', this.generateColor());
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.colorGenerator);
  }

  generateColor = () => {
    const randomNumber = Math.floor(Math.random() * 0xFFFFFF);
    let hexStr = randomNumber.toString(16);
    while (hexStr.length < 6) {
      hexStr = `0${hexStr}`;
    }
    return `#${hexStr}`;
  }

  render() {
    return template.call(this);
  }
}

Welcome.propTypes = {
  color: pt.string,
};

const mapStateToProps = state => ({
  color: state.store['welcome/color'],
});

const mapDispatchToProps = dispatch => ({
  put: (key, value) => dispatch(putInStore(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
