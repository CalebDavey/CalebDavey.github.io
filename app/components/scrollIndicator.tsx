import {useEffect} from "react";
import '../styles/indicator.css';

export default function Scrollbar() {
    let scalingElement : HTMLElement | null;

    useEffect(() => {
        scalingElement = document.getElementById('selected');
        setInterval(toggleScale, 2000);
    }, []);


    let isFullSize = true;

    function toggleScale() {
        console.log(scalingElement)
        if (isFullSize && scalingElement) {
            scalingElement.style.transform = 'scale(0.6)';
        } else if (scalingElement) {
            scalingElement.style.transform = 'scale(1)';
        }
        isFullSize = !isFullSize;
    }

    return (
        <div className="fixed inset-y-1/2 right-6 -translate-y-1/2 h-fit flex justify-center items-center flex-col">
            <div id="selected" className="w-6 h-6 my-2 bg-neutral-50 rounded-full indicator"></div>
            <div className="w-6 h-6 my-2 bg-neutral-50 rounded-full indicator"></div>
            <div className="w-6 h-6 my-2 bg-neutral-50 rounded-full indicator"></div>
        </div>
    )
}