document.addEventListener("DOMContentLoaded", () => {
    const p1 = document.getElementById("pagina1");
    const p2 = document.getElementById("pagina2");
    const btnProx = document.getElementById("btnProximo");
    const btnAnt = document.getElementById("btnAnterior");
    const btnCor = document.getElementById("btnCor");

    function alternarPagina() {
        p1.classList.toggle("hidden");
        p2.classList.toggle("hidden");
        btnProx.classList.toggle("hidden");
        btnAnt.classList.toggle("hidden");
    }

    btnProx.addEventListener("click", alternarPagina);
    btnAnt.addEventListener("click", alternarPagina);
});