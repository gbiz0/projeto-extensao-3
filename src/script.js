/*
    Responsável por exibir ou esconder
    o menu de navegação a depender o estado atual
*/
function toggleMenu() {
    const drawer = document.querySelector(".drawer");
    drawer.classList.toggle("open");
}

/*
    Responsável por enviar a mensagem no WhatsApp
    dos responsáveis pelos agendamentos
*/
function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.nome.value.trim();
    const phone = form.telefone.value.trim();
    if (!name || !phone) {
        alert("Por favor, preencha nome e telefone.");
        return;
    }
    const msg = `Olá, sou ${name}. Quero agendar uma troca de óleo. Telefone: ${phone}.`;
    const encoded = encodeURIComponent(msg);
    // WhatsApp fallback para número do banner
    window.open("https://wa.me/5517997084484?text=" + encoded, "_blank");
}