
import './App.css'
import Accordian from './components/Accordian/Accordian'
import ImageLoader from './components/ImageLoader/ImageLoader'
import ImageSlider from './components/ImageSlider/ImageSlider'
import RandomColor from './components/RandomColorGenerator/RandomColor'
import StarRating from './components/StarRating/StarRating'
import Navigation from './components/RecursiveNavigationMenu'

function App() {


  return (
    <>
    
     
      <Accordian/>
      <RandomColor/>
      <StarRating/>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
      <ImageLoader url={"https://dummyjson.com/products"} limit={20} skip={20}/>
      <Navigation/>
 
    
     
    </>
  )
}

export default App
