import React from 'react';

export default function PlayVideo() {
    return (
        <div>
            <iframe
                title="play"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1oef_zXhPgA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
    );
}
