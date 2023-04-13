import Button from "./components/Button"
import DividerImage from './assets/pattern-divider-desktop.svg'
import { useEffect, useState } from "react"

function App() {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(true)


  const getQuote = () => {
    setLoading(true)
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      setQuote(data.slip)
      setLoading(false)
    })
  }


  useEffect(() => {
    getQuote()
  }, [])


  return (
    <div className="app">
      <div className="container">
      {!loading ?
      <>
        <p className="adviceNumber">Advice #{quote.id}</p>
        <h2 className="quote">"{quote.advice}"</h2>
        <div className="divider">
        <img src={DividerImage} />
      </div>
      </>
    :
    <div className="spinnerContainer">
      <span className="loader"></span>
    </div>
    }
      <Button onClick={getQuote} />
      </div>
    </div>
  )
}

export default App
