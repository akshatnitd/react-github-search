import React from 'react';
import { Link } from 'react-router';
import styles from '../styles';
import Loading from './Loading';
import RepoTemplate from './RepoTemplate';

export default class Results extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  handleChange = (event) => {
    this.props.updateSortBy(event.target.value);
  }



  render() {
    
    if (this.props.isLoading === true) 
      return <Loading />;
    
    else
    {

      return (
        <div className="jumbotron" style={styles.transparentBg}>
          <div className='text-center'>
            <h1>Results</h1>
            <Link to='/search'>
              <button className="btn btn-success">Search Again</button>
            </Link>
          </div>
          
          <div style={{marginLeft: 20}}>
            <h3>{this.props.count} repository results</h3>
            <label for="sel1">Sort By:</label>
            <div className="float-right">
              <select id="sel1" onChange={this.handleChange} >
                <option value={1} >Best Match</option>
                <option value={2}>Stars</option>
                <option value={3}>Forks</option>
                <option value={4}>Watches</option>
                <option value={5}>Name</option>
              </select>
            </div>
          </div>
          
          <hr />

          {this.props.count == 0 ? <p className='text-center'>Sorry, no results found</p> : null} 

          <div className='col-sm-8 col-sm-offset-2'>
            <ul>
              {this.props.repos.map(function(repo) {
                return (<RepoTemplate
                            key={repo.id} 
                            info={repo}
                        />)        
                })
              }                        
            </ul>
          </div>
        </div>
      )
    }
  }
}

