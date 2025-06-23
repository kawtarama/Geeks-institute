
import React, { Component } from 'react';


class FormComponent extends Component {
  render() {
    const { formData, handleChange, handleSubmit } = this.props;

    return (
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Form Section */}
        <div style={{ 
          backgroundColor: '#8B4513', 
          color: 'white', 
          padding: '15px', 
          marginBottom: '0' 
        }}>
          <h2 style={{ margin: '0', fontSize: '24px' }}>Sample form</h2>
        </div>
        
        <div style={{ 
          backgroundColor: '#DEB887', 
          padding: '20px',
          minHeight: '400px'
        }}>
          <div>
            {/* First Name */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                width: '50%',
                padding: '8px',
                marginBottom: '10px',
                border: '2px solid #8B4513',
                fontSize: '14px'
              }}
            />
            <br />

            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                width: '50%',
                padding: '8px',
                marginBottom: '10px',
                border: '2px solid #8B4513',
                fontSize: '14px'
              }}
            />
            <br />

            {/* Age */}
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              style={{
                width: '50%',
                padding: '8px',
                marginBottom: '15px',
                border: '2px solid #8B4513',
                fontSize: '14px'
              }}
            />
            <br />

            {/* Gender Radio Buttons */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Male
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Female
              </label>
            </div>

            {/* Destination Selector */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Select your destination
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                style={{
                  padding: '8px',
                  border: '2px solid #8B4513',
                  fontSize: '14px',
                  backgroundColor: 'white'
                }}
              >
                <option value="">-- Please Choose a destination --</option>
                <option value="Japan">Japan</option>
                <option value="Thailand">Thailand</option>
                <option value="Brazil">Brazil</option>
                <option value="Norway">Norway</option>
              </select>
            </div>

            {/* Dietary Restrictions */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Dietary restrictions:
              </label>
              
              <label style={{ display: 'block', marginBottom: '5px', marginLeft: '20px' }}>
                <input
                  type="checkbox"
                  name="nutsFree"
                  checked={formData.nutsFree}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Nuts free
              </label>
              
              <label style={{ display: 'block', marginBottom: '5px', marginLeft: '20px' }}>
                <input
                  type="checkbox"
                  name="lactoseFree"
                  checked={formData.lactoseFree}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Lactose free
              </label>
              
              <label style={{ display: 'block', marginBottom: '10px', marginLeft: '20px' }}>
                <input
                  type="checkbox"
                  name="vegan"
                  checked={formData.vegan}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Vegan
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              style={{
                padding: '10px 20px',
                backgroundColor: '#D3D3D3',
                border: '2px solid #8B4513',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Entered Information Section */}
        <div style={{ 
          backgroundColor: '#2F4F4F', 
          color: 'white', 
          padding: '15px',
          marginTop: '0'
        }}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '24px' }}>Entered information:</h2>
          
          <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
            <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>
              Your name: <span style={{ fontWeight: 'bold' }}>
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            
            <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>
              Your age: <span style={{ fontWeight: 'bold' }}>{formData.age}</span>
            </div>
            
            <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>
              Your gender: <span style={{ fontWeight: 'bold' }}>{formData.gender}</span>
            </div>
            
            <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>
              Your destination: <span style={{ fontWeight: 'bold' }}>{formData.destination}</span>
            </div>
            
            <div style={{ fontStyle: 'italic', marginBottom: '10px' }}>
              Your dietary restrictions:
            </div>
            
            <div style={{ marginLeft: '20px' }}>
              <div>**Nuts free : {formData.nutsFree ? 'Yes' : 'No'}</div>
              <div>**Lactose free : {formData.lactoseFree ? 'Yes' : 'No'}</div>
              <div>**Vegan meal : {formData.vegan ? 'Yes' : 'No'}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormComponent;