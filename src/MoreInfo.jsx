import React from "react";

function MoreInfo(element) {
    element = element.element;
    return (
        <div class="img-data">
            <a href="#">
                <img src={element.img} />
            </a>
            <a href="#">
                <p>{element.text}</p>
            </a>
        </div>
    )
}

export default MoreInfo