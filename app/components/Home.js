var React = require('react');
import { Link } from 'react-router';
var styles = require('../styles');

export default class Home extends React.Component {
  render () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Github Repo Search</h1>
        <p className='lead'>Let's get started!</p>
        <Link to='/search'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
}
