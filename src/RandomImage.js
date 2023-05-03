import { useState, useEffect } from 'react';

function RandomImage() {
  const [image, setImage] = useState('https://images.pexels.com/photos/3177388/pexels-photo-3177388.jpeg?auto=compress&cs=tinysrgb&w=800');

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      setImage(response.url);
    }
    fetchImage();
  }, []);

  return (
    <img src={image} alt="Random Image" />
  );
}

export default RandomImage;
