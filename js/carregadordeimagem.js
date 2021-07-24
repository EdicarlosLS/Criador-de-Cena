function CarregadorDeImagem() {

    this.carregar = function (funcao) {
        var file = document.getElementById('arquivo').files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            funcao(reader.result, file.name, true);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            funcao("", false);
        }
    }


}