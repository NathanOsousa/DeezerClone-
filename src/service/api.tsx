import axios from 'axios';

export const requestTrendingSongs = async (): Promise<any> => {
  const {data} = await axios.get(
    'https://api.deezer.com/search?q=label="girl"',
  );
  return data;
};

export const requestSearchSongs = async (query: string): Promise<any> => {
  const {data} = await axios.get(`https://api.deezer.com/search?q=${query}`);
  return data;
};
