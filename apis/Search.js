import axios from "axios";

const FetchApiInfo = async (query, location, sort_by) => {
  const options = {
    method: "GET",
    url: "https://red-flower-business-data.p.rapidapi.com/business-search",
    params: {
      query: query,
      location: location,
      sort_by: sort_by,
      start: "0",
      yelp_domain: "yelp.com",
    },
    headers: {
      "x-rapidapi-key": "5c13bf7dd0msh9b75fd392e4a6efp1d203ajsn3ea11e5b77c6",
      "x-rapidapi-host": "red-flower-business-data.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default FetchApiInfo;
