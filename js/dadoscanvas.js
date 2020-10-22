function DadosCanvas(){
    this.zoom = 1;
    this.eixoX = 0;
    this.eixoY = 0;
    this.deslocamentoX = 0;
    this.deslocamentoY = 0;
    this.deslocamentoZoom = 1;
    
    this.setEixoX = function(valor){
        this.deslocamentoX = this.eixoX - valor;
        this.eixoX = valor;
    };
    
    this.setEixoY = function(valor){
        this.deslocamentoY = this.eixoY - valor;
        this.eixoY = valor;
    };
    
    this.setZoom = function(valor){
        this.deslocamentoZoom = valor / this.zoom;
        this.zoom = valor;
    };
    
    this.limpar = function(){        
        this.deslocamentoX = 0;
        this.deslocamentoY = 0;
        this.deslocamentoZoom = 1;
    };
}