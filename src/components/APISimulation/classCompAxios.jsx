import { Component } from "react";
import axios from 'axios';

class ExempleAxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        this.setState({ users: res.data });
      })
   .catch((error) => {
    console.error(error);
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExempleAxios;
