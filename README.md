# Criador de Cena

![print](https://user-images.githubusercontent.com/21092729/126883139-2c874218-a36f-4fc4-9e62-3c49862562be.jpg)

# Indice

- [Sobre](#sobre)
- [Como baixar](#como-baixar)
- Funções
   - [Canvas](#canvas)
   - [Imagens](#imagens)

## Sobre

Aplicação para auxiliar na criação de cenas para jogos 2D através do posicionamento de imagens em canvas.

## Como baixar
1. Clone este repositório
```
$ git clone https://github.com/EdicarlosLS/Criador-de-Cena.git
```

2. Acesse a pasta do projeto no terminal/cmd
```
$ cd Criador-de-Cena
```

3. Abra o arquivo index
```
$ index.html
```

## Funções

### Canvas

 - Adiciona imagens ao canvas;
 - Move cenário completo nos eixos X e Y arrastando com mouse e pelo valor informado;
 - Zoom entre 0,25x e 4,00x pelo valor informado;
 - Grade “magnética” para alinhamento das imagens com blocos entre 10px e 300px;
 - Download de arquivo “cena.txt” com JSON representando os elementos da cena;
 - Monta cena através de upload de arquivo em formato JSON. (Obs.: para carregamento correto é necessário que as imagens indicadas no arquivo de upload estejam na pasta “img”);

### Imagens

 - Move imagens nos eixos X e Y arrastando com mouse e pelo valor informado;
 - Redimensiona imagens pela largura e altura informadas;
 - Permite informar etiquetas nas imagens;
 - Clona e exclui imagens;
 - Afasta (enviar para trás) e aproxima (trazer para frente) as imagens em hierarquia;

