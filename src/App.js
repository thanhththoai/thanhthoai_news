
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
import Footer from './components/Footer/Footer';
import { Container } from '@mui/material';


function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(15);
  const [searchTitle, setSearchTitle]= useState("");

//   const newsApi=async() => {
//     const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);
//   setNewsArray(news.data.articles);
//   setNewsResults(news.data.totalResults);
// };
useEffect(() => {
  const newsApi=async() => {
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`)
  .then ((news)=> {
  setNewsArray(news.data.articles);
  setNewsResults(news.data.totalResults);
})
  };
  newsApi();
}, [newsResults,category, loadmore]);


  function search (news) {
    return news.filter(newsItem => 
      newsItem.title.toLowerCase().indexOf(searchTitle)> -1 
    )
  }
  return (
    <div className="App">
      <Container maxWidth="md">
      <div className="Header">
      <img style={{ cursor: "pointer"}}
            src='https://cdn.shortpixel.ai/spai/q_lossy+ret_img/https://demo.tagdiv.com/newspaper/wp-content/uploads/2018/08/logo-header@2x.png'
            height="100%" alt="logo"
            />
      </div>
      </Container>
      <NavInshorts  setCategory={setCategory}/>
      <Container maxWidth="md">
      <div className="boder">
      <input className="search" type="text" value={searchTitle} placeholder="Search News..." onChange={(e) => setSearchTitle(e.target.value)} />
      </div>
      </Container>
     <NewsContent loadmore={loadmore} setLoadmore={setLoadmore} newsArray={search(newsArray)}  newsResults={newsResults}/>
     <Footer />
    </div>
  );
}

export default App;
