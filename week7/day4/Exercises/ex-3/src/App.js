import React from "react";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">Résultats Attendus</h1>

        <section className="bg-white p-6 rounded-xl shadow border">
          <Example1 />
        </section>

        <section className="bg-white p-6 rounded-xl shadow border">
          <Example2 />
        </section>

        <section className="bg-white p-6 rounded-xl shadow border">
          <Example3 />
        </section>
      </div>
    </div>
  );
}

export default App;
