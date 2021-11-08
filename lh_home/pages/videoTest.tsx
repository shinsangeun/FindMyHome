import React, {useState, useEffect} from "react";
import ReactPlayer from 'react-player/lazy';

const videoTest = () => {
    const [index, setIndex] = useState(0);
    const [playList, setPlayList] = useState(null);

    useEffect(() => {
        // @ts-ignore
        setPlayList({index:1, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'})
    })

    if(playList === null){
        return <p>Loading...</p>
    }else{
        return <Video playList={playList} index={index}/>
    }

}

// @ts-ignore
const Video = ({playList, index}) => {
    const handleVideo = () => {
        // index + 1;
    }

    return (
        <>
            <h2>플레이어 테스트</h2>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={playList.url}
                    width='800px'
                    height='500px'
                    playing={true}
                    muted={true}
                    controls={true}
                    light={false}
                    pip={true}
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}
                    onEnded={() => handleVideo()}
                />
            </div>
        </>
    )
}

export default videoTest;