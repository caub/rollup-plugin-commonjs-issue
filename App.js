import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  '@global': {
    body: {
      margin: 0,
    },
    '*': {
      boxSizing: 'border-box',
    },
  },
  root: {
    backgroundColor: 'rebeccapurple',
    height: '50vh',
    fontSize: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'brightness(4)',
  }
};

class Demo extends React.Component {
  state = { foo: ' \u2714' };

  render() {
    const { classes, title } = this.props;
    const { foo } = this.state;
    return (
      <div className={classes.root} onClick={e => this.setState({ foo: foo + '.' })}>
        {`${title} ${foo}`}
      </div>
    );
  }
}
export default injectSheet(styles)(Demo);


