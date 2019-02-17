class Header extends React.Component {
  render() {
      console.log(this.props);
      return (
          <div>
              <h1>abc</h1>
              <h2>aaa</h2>
              
          </div>
      );
  }
}


ReactDOM.render(<Header />, document.getElementById('app'));