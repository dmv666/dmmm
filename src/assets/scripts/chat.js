//CHAT
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    const chatContainer = document.getElementById('chatContainer');

    function loadMessages() {
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

        storedMessages.forEach(({ message, isMine, deleted }) => {
            if (!deleted) {
                addMessage(message, isMine);
            }
        });
    }

    function addMessage(message, isMine) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(isMine ? 'my-message' : 'other-message');
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        

        messageElement.innerHTML = `
            <p class="horaTexto">${currentTime}</p>
            <p class="MensajeMio">${message}</p>
            <button class="delete-btn">Eliminar</button>
        `;

        chatContainer.appendChild(messageElement);

        const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

        storedMessages.push({ message, isMine, deleted: false });
        
        localStorage.setItem('chatMessages', JSON.stringify(storedMessages));

        chatContainer.scrollTop = chatContainer.scrollHeight;

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const messageDiv = button.parentElement;
                const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
                const index = Array.from(messageDiv.parentNode.children).indexOf(messageDiv);

                messages[index].deleted = true;

                localStorage.setItem('chatMessages', JSON.stringify(messages.filter(msg => !msg.deleted)));

                messageDiv.remove();
            });
        });
    }

    loadMessages();

    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const message = messageInput.value.trim();
            if (message !== '') {
                addMessage(message, true); 
                messageInput.value = ''; 
            }
        }
    });
});


