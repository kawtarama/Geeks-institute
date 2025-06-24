import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
  render() {
    return (
      <div className="p-4 border mt-6">
        <h2 className="text-red-600 font-bold mb-2">Exemple 3 Composant</h2>
        {data.Experiences.map((exp, index) => (
          <div key={index} className="border p-3 mb-4 rounded shadow-sm">
            <img src={exp.image} alt="experience" className="w-32 h-32 object-cover mb-2" />
            <h3 className="font-semibold text-lg">{exp.title}</h3>
            <p className="italic">{exp.role}</p>
            <p>{exp.date} - {exp.location}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
