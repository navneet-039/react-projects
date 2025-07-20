
import './App.css'
import Accordian from './components/Accordian/Accordian'
import ImageSlider from './components/ImageSlider/ImageSlider'
import RandomColor from './components/RandomColorGenerator/RandomColor'
import StarRating from './components/StarRating/StarRating'

function App() {


  return (
    <>
    
     
      <Accordian/>
      <RandomColor/>
      <StarRating/>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
 
    
     
    </>
  )
}

export default App
