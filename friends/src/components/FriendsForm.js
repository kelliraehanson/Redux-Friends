import React from 'react';

class FriendsForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: '',
        email: '',
    };
}

changeHandler = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

submitHandler = event => {
    event.preventDefault();
    this.props.addFriends(this.state);
};

deleteFriend = event => {
    event.preventDefault();
    this.props.deleteFriend(event.target.name);
}

render() {
    return (
        <div>
            <h2>ADD A NEW FRIEND:</h2>
            <form onSubmit={this.submitHandler}>
            <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="NAME..." />
            <br></br>

            <input
            onChange={this.changeHandler}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="AGE..." />
            <br></br>

            <input 
            onChange={this.changeHandler}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="EMAIL..." />
            <br></br>

            <button className="buttonForm">ADD FRIEND</button>
            
            </form>
        </div>
    );
}
}

export default FriendsForm;