
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener('DOMContentLoaded', function() {
    // Text to be typed out
    const text = "Happy one year to us! I love you so muchhhhh.";
    let index = 0;
    const typingTextElement = document.getElementById('typing-text');

    function type() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); 
        }
    }

    // Start typing animation after a delay (adjust as needed)
    setTimeout(type, 1000); // Delay before typing starts (adjust as needed)
});