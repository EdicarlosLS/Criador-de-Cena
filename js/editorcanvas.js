function EditorCanvas() {
    var campoZoom = document.getElementById("zoom");
    var campoEixoX = document.getElementById("eixox");
    var campoEixoY = document.getElementById("eixoy");

    this.carregarDados = function (dadosCanvas) {
        campoZoom.value = dadosCanvas.zoom;
        campoEixoX.value = dadosCanvas.eixoX;
        campoEixoY.value = dadosCanvas.eixoY;
    };

    this.limparDados = function () {
        campoZoom.value = "";
        campoEixoX.value = "";
        campoEixoY.value = "";
    };

    this.alterarDados = function (dadosCanvas) {
        if (dadosCanvas !== undefined) {
            dadosCanvas.setZoom(parseFloat(campoZoom.value));
            dadosCanvas.setEixoX(parseInt(campoEixoX.value));
            dadosCanvas.setEixoY(parseInt(campoEixoY.value));
        }
    };
}
