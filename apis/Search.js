import axios from "axios";

const FetchApiInfo = async () => {
  const options = {
    method: "GET",
    url: "https://red-flower-business-data.p.rapidapi.com/business-search",
    params: {
      query: "Beef Burgers",
      location: "San Francisco, CA, USA",
      sort_by: "RECOMMENDED",
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
    //const firstinfo = response.data.data[0];
   //console.log(firstinfo.name);
    //console.log(firstinfo.alias);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default FetchApiInfo;
