import { useState } from "react"

export default function LikeButton(){

    let [isLiked,setisLiked] = useState(false);
    let [click,setClicks] = useState(0); 
    
    let toggleLike = () =>{
        setisLiked(!isLiked);
        setClicks(click+1);
    }
    

    let styles = {
        color : "red",
    };

    return(
        <div>
            <p> </p>
            <p onClick={toggleLike}> 
                { 
                    isLiked ? <i className="fa-solid fa-heart" style = {styles}></i> : 
                              <i className="fa-regular fa-heart" ></i> 
                }
                &nbsp;{click}
            </p>
        </div>
    )
}