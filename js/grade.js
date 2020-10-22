function Grade(dadosCanvas) {
    //this,dadosCanvas = dadosCanvas;
    var campoEspaco = document.getElementById("grade");

    this.espaco = 20;

    this.desenhaNo = function (_ctx) {
        _ctx.save();
        _ctx.strokeStyle = "#00000033";

        var inicioX = Math.round((dadosCanvas.eixoX / dadosCanvas.zoom) / this.espaco) * this.espaco;
        var inicioY = Math.round((dadosCanvas.eixoY / dadosCanvas.zoom) / this.espaco) * this.espaco;
        for (var i = 0; i < (640 / dadosCanvas.zoom) / this.espaco; i++) {
            _ctx.beginPath();
            _ctx.moveTo(inicioX + i * this.espaco, (0 + dadosCanvas.eixoY) / dadosCanvas.zoom);
            _ctx.lineTo(inicioX + i * this.espaco, (360 + dadosCanvas.eixoY) / dadosCanvas.zoom);
            _ctx.stroke();
        }

        for (var i = 0; i < (360 / dadosCanvas.zoom) / this.espaco; i++) {
            _ctx.beginPath();
            _ctx.moveTo((dadosCanvas.eixoX + 0) / dadosCanvas.zoom, inicioY + i * this.espaco);
            _ctx.lineTo((dadosCanvas.eixoX + 640) / dadosCanvas.zoom, inicioY + i * this.espaco);
            _ctx.stroke();
        }


        _ctx.strokeStyle = "#ff0000ff";

        _ctx.beginPath();
        _ctx.moveTo((dadosCanvas.eixoX) / dadosCanvas.zoom, 0);
        _ctx.lineTo((dadosCanvas.eixoX + 640) / dadosCanvas.zoom, 0);
        _ctx.stroke();

        _ctx.beginPath();
        _ctx.moveTo(0, (dadosCanvas.eixoY) / dadosCanvas.zoom);
        _ctx.lineTo(0, (dadosCanvas.eixoY + 360) / dadosCanvas.zoom);
        _ctx.stroke()


        _ctx.restore();

    };

    this.alterarGrade = function () {
        var valor = campoEspaco.value;
        if (valor % 10 === 0 && valor > 0 && valor <= 300) {
            this.espaco = valor;
        }
    };
}


