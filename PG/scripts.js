document.getElementById("send-button").addEventListener("click", async function () {
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value;
    if (inputValue.trim() !== "") {
        appendMessage("user", inputValue);
        const response = await fetch('http://localhost:3000/get-response', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: inputValue })
        });
        const data = await response.json();
        console.log(data);
        appendMessage("bot", data.message);
    }
    inputField.value = "";
});

function appendMessage(sender, message) {
    var chatbox = document.getElementById("chatbox");
    var item = document.createElement("div");
    item.className = sender === "user" ? "item right" : "item";
    item.innerHTML = `
        <div class="icon">
            <i class="fa fa-${sender === "user" ? "user" : "robot"}"></i>
        </div>
        <div class="msg">
            <p>${message}</p>
        </div>
    `;
    chatbox.appendChild(item);
    chatbox.scrollTop = chatbox.scrollHeight;
}
