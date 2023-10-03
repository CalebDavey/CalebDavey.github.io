import React, {useEffect} from "react";
import '../styles/background.css';

interface WrapperProps {
    children: React.ReactNode;
}


const Background : React.FC<WrapperProps> = ({children}) => {
    let mouseX = 0;
    let mouseY = 0;
    let radialGradient : NodeListOf<HTMLElement> | null = null;

    useEffect(() => {
        background();
        window.addEventListener('resize', background);
        setupGradientFollow();
        gradientFollow();
        radialGradient = document.querySelectorAll('.dot') as NodeListOf<HTMLElement>
    }, [])

    const background = () => {
        let nodes : Node[] = [];
        const background = document.getElementById("background");
        for (let i = 0; i < window.innerWidth; i+= 50) {
            for (let j = 0; j < window.innerHeight; j+= 50) {

                let div = document.createElement("div");
                div.style.width = "4px";
                div.style.height = "4px";
                div.style.borderRadius = "30px";
                div.className = "dot";
                div.style.position = "absolute";
                div.style.left = `${i}px`;
                div.style.top = `${j}px`;
                nodes.push(div);
            }
        }
        background?.append(...nodes);
    }

    const gradientFollow = () => {
        const vw = window.innerWidth;
        const maxDistance = (10 / 100) * vw; // Adjust the maximum distance for scaling and opacity changes

        if (radialGradient) {
            for (const item of radialGradient) {
                const x = item.offsetLeft + item.offsetWidth / 2;
                const y = item.offsetTop + item.offsetHeight / 2;
                const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

                // Calculate a factor based on the distance
                const factor = 1 - Math.min(distance / maxDistance, 1);

                // Use linear interpolation (lerp) to smoothly adjust scale and opacity
                const scale = 1 + factor; // Start with a scale of 1 and interpolate towards 2
                const opacity = 0.18 + factor * 0.7; // Start with an opacity of 0.4 and interpolate towards 1

                item.style.transform = `scale(${scale})`;
                item.style.opacity = opacity.toString();
            }
        }
        requestAnimationFrame(gradientFollow);
    };


    const setupGradientFollow = () => {
        document.addEventListener('mousemove', (event) => {
            mouseX = event.pageX - window.scrollX;
            mouseY = event.pageY - window.scrollY;
        });
    }

    return (
        <div>
            <div id="background" className="fixed top-0 left-0"></div>
            {children}
        </div>
    )
}

export default Background;