var elementos = new Elementos();
var editorDeElementos = new EditorDeElemento();
var dadosCanvas = new DadosCanvas();
var editorCanvas = new EditorCanvas();
var carregadorDeImagem = new CarregadorDeImagem();
var grade = new Grade(dadosCanvas);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var clicou = false;

var ponteiroX = 0;
var ponteiroY = 0;

function novoElemento() {
    var img = new Image();
    carregadorDeImagem.carregar(function (src, title, deuCerto) {
        if (deuCerto) {
            img.src = src;
            img.title = title;
            img.onload = function () {
                elementos.novo(img);
                editorDeElementos.carregarDados(elementos.getSelecionado());
            };

        }
    });

}

function selecionar(event) {
    clicou = true;
    elementos.selecionarElementoEm((event.clientX + dadosCanvas.eixoX) / dadosCanvas.zoom, (event.clientY + dadosCanvas.eixoY) / dadosCanvas.zoom);
    if (elementos.getSelecionado() === undefined) {
        editorCanvas.selecionar(event.clientX, event.clientY);
    } else {
        editorCanvas.desselecionar();
    }
    move(event.clientX, event.clientY);

}

function desselecionar() {
    clicou = false;
    elementos.alinharAGrade(grade);
    editorDeElementos.carregarDados(elementos.getSelecionado());
}

function alterarDadosElemento() {
    editorDeElementos.alterarDados(elementos.getSelecionado());
}

function alterarDadosCanvas() {
    editorCanvas.alterarDados(dadosCanvas);
    editorCanvas.carregarDados(dadosCanvas);
}

function move(x, y) {
    if (clicou)
    {
        ponteiroX = (x + dadosCanvas.eixoX) / dadosCanvas.zoom - elementos.deslocamentoX;
        ponteiroY = (y + dadosCanvas.eixoY) / dadosCanvas.zoom - elementos.deslocamentoY;

        editorCanvas.move(x, y);
        editorCanvas.alterarDados(dadosCanvas);
    }
}

function clonar() {
    elementos.clonar();
    editorDeElementos.carregarDados(elementos.getSelecionado());
}

function excluir() {
    elementos.excluir();
}

function enviarParaFrente() {
    elementos.enviarParaFrente();
}

function enviarParaTras() {
    elementos.enviarParaTras();
}

function importar() {
    elementos.importar();
}

function exportar() {
    elementos.exportar(new FormatadorJSON());
}

function alterarGrade() {
    grade.alterarGrade();
}

editorCanvas.carregarDados(dadosCanvas);

function draw() {
    ctx.clearRect(dadosCanvas.eixoX / dadosCanvas.zoom, dadosCanvas.eixoY / dadosCanvas.zoom, canvas.width / dadosCanvas.zoom, canvas.height / dadosCanvas.zoom);

    if (elementos.getSelecionado() !== undefined) {
        if (clicou) {
            elementos.getSelecionado().x = ponteiroX;
            elementos.getSelecionado().y = ponteiroY;

            editorDeElementos.carregarDados(elementos.getSelecionado());
        }
        document.getElementById("dadosElemento").style.display = "inline";
    } else {
        editorDeElementos.limparDados();
        document.getElementById("dadosElemento").style.display = "none";
    }

    elementos.desenhaNo(ctx);

    grade.desenhaNo(ctx);

    ctx.scale(dadosCanvas.deslocamentoZoom, dadosCanvas.deslocamentoZoom);
    ctx.translate(dadosCanvas.deslocamentoX / dadosCanvas.zoom, dadosCanvas.deslocamentoY / dadosCanvas.zoom);

    dadosCanvas.limpar();


    requestAnimationFrame(draw);
}

draw();