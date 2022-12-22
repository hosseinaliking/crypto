import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  headers: {
    'X-RapidAPI-Key': 'bffcb531a6mshcc5efb8523aab47p1814ccjsnd19e18201e12',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

const getCoinsData = async () => {
  return await axios(options)
}

export default getCoinsData;
