import React, { Component } from 'react';
import data from './data.json';

class Example1 extends Component {
  render() {
    return (
      <div className="p-4 border">
        <h2 className="text-red-600 font-bold mb-2">Exemple 1 Composant</h2>
        <ul className="list-disc list-inside">
          {data.SocialMedias.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
