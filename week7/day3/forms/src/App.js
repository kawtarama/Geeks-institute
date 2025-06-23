
import React, { Component } from 'react';
import FormComponent from './FormComponent.js'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      nutsFree: false,
      lactoseFree: false,
      vegan: false
    };
  }

  // handleChange function that gets event.target inputs and checks checkbox states
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    // Use ternary operator to check if it's a checkbox or regular input
    const inputValue = type === 'checkbox' ? checked : value;
    
    this.setState({
      [name]: inputValue
    });
  };

  // Handle form submission
  handleSubmit = () => {
    // Create URL parameters from form data
    const params = new URLSearchParams();
    
    // Add all form fields to URL params
    if (this.state.firstName) params.append('firstName', this.state.firstName);
    if (this.state.lastName) params.append('lastName', this.state.lastName);
    if (this.state.age) params.append('age', this.state.age);
    if (this.state.gender) params.append('gender', this.state.gender);
    if (this.state.destination) params.append('destination', this.state.destination);
    
    // Add checkboxes only if they're checked
    if (this.state.nutsFree) params.append('nutsFree', 'on');
    if (this.state.lactoseFree) params.append('lactoseFree', 'on');
    if (this.state.vegan) params.append('vegan', 'on');
    
    // Update URL with form data
    const newUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
    
    console.log('Form submitted with data:', this.state);
    console.log('URL:', newUrl);
  };

  render() {
    return (
      <div>
        <FormComponent
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;