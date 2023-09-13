import axios from "axios";

const endpoint = {
  search: "https://arda.torre.co/entities/_searchStream"
}

const getUsers = (payload) => {
    const config = {
      method: "POST",
      url: endpoint.search,
      data: payload,
      withCredentials: false,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config);
  };


  const torreService = { getUsers };
  
  export default torreService;