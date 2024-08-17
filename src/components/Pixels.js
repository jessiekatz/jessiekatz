import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

function P5Sketch() {
    let pix_size = 10;
    let pix_arr = [];
    let num_col;
    let num_row;

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
        p.createCanvas(canvasParentRef.offsetWidth, 80).parent(canvasParentRef);
        console.log(canvasParentRef.offsetHeight)
        num_col = p.floor(p.width / pix_size);
        num_row = p.floor(p.height / pix_size);
        restart(p);
        p.frameRate(10);
    };

    const restart = (p) => {
        for (let c = 0; c < num_col; c++) {
            pix_arr[c] = [];
            for (let r = 0; r < num_row; r++) {
                let pix = new Pixel(c, r, p);
                pix_arr[c].push(pix);
            }
        }
        getNeighborhood(p);
    };

    const draw = (p) => {
        // p.background(250, 237, 249);
        p.background(252, 247, 252);

        for (let c = 0; c < num_col; c++) {
            for (let r = 0; r < num_row; r++) {
                pix_arr[c][r].getnextPat(p);
            }
        }
        for (let c = 0; c < num_col; c++) {
            for (let r = 0; r < num_row; r++) {
                pix_arr[c][r].draw_pix(p);
            }
        }
    };

    const getNeighborhood = (p) => {
        for (let c = 0; c < num_col; c++) {
            for (let r = 0; r < num_row; r++) {
                let top = c - 1;
                let bottom = c + 1;
                let right = r + 1;
                let left = r - 1;

                // checking bounds
                if (top < 0) top = num_col - 1;
                if (bottom === num_col) bottom = 0;
                if (right === num_row) right = 0;
                if (left < 0) left = num_row - 1;

                // adding neighborhood
                pix_arr[c][r].neighbor.push(pix_arr[top][r]);
                pix_arr[c][r].neighbor.push(pix_arr[bottom][r]);
                pix_arr[c][r].neighbor.push(pix_arr[c][left]);
                pix_arr[c][r].neighbor.push(pix_arr[c][right]);
                // pix_arr[c][r].neighbor.push(pix_arr[top][right]);
                // pix_arr[c][r].neighbor.push(pix_arr[bottom][right]);
                pix_arr[c][r].neighbor.push(pix_arr[top][left]);
                pix_arr[c][r].neighbor.push(pix_arr[bottom][left]);
            }
        }
    };

    class Pixel {
        constructor(x, y, p) {
            this.x = x * pix_size;
            this.y = y * pix_size;
            this.lastPat = 0;
            this.nextPat = ((this.x / p.width) + (this.y / p.height)) * 12;
            this.pat = this.nextPat;
            this.neighbor = [];
        }

        getnextPat(p) {
            let total = 0;
            for (let i = 0; i < this.neighbor.length; i++) {
                total += this.neighbor[i].pat;
            }
            let average = p.int(total / 8);
            let d = p.dist(p.mouseX, p.mouseY, this.x + pix_size / 2, this.y + pix_size / 2);
            if (d < 20) {
                this.nextPat = 250; // Color change value
            } else if (average === 0) {
                this.nextPat = 150;
            } else {
                this.nextPat = this.pat + average;
                if (this.lastPat > 0) {
                    this.nextPat -= this.lastPat;
                }
                if (this.nextPat > 255) {
                    this.nextPat = 100;
                } else if (this.nextPat < 0) {
                    this.nextPat = 0;
                }
            }
            this.lastPat = this.pat;
        }

        draw_pix(p) {
            p.noStroke();
            this.pat = this.nextPat;
            p.fill(215, 229, 240, this.pat);
            p.rect(this.x, this.y, pix_size * 1.75, pix_size * 1.75);
        }
    }

    return <div ref={sketchRef}/>;
}

export default P5Sketch;
