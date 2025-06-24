import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    return (
      <div className="p-4 border mt-6">
        <h2 className="text-red-600 font-bold mb-2">Exemple 2 Composant</h2>
        {Object.entries(data.Skills).map(([category, skills], index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{category}</h3>
            <ul className="list-disc list-inside">
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
