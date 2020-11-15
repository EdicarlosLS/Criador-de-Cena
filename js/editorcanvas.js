function EditorCanvas() {
    var campoZoom = document.getElementById("zoom");
    var campoEixoX = document.getElementById("eixox");
    var campoEixoY = document.getElementById("eixoy");

    var inicialX = 0;
    var inicialY = 0;
    var cliqueX = 0;
    var cliqueY = 0;
    var selecionado;

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

    this.selecionar = function (x, y) {
        cliqueX = x;
        cliqueY = y;
		inicialX = parseInt(campoEixoX.value);
		inicialY = parseInt(campoEixoY.value);
        selecionado = true;
    };
    
    this.desselecionar = function () {
        selecionado = false;
    };

    this.move = function (x, y) {
        if (selecionado) {
            campoEixoX.value = cliqueX - x + inicialX;
            campoEixoY.value = cliqueY - y + inicialY;
        }
    };
}
