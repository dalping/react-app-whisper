import axios from 'axios';

const fetcher = async (url: string) =>
  await axios
    .get(url, {
      withCredentials: true,
    })
    // eslint-disable-next-line prettier/prettier
    .then((res) => res.data);

export default fetcher;
