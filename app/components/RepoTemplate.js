import React from 'react';
import { Link } from 'react-router';

export default class RepoTemplate extends React.Component {
  constructor(props)
  {
    super(props);
  }
  
  render(){
    return (
      <div>
        <div className="col-8 pr-3">
          <Link to = {{ pathname : '/results/'+this.props.info.full_name , state : this.props.info }}>
            <h3>{this.props.info.owner.login}/<em>{this.props.info.name}</em></h3>
          </Link>

          <p className="col-9 d-inline-block text-gray mb-2 pr-4">
            {this.props.info.description}
          </p>
        </div>

        <div className="d-table-cell col-2 text-gray pt-2">
          {this.props.info.language}
        </div>

        <div className="col-2 text-right pt-1 pr-3 pt-2">
          <svg aria-label="star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
            {this.props.info.stargazers_count}
        </div>
        <hr />
      </div>
    )
  } 
}


