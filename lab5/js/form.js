const form = document.getElementById('contactForm');
const statusMsg = document.getElementById('statusMsg');

form.addEventListener('input', (e) => {
  if (e.target.id === 'email' && !e.target.value.includes('@')) {
    statusMsg.textContent = '⚠️ Введите корректный email';
    statusMsg.style.color = 'red';
  } else {
    statusMsg.textContent = '';
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newMsg = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const res = await fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMsg)
    });

    if (!res.ok) throw new Error('Ошибка при отправке');
    statusMsg.textContent = '✅ Сообщение отправлено!';
    statusMsg.style.color = 'green';
    form.reset();
  } catch (err) {
    statusMsg.textContent = '❌ Не удалось отправить сообщение';
    statusMsg.style.color = 'red';
  }
});
