function Elemento(imagem) {
    /*this.imagem = imagem;
     this.x = x;
     this.y = y;
     this.largura = largura;
     this.altura = altura;
     this.etiqueta = etiqueta;*/

    this.imagem = imagem;
    this.largura = imagem.width || 100;
    this.altura = imagem.height || 100;
    this.x = (640 - this.largura) / 2;
    this.y = (360 - this.altura) / 2;
    this.etiqueta = "etiqueta";

    this.desenhaNo = function (_ctx) {
        //_ctx.fillRect(this.x, this.y, this.largura, this.altura);
        _ctx.drawImage(this.imagem, this.x, this.y, this.largura, this.altura);
    };
    
    this.clone = function(){
        var outroElemento = new Elemento(this.imagem);
        outroElemento.x = this.x + 5;
        outroElemento.y = this.y + 5;        
        outroElemento.largura = this.largura;
        outroElemento.altura = this.altura;
        outroElemento.etiqueta = this.etiqueta;
        
        return outroElemento;
    };
}
