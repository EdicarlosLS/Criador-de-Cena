function FormatadorPadrao() {
    this.formatar = function (elementos) {
        var string = "";
        for (var i in elementos) {
            string += "new " + elementos[i].etiqueta + "(";
            string += elementos[i].x + ", ";
            string += elementos[i].y + ", ";
            string += elementos[i].largura + ", ";
            string += elementos[i].altura + "); ";
        }

        return string;
    }
}
