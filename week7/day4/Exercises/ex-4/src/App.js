import React from "react";

function App() {
  const handlePostData = async () => {
    const url  = "https://webhook.site/8b5d3e3a-45e0-4f0d-a3cd-6a4d8574f4b1";


    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Réponse reçue :", response);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6">Envoyer des données JSON</h1>
      <button
        onClick={handlePostData}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
      >
        Press me to post some data
      </button>
    </div>
  );
}

export default App;
