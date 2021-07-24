function FormatadorJSON(){
    this.formatar = function (elementos) {
        var string = "[";
        for (var i in elementos) {
            string += "{";
            string += "\"etiqueta\":\"" + elementos[i].etiqueta + "\", ";
            string += "\"imagem\":\"" + elementos[i].imagem.title + "\", ";
            string += "\"x\":" + elementos[i].x + ", ";
            string += "\"y\":" + elementos[i].y + ", ";
            string += "\"largura\":" + elementos[i].largura + ", ";
            string += "\"altura\":" + elementos[i].altura;
            string += "}";
            if(i < elementos.length - 1){
                string += ",";
            }
        }

        string += "]";
        
        return string;
    }
}