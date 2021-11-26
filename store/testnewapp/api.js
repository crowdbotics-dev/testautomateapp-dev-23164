import axios from "axios"
import {} from "react-native-dotenv"
const testnewapp = axios.create({
  baseURL: "https://crowdbotics-slack-dev.herokuapp.com/admin/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
