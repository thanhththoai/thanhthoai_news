import axios from "axios";
import apikey from "../data/config";


export const getNews = (apiKey, category, loadmore) =>
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);