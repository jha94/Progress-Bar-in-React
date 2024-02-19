import React, {useState, useEffect} from 'react'
import './ProgressBar.css'
const ProgressBar = () => {
    const [width, setWidth] = useState(0);
    useEffect(()=>{
        let timer;
        if(width<10){
            timer = setInterval(()=>{
                setWidth(width+1)
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [width])
  return (
    <div class="commonStyle parentDivStyle" >
        <div class="commonStyle childDivStyle" style={{
            width:`${width*40}px`
        }}>
            {width?<p>{width*10}%</p>:''}
        </div>
    </div>
  )
}

export default ProgressBar