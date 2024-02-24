import React, { useRef, useState } from 'react'
import Image from '../images/Avatar.png';
import { Avatar } from '@mui/material';

export default function ({currentImg, sendImage}) {

    const inputRef = useRef(null);
    const [src, setSrc] = useState(currentImg);

    const handleImage = () => {
        inputRef.current.click();
    }

    const imageChange=(e)=>{
        setSrc(e.target.files[0]);
        sendImage(e);
    }

    return (
        <div onClick={handleImage}>
            <Avatar  sx={{ width: 100, height: 100, mx:'auto' }} src={src!=currentImg ? URL.createObjectURL(src) : currentImg}></Avatar>
            <input type='file' onChange={imageChange} ref={inputRef} style={{ display: 'none' }}></input>
        </div>
    )
}