import React, { useState } from "react";

const ChatBot = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Input Value: ", inputValue);
        setInputValue("");
    };

    return (
        <div>
            <h1>Welcome to our Chatbot!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message here"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBot;