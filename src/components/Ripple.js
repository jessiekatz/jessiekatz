import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

let x = 50;
let y = 50;
function P5Sketch() {

    const sketchRef = useRef(null);
    const p5InstanceRef = useRef(null);

    useEffect(() => {
        const sketch = (p) => {
            p.setup = () => setup(p, sketchRef.current);
            p.draw = () => draw(p);
        };

        // Create a new p5 instance, assign it to the reference
        p5InstanceRef.current = new p5(sketch, sketchRef.current);

        // Cleanup function to remove the p5 instance on component unmount
        return () => {
            if (p5InstanceRef.current) {
                p5InstanceRef.current.remove();
            }
        };
    }, []);

    const setup = (p, canvasParentRef) => {
        // Ensure that the canvas uses the size of its parent container
        p.createCanvas(canvasParentRef.offsetWidth, canvasParentRef.offsetHeight).parent(canvasParentRef);
        
        p.frameRate(10);
    };


    const draw = (p5) => {
        p5.background(0);
        p5.ellipse(x, y, 70, 70);
    };


    return <div ref={sketchRef}/>;
}

export default P5Sketch;
