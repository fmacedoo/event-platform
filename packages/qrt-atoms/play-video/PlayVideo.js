import React from 'react';

export default function PlayVideo() {
    return (
        <div>
            <iframe
                title="play"
                width="660"
                height="415"
                src="https://www.youtube.com/embed/1oef_zXhPgA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    );
}
