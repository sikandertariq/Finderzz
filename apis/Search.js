import axios from "axios";

const FetchSearch = async () => {
  const options = {
    method: "GET",
    url: "https://local-business-data.p.rapidapi.com/search",
    params: {
      query: "Hotels in San Francisco, USA",
      limit: "20",
      lat: "37.359428",
      lng: "-121.925337",
      zoom: "13",
      language: "en",
      region: "us",
    },
    headers: {
      "x-rapidapi-key": "5c13bf7dd0msh9b75fd392e4a6efp1d203ajsn3ea11e5b77c6",
      "x-rapidapi-host": "local-business-data.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default FetchSearch;
