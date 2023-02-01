import React from "react";
import Accordion from "../Accordion/Accordion";
import "../../styles.css";

const contentList = [
    {
        id: 0,
        title: "First Accordion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id: 1,
        title: "Second Accordion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id: 2,
        title: "Third Accordionn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
]

export default function App() {

    return (
        <div className="App">
            <h1>Welcome to DevTools section</h1>
            <h2>Have a nice journey!</h2>
            <div>
                {contentList.map(content =>
                    <Accordion
                        key={content.id}
                        title={content.title}
                        description={content.description}
                    />
                )}
            </div>
        </div>
    );
}
