function FormatadorPadrao() {
    this.formatar = function (elementos) {
        var string = "";
        for (var i in elementos) {
            string += "new " + elementos[i].etiqueta + "(";
            string += elementos[i].x * 2 + ", ";
            string += elementos[i].y * 2 + ", ";
            string += elementos[i].largura * 2 + ", ";
            string += elementos[i].altura * 2 + "); ";
        }

        return string;
    }
}
