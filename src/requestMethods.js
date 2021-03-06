import axios from "axios";

const BASE_URL = "https://dinesh-book-api.herokuapp.com";

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjcyYmY3ZjA2YzU4ZDk4ZWI0YzcyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjczNDMzMywiZXhwIjoxNjQ2ODIwNzMzfQ.Pq-MXCeHLpYcIXJyBUriYQ1X8qcNTC38Rt_2n7Ua7Mg";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});
