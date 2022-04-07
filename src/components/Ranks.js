import React from 'react';

class RankList extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' {(new Date()).toLocaleTimeString()} </h1>;
  }
}
export default RankList;