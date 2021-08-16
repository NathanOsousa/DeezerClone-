import axios from 'axios';

export const requestTrendingSongs = async (): Promise<any> => {
  const {data} = await axios.get(
    'https://api.deezer.com/search?q=label="song"',
  );
  return data;
};
