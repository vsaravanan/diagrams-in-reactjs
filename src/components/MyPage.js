import React, {Component} from 'react';


const USERS_URL = 'https://example.com/api/users';
const testurl = 'https://reqres.in/api/users?page=2';
const third = 'https://hn.algolia.com/api/v1/search?query=redux';

export default class MyPage extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: null,
        };
      }
     
      componentDidMount() {
        fetch(testurl)
          .then(response => response.json())
          .then(data => this.setState({ data }));

      }

      render() {
        const { data } = this.state;
        debugger

        return (
          <div>
                {data}
          </div>
        );
      }      
}
