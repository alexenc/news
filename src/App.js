import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Form from "./components/Form"
import NewsList from "./components/NewsList"

function App() {

  //define category
  const [category, setCategory] = useState('')

  const [news, setNews] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=86bec853a7894bf4a37b35503a990779`

      const response = await fetch(url)
      const news = await response.json()
      setNews(news.articles)
    }
    apiCall()
  }, [category])

  return (
    <>
      <Header
        title="News search engine"
      />

      <div className="container white">
        <Form
          setCategory={setCategory}
        />

        <NewsList
          news={news}
        />
      </div>
    </>
  );
}

export default App;
