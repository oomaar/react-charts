import axios from "axios";

async function login(userName, password) {
  const response = await axios.post(
    "https://flyworex.azurewebsites.net/api/Authenticate/login",
    { userName, password },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );

  return {
    role: response.data.role,
    token: response.data.token,
    expiration: response.data.expiration,
  };
}

export default login;
