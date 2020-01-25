import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', subject:'', email:'', message:''};
  
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleSubjectChange(event) {
        this.setState({subject: event.target.value});
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }
  
    handleSubmit(event) {
        alert('Form was submitted: ' + this.state);
        event.preventDefault();

            
    
        axios.post(`https://ko8vvaokf1.execute-api.us-east-2.amazonaws.com/1`,  this.state ).then(res => {
            console.log(res);
            console.log(res.data);
        });

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          </label>
          <label>
            Subject:
            <input type="text" value={this.state.subject} onChange={this.handleSubjectChange} />
          </label>
          <label>
            Message:
            <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default ContactForm;