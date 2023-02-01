import React, {useRef, useState} from "react";

import "./Accordion.css";

type AccordionProps = {
    title: string,
    description: string
}

function Accordion({title, description}: AccordionProps) {
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState("0px");

    const content = useRef<HTMLDivElement | null>(null);

    function toggleAccordion() {
        const newHeight = !expanded && content.current ? `${content.current.scrollHeight}px` : "0px"
        setHeight(newHeight);
        setExpanded(!expanded);
    }

    return (
        <div className="accordionWrapper">
            <div
                className={`accordion ${expanded ? "expanded" : ""}`}
                onClick={toggleAccordion}
            >
                <p className="accordionTitle">{title}</p>
                <span style={{marginLeft: "20px"}}>{expanded ? "-" : "+"}</span>
            </div>
            <div
                ref={content}
                style={{maxHeight: `${height}`}}
                className="accordionContent"
            >
                <div className="accordionText">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
