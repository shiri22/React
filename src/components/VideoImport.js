import React from 'react'
// import Video from './video.mp4'
const VideoImport = () => {
  return (
    <div>
        <video controls width="300px" height="400px">
            <source src={''} type='.mp4' />
        </video>
    </div>
  )
}

export default VideoImport