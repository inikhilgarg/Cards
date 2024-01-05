import Button from "./Button"


// eslint-disable-next-line react/prop-types
export default function Slides({obj}){
    const bg="#1F1F39";
    // eslint-disable-next-line react/prop-types
    const {image,heading,para,button}=obj;
    return (
        <div className="h-auto" style={{backgroundColor:bg}}>
            <div className="p-8" >
            {button=="false"?<p className="text-right cursor-pointer">Skip</p>:<></>}
            <div className="flex justify-center items-center h-64">
                <img src={image} alt="" />
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-bold">{heading}</h2>
                <p className="text-xl">{para}</p>
            </div>
            <div className="pt-auto m-8">
                {button=="true" ? <Button /> :<></>}
            </div> 
            </div>
        </div>
    )
}