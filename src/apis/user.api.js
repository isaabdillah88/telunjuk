import axios from "axios";

export default axios.create({
  baseURL: "https://dummyapi.io",
  headers: {
    "app-id": "622f1d7b5b66a58cc5964b32",
  },
});
