
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from './Components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(()=>{
     fetch('https://newsapi.org/v2/everything?q=apple&from=2021-09-27&to=2021-09-27&sortBy=popularity&apiKey=4c96ca42fee747a996d5b7146b3c66b7')
     .then(res => res.json())
     .then(data =>  setNews(data.articles))
  },[]);
  return (
   news.length === 0 ? <Spinner animation="grow" /> : <Row xs={2} md={3} className="g-4">
   {news.map(nw => <News news={nw}></News>)}
    </Row> 
  );
}

export default App;
