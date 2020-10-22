function EditorDeElemento() {
    var campoEtiqueta = document.getElementById("etiqueta");
    var campoX = document.getElementById("x");
    var campoY = document.getElementById("y");
    var campoLargura = document.getElementById("largura");
    var campoAltura = document.getElementById("altura");


    this.carregarDados = function (elemento) {
        if (elemento !== undefined) {
            campoEtiqueta.value = elemento.etiqueta;
            campoX.value = elemento.x;
            campoY.value = elemento.y;
            campoLargura.value = elemento.largura;
            campoAltura.value = elemento.altura;
        }
    };

    this.limparDados = function () {
        campoEtiqueta.value = "";
        campoX.value = "";
        campoY.value = "";
        campoLargura.value = "";
        campoAltura.value = "";
    };

    this.alterarDados = function (elementoSelecionado) {
        if (elementoSelecionado !== undefined) {
            elementoSelecionado.etiqueta = campoEtiqueta.value;
            elementoSelecionado.x = parseInt(campoX.value);
            elementoSelecionado.y = parseInt(campoY.value);
            elementoSelecionado.largura = parseInt(campoLargura.value);
            elementoSelecionado.altura = parseInt(campoAltura.value);
        }
    };
}
