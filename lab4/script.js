// === Класс пользователя формы ===
class ContactForm {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  // Метод форматированного вывода
  printInfo() {
    console.log(`📨 Новое сообщение с формы:
Имя: ${this.name}
Email: ${this.email}
Сообщение: ${this.message}`);
  }
}

// === Обработчик формы ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;

    if (!consent) {
      alert("Пожалуйста, подтвердите согласие на обработку данных.");
      return;
    }

    // Создаём объект и выводим в консоль
    const userMessage = new ContactForm(name, email, message);
    userMessage.printInfo();

    alert("Сообщение успешно отправлено! (проверьте консоль)");
    form.reset();
  });
});
