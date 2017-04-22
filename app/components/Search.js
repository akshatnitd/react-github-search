
var transparentBg = require('../styles').transparentBg;
import React from 'react';
import { Link } from 'react-router';

const styles = {
   borderMargin: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1000,
    marginTop: 10,
  }
};

export default class Search extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      searchText: ''
    }
  }

  componentDidMount = () => {
      document.getElementById('search_input').addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13)
        {
          document.getElementById("search_btn").click();
        }
    });  
  };

  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {

    sessionStorage.clear();

      return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
          <h1>Search for repo</h1>
          <div className="col-sm-12">
              <div className="form-group">
                <input
                  className='form-control'
                  onChange={this.handleInputChange}
                  placeholder='Search for any github repo using keywords'
                  type='text'
                  id='search_input'
                  value={this.state.searchText} />
              </div>
              <div className="form-group col-sm-4 col-sm-offset-4">
                <Link to={{ pathname: '/results', state: this.state.searchText}} >
                  <a
                    id="search_btn"
                    className="btn btn-block btn-success"
                    role='button'>
                      Continue
                  </a>
                </Link>
              </div>
          </div>
        </div>
      );
    }
};

