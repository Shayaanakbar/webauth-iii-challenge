import React from 'react';
import api from './helpers/api';

class Signup extends React.Component {
  state = {
    department: '',
    username: '',
    password: '',
  }


  handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const { department, username, password } = this.state

      const result = await api.post('/auth/register', {
          department,
        username,
        password,
      })

      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }


  render() {
    return (
      <div>
        <h3>Sign Up</h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="department" placeholder="department" onChange={this.handleChange} value={this.state.department} />
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
          <input type="password" name="password" placeholder="Password"  onChange={this.handleChange} value={this.state.password} />
          <button type="submit">Signup</button>
        </form>
      </div>
    )
  }
}

export default Signup