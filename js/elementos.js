function Elementos() {
    var elementos = [];
    var elementoSelecionado = undefined;
    var selecionou = false;
    var deveExcluir = false;

    this.deslocamentoX = 0;
    this.deslocamentoY = 0;

    this.add = function (elemento) {
        elementos.push(elemento);
    };

    this.novo = function (img) {
        var novoElemento = new Elemento(img);
        elementos.push(novoElemento);
        elementoSelecionado = novoElemento;
    };

    this.clonar = function () {
        if (elementoSelecionado !== undefined) {
            var novoElemento = elementoSelecionado.clone();
            elementos.push(novoElemento);
            elementoSelecionado = novoElemento;
        }
    };

    this.excluir = function () {
        deveExcluir = true;
    };

    var exclusao = function () {

        if (elementoSelecionado !== undefined) {
            elementos.splice(elementos.indexOf(elementoSelecionado), 1);
        }

        deveExcluir = false;
    };

    this.selecionarElementoEm = function (x, y) {
        elementoSelecionado = undefined;
        selecionou = false;
        for (var idx in elementos) {
            if (elementos[idx].x < x &&
                    x < elementos[idx].x + elementos[idx].largura &&
                    elementos[idx].y < y &&
                    y < elementos[idx].y + elementos[idx].altura) {
                elementoSelecionado = elementos[idx];
                this.deslocamentoX = x - elementos[idx].x;
                this.deslocamentoY = y - elementos[idx].y;
                selecionou = true;
            }
        }
        return selecionou;
    };

    this.getSelecionado = function () {
        return elementoSelecionado;
    };

    this.desenhaNo = function (_ctx) {
        if (deveExcluir) {
            exclusao();
        }

        for (var idx in elementos) {
            elementos[idx].desenhaNo(_ctx);
            if (elementos[idx] === elementoSelecionado) {
                _ctx.strokeRect(elementos[idx].x, elementos[idx].y, elementos[idx].largura, elementos[idx].altura);
            }
        }
    };

    this.enviarParaFrente = function () {
        var idxSelecionado = elementos.indexOf(elementoSelecionado);
        if (idxSelecionado !== elementos.length - 1) {
            var aux = elementos[idxSelecionado];
            elementos[idxSelecionado] = elementos[idxSelecionado + 1];
            elementos[idxSelecionado + 1] = aux;
        }
    };

    this.enviarParaTras = function () {
        var idxSelecionado = elementos.indexOf(elementoSelecionado);
        if (idxSelecionado !== 0) {
            var aux = elementos[idxSelecionado];
            elementos[idxSelecionado] = elementos[idxSelecionado - 1];
            elementos[idxSelecionado - 1] = aux;
        }
    };

    this.exportar = function (formatador) {
        console.log(elementos);
        if (formatador !== undefined) {
            var conteudo = formatador.formatar(elementos);
            var blob = new Blob([conteudo], {type: "text/plain;charset=utf-8"});
            var a = document.createElement("a");
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = "cena.txt";
            a.click();
            window.URL.revokeObjectURL(url);
        }
    };

    this.alinharAGrade = function (grade) {
        if (elementoSelecionado !== undefined) {
            elementoSelecionado.x = Math.round(elementoSelecionado.x / grade.espaco) * grade.espaco;
            elementoSelecionado.y = Math.round(elementoSelecionado.y / grade.espaco) * grade.espaco;
        }
    };

}