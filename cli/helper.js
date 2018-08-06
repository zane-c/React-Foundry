/* eslint-disable */
module.exports = {

  generateControllerText: function (camelCaseName, kababCaseName) {
    return `import React from 'react';
import pt from 'prop-types';
import { connect } from 'react-redux';
import { putInStore } from '../../actions/index';
import template from './${kababCaseName}.template';

/* TODO: Add component to a route in index.jsx */
export class ${camelCaseName} extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  foobar = () => {
  }

  render() {
    return template.call(this);
  }
}

${camelCaseName}.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  put: (key, value) => dispatch(putInStore(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(${camelCaseName});
`;
  },

  generateTemplateText: function (camelCaseName, kababCaseName) {
    return `import React from 'react';
import styles from './${kababCaseName}.scss';

export default function () {
  return (
    <div className={styles.container}>

    </div>
  );
}
`;
  },

  generateSpecText: function (camelCaseName, kababCaseName) {
    return `/* eslint-disable */
import React from 'react';
import { ${camelCaseName} } from './${kababCaseName}.controller';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('[${camelCaseName}]', () => {
  let ctrl;
  let props = {};

  beforeEach(() => {
    ctrl = shallow(<${camelCaseName} />).instance();
  });

  it('should have the component controller defined', () => {
    expect(ctrl).toBeDefined();
  });
});    
`;
  },

  generateStyleText: function () {
    return `.container {
}
`;
  }
}
