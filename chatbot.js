document.addEventListener("DOMContentLoaded", function () {

  document.getElementById('chat-toggle').addEventListener('click', function () {
    const widget = document.getElementById('chatbot-widget');
    widget.style.display = (widget.style.display === 'none' || widget.style.display === '') ? 'flex' : 'none';
  });

});

function enviaMissatge() {
  const input = document.getElementById('user-input');
  const missatge = input.value.trim();
  if (!missatge) return;

  mostraMissatge(missatge, 'user');
  input.value = '';

  setTimeout(() => {
    const resposta = generaResposta(missatge);
    mostraMissatge(resposta, 'bot');
  }, 500);
}

function mostraMissatge(text, tipus) {
  const div = document.createElement('div');
  div.className = `message ${tipus}`;
  div.textContent = text;

  const chatBody = document.getElementById('chat-body');
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function generaResposta(missatge) {
  missatge = missatge.toLowerCase();

  if (missatge.includes("hola") || missatge.includes("bon dia"))
    return "Hola! Sóc Ray‑AI. Aquesta és la meva primera versió i puc ajudar-te amb coses senzilles d’HTML, CSS i JavaScript. En què et puc ajudar?";

  if (missatge.includes("adéu") || missatge.includes("adeu"))
    return "Fins aviat! Quan vulguis continuar creant webs, seré per aquí.";

  if (missatge.includes("gràcies"))
    return "De res! Encara estic en una versió inicial, però faré el possible per ajudar-te.";

  if (missatge.includes("html"))
    return "HTML és el llenguatge que dóna estructura a una pàgina web. Exemple bàsic:\n\n<html>\n  <body>\n    <h1>Hola món</h1>\n  </body>\n</html>";

  if (missatge.includes("css"))
    return "CSS serveix per donar estil a la teva web. Exemple simple:\n\nbody {\n  background: #f0f0f0;\n  font-family: Arial;\n}";

  if (missatge.includes("javascript") || missatge.includes("js"))
    return "JavaScript permet afegir interacció a la teva web. Exemple:\n\nconsole.log('Hola des de JS');";

  return "Encara estic aprenent, de moment nomès et puc donar definicions. Què necessites?";
}

