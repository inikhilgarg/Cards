import Slides from "./Slides";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  const data=[
    {
      "image":"/Frame.svg", 
      "heading":"Numerous free trail courses", 
      "para":"Free courses  for you to find your way of learning",
      "button":"false"
    },
    {
      "image":"illustration.svg", 
      "heading":"Quick and easy learning",
      "para":"Easy and fast learning at any time to help you improve various skills",
      "button":"false"
    },
    {
      "image":"illustration 03.svg", 
        "heading":"Create your own study plan",
        "para":"Study according to the study plan, make study more motivated",
        "button":"true"
    }
  ]
  return (
    <div className="text-white w-full h-full m-auto" style={{backgroundColor:"#1F1F39"}}>  
      <div className="mt-20">
        <Slider {...settings}>
        {data.map((e,index)=><Slides key={index} obj={e}/>)} 
        </Slider>
        
      </div>
    </div>
  )
}