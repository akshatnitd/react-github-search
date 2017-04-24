import React from 'react';
import { Link } from 'react-router';

var styles={
  icon : {
    paddingRight: 5
  }
} 

export default class Repo extends React.Component {
  constructor(props)
  {
    super(props);
    var  val=this.props.location.state;
    this.state = {
      info: val
    }
  }
  
  render(){
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <Link to='/results'><span className="glyphicon glyphicon-arrow-left" style={{color: '#fff'}}></span></Link>
            <h3>{this.state.info.owner.login}/<em>{this.state.info.name}</em></h3>
          </div>
            <div className="panel-body">
              <div className="col-8 pr-3">
                <p className="col-9 d-inline-block text-gray mb-2 pr-4">
                  {this.state.info.description}
                </p>
              </div>

              <p className="col-9 d-inline-block text-gray mb-2 pr-4">
                  <img src={this.state.info.owner.avatar_url} height='20 px' width='20 px' style={styles.icon}/>
                  {this.state.info.owner.login}
              </p>


              <div className="d-table-cell col-2 text-gray pt-2">
              <i className="fa fa-code" aria-hidden="true" style={styles.icon}></i>
                {this.state.info.language}
              </div>

              <div className="col-2 text-right pt-1 pr-3 pt-2">
                <span className="glyphicon glyphicon-star" style={styles.icon}></span>
                  {this.state.info.stargazers_count}
            </div>

            <div className="col-2 text-right pt-1 pr-3 pt-2">
                 <span className="glyphicon glyphicon-eye-open" style={styles.icon}></span>
                  {this.state.info.watchers_count}
            </div>

            <div className="col-2 text-right pt-1 pr-3 pt-2">
                <i className="fa fa-code-fork" aria-hidden="true" style={styles.icon}></i>
                  {this.state.info.forks_count}
            </div>

            <div className="col-2 text-right pt-1 pr-3 pt-2">
                <i className="fa fa-exclamation-circle" aria-hidden="true" style={styles.icon}></i>
                  {this.state.info.open_issues_count}
            </div>

            <a href={this.state.info.html_url} className="btn btn-info" role="button">Github Repo</a>

          </div>
        </div>
      </div>
    )
  } 
}


