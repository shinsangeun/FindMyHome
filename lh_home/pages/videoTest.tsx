/*import React, {useState, useEffect} from "react";
import ReactPlayer from 'react-player/lazy';

const videoTest = () => {
    const [index, setIndex] = useState(0);
    const [playList, setPlayList] = useState(null);

    useEffect(() => {
        // @ts-ignore
        setPlayList([
            {index:1, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
            {index:2, url: 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8'},
            {index:3, url: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}
        ])
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
            <h2>Player Test</h2>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
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

export default videoTest;*/


import ReactPlayer from 'react-player/lazy';
import React, {useEffect, useState} from "react";

type VideoPlayerProps = {
    title: string;
    vodPlaylistId: string;
}

const VideoPlayer = ({title, vodPlaylistId}: VideoPlayerProps) => {
    const [playIndex, setPlayIndex] = useState(0);
    const playList = [
        {index:1, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
        {index:2, url: 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8'},
        {index:3, url: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}
    ];

    const handleNextVideo = (video: string | any[], playIndex: number) => {
        if(playIndex === video.length - 1){
            setPlayIndex(0);
        }else{
            setPlayIndex(playIndex + 1);
        }
    }

    const selectVideo = (index: number) => {
        setPlayIndex(index);
    }

    if(playList === null) return <p>Loading...</p>;

    console.log("playList:", playList[playIndex].url)

    return (
        <>
            <h2>Player Test</h2>
            <ReactPlayer
                // @ts-ignore
                url={playList[playIndex].url}
                playing
                controls
                muted
                progressInterval={1000}
                pip={true}
                onEnded={() => {handleNextVideo(playList, playIndex)}}
                width={'800px'}
                height={'500px'}
            />
        </>
    )
}

export default VideoPlayer;
