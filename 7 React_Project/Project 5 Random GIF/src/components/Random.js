import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {
  const [gif, setGif] = useState('');

  async function fetchData() {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const response = await axios.get(url);
      const data = response.data.data; // Access the `data` field in the API response
      setGif(data.images.downsized_large.url); // Update the gif state with the URL
    } catch (error) {
      console.error('Error fetching the GIF:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clkHandler() {
    fetchData();
  }

  return (
    <div className='bg-green-400 h-[50vh] flex flex-col rounded-md justify-center relative w-[50%] m-auto'>
      <p className='capitalize text-center p-3 font-bold text-xl'>A Random GIF</p>
      {gif ? (
        <img src={gif} alt="Random GIF" width={450} />
      ) : (
        <p className='text-center'>Loading...</p>
      )}
      <button
        onClick={clkHandler}
        className='font-bold bg-white m-auto w-[90%] rounded'
      >
        Generate
      </button>
    </div>
  );
}
