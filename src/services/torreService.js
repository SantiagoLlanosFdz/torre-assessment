import axios from "axios";

const endpoint = {
  search: "http://arda.torre.co/entities/_search"
}

const getUsers = (payload) => {
    const config = {
      method: "POST",
      url: endpoint.search,
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config);
  };
  
  const torreService = { getUsers };
  
  export default torreService;