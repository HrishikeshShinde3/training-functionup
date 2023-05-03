import React, { useState, useEffect } from "react";

function App1() {
  const [dogImage, setDogImage] = useState("0");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      });
  }, []);

  return (
    <div>
      <img src={dogImage} alt="Random Image is Here" />
    </div>
  );
}

export default App1;
