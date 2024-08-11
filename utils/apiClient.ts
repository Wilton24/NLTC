import axios from "axios"

export const baseURL = axios.create({
  baseURL: process.env.BACKEND_URL,
})