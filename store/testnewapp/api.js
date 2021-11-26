import axios from "axios"
import {
  TEST_NEW_APP_USERNAME,
  TEST_NEW_APP_PASSWORD
} from "react-native-dotenv"
const testnewapp = axios.create({
  baseURL: "https://crowdbotics-slack-dev.herokuapp.com/admin/",
  auth: { username: TEST_NEW_APP_USERNAME, password: TEST_NEW_APP_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
