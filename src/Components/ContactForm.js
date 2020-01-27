import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', subject:'', email:'', message:'', errorField:'', submitted:false};
  
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
      if(this.state.errorField === 'Name') {
        this.setState({errorField:''});
      }
        this.setState({name: event.target.value});
    }
    handleSubjectChange(event) {
      if(this.state.errorField === 'Subject') {
        this.setState({errorField:''});
      }
        this.setState({subject: event.target.value});
    }
    handleEmailChange(event) {
      if(this.state.errorField === 'Email') {
        this.setState({errorField:''});
      }
        this.setState({email: event.target.value});
    }
    handleMessageChange(event) {
      if(this.state.errorField === 'Message') {
        this.setState({errorField:''});
      }
        this.setState({message: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();

        if(!this.state.name) {

          this.setState({errorField:'Name'});
          return;
        } 
        else if(!this.state.email) {

          this.setState({errorField:'Email'});
          return;
        }
        else if(!this.state.subject) {

          this.setState({errorField:'Subject'});
          return;
        }
        else if(!this.state.message) {

          this.setState({errorField:'Message'});
          return;
        }
        else {
          this.setState({submitted:true});
          this.setState({errorField:''});
        }
            
    
        axios.post(`https://r0l585t5s5.execute-api.us-east-2.amazonaws.com/test/contactme`,  this.state ).then(res => {
            console.log(res);
            
            console.log(this.state)
        });

    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
          {this.state.errorField ? <p className="error">Please provide a{this.state.errorField === "Email" ? 'n' : ''}  {this.state.errorField}.</p> : null}
            <div className="row">
              <input className={"half " + (this.state.errorField === "Name" ? "error" : "")} placeholder="Name" type="text" value={this.state.name} onChange={this.handleNameChange} />
              <input className={"half " + (this.state.errorField === "Email" ? "error" : "")} placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div className="row">
              <input className={(this.state.errorField === "Subject" ? "error" : "")} placeholder="Subject" type="text" value={this.state.subject} onChange={this.handleSubjectChange} />
            </div>
            <div className="row tall">
              <textarea className={(this.state.errorField === "Message" ? "error" : "")} placeholder="Message" type="text" value={this.state.message} onChange={this.handleMessageChange} />
            </div>
            <div className="row">
              <input disabled={this.state.submitted} type="submit" value={this.state.submitted ? "Message Sent":"Send"} />
            </div>


        </form>
      );
    }
  }

  export default ContactForm;