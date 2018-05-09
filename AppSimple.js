import React from 'react';


class Demo extends React.Component {
  state = {foo: ' \u2714'};

  render() {
    const {title} = this.props;
    const {foo} = this.state;
    return (
      <div onClick={e => this.setState({foo: foo + '.'})}>
        {`${title} ${foo}`}
      </div>
    );
  }
}
export default Demo;


