import React from "react";
import ReactPlayer from 'react-player/lazy';


const videoTest = () => {
    return (
        <>
            <h2>플레이어 테스트</h2>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    width='800px'
                    height='500px'
                    playing={true}
                    muted={true}
                    controls={true}
                    light={false}
                    pip={true}
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}
                />
            </div>
        </>
    )
}

export default videoTest;