import React from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

export default class ResultsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      repos: []
    }
  }

  updateSort = (choice) => {

    var data=JSON.parse(sessionStorage.getItem('data'));

    if(choice == 1)
    { 
      data=JSON.parse(localStorage.getItem('data_best'));
     
    }
    else if(choice == 2)
    {
       data.sort(function(a, b) {
        return parseInt(b.stargazers_count) - parseInt(a.stargazers_count);
      });
    }
    else if(choice == 3)
    {
      data.sort(function(a, b) {
        return parseInt(b.forks_count) - parseInt(a.forks_count);
      });
    }
    else if(choice == 4)
    {
      data.sort(function(a, b) {
        return parseInt(b.watchers_count) - parseInt(a.watchers_count);
      });
    }
    else if(choice == 5)
    {
      data.sort(function IHaveAName(a, b) { // non-anonymous as you ordered...
        return b.name < a.name ?  1 
          : b.name > a.name ? -1 
          : 0;                   
      });
    }

    this.setState({
      repos: data 
    });
  };

  componentDidMount = () => {
    
    if(sessionStorage.getItem('data'))
    {
      var data=JSON.parse(sessionStorage.getItem('data'));
      var count=parseInt(sessionStorage.getItem('count'));
      this.setState({
          repos: data,
          count: count,
          isLoading: false
        })
    }

    else
    {
      githubHelpers.getRepos(this.props.location.state)
      .then( (ans) => {

        sessionStorage.setItem('data', JSON.stringify(ans.data.items));
        sessionStorage.setItem('data_best', JSON.stringify(ans.data.items));
        sessionStorage.setItem('count', JSON.stringify(ans.data.total_count));
        
        this.setState({
          repos: ans.data.items,
          count: ans.data.total_count,
          isLoading: false
        })
      });
    }
  }

  render() {

    return (
      <Results
        isLoading={this.state.isLoading}
        repos={this.state.repos} 
        count={this.state.count}
        updateSortBy={this.updateSort.bind(this)}
      />
    )
  }
}
