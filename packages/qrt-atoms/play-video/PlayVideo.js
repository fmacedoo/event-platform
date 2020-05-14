import React from 'react';

export default function PlayVideo() {
    return (
        <div class="iframe">
            <div class="video-container">
                <iframe width="560" height="315" style={ { width:'100%' } } src="https://www.youtube.com/embed/nDVFSic7R_w/?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
        </div>
    );
}
