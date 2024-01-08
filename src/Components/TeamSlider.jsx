import React, { useState, useEffect } from "react";

import rect1 from "../assets/Rectangle 3463490.png";

function TeamSlider() {

    const [currentImage, setCurrentImage] = useState(0);

    const team = [
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
        { src: rect1, name: 'Amanda Cooper', role: 'Lorem Ipsum Role' },
    ];

    const handleScroll = (event) => {
        setCurrentImage(event.target.scrollLeft);
    };

    return (
        <div className="overflow-x-auto whitespace-nowrap scroll-wheel">
            <div className="flex" style={{ width: team.length * 310 }}>
                {team.map((image, index) => (
                    <div key={index} className="relative w-[18.75rem] h-[23rem] m-1">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-[18.75rem] h-[18.75rem] mr-3"
                        />
                        <p className="font-roboto text-base font-medium">
                            {image.name}
                        </p>
                        <p className="font-sans text-sm font-normal">
                            {image.role}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default TeamSlider;