import { useState } from "react";
import data from "../data/data";

export default function ColorBox(color) {
    // javascript stuff
    // console.log(color.color)
    const [bgColor, setBgColor] = useState(color.color);
    function changeColor() {
        setBgColor(data[Math.floor(Math.random() * data.length)]);
    }
    return (
        <div
            className="color-div"
            style={{ backgroundColor: bgColor }}
            onClick={changeColor}
        ></div>
    );
}
