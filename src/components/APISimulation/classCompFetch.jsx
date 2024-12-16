import { Component } from "react";

class ExempleFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };
    getData().then((users) => this.setState({users: users}));
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

export default ExempleFetch;
