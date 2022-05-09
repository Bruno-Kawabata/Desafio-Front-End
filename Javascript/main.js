function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

const ativarPaginacao=(element,id)=>{    
    let dados = fazGet("https://swapi.dev/api/planets/");
    let dataPlanetas = JSON.parse(dados);
    let listaPlanetas = dataPlanetas.results;
    
    let itens = document.getElementsByClassName("page-item");
    for (let i = 0; i< itens.length; i++) {
        itens[i].classList.remove("active");
    }
    element.classList.add("active");

    if (id == "pagina1") {
        let saidaTitulo1 = document.getElementById("card1-title");
        let saidaTitulo2 = document.getElementById("card2-title");
        saidaTitulo1.innerHTML = listaPlanetas[0].name;
        saidaTitulo2.innerHTML = listaPlanetas[1].name;
        let saidaTerreno1 = document.getElementById("card1-terreno");
        let saidaTerreno2 = document.getElementById("card2-terreno");
        saidaTerreno1.innerHTML = listaPlanetas[0].terrain;
        saidaTerreno2.innerHTML = listaPlanetas[1].terrain;
        let saidaClima1 = document.getElementById("card1-clima");
        let saidaClima2 = document.getElementById("card2-clima");
        saidaClima1.innerHTML = listaPlanetas[0].climate;
        saidaClima2.innerHTML = listaPlanetas[1].climate;
        colocarImg("card1-img","Imagens/tatooine.jpeg");
        colocarImg("card2-img","Imagens/alderaan.webp");

        let modalTitulo = document.getElementById("modalCard1-titulo");
        modalTitulo.innerHTML = listaPlanetas[0].name;
        let modalTerreno = document.getElementById("modalCard1-terreno");
        modalTerreno.innerHTML = listaPlanetas[0].terrain;
        let modalClima = document.getElementById("modalCard1-clima");
        modalClima.innerHTML = listaPlanetas[0].climate;
        let modalDiametro = document.getElementById("modalCard1-diametro");
        modalDiametro.innerHTML = listaPlanetas[0].diameter;
        let modalGrav = document.getElementById("modalCard1-grav");
        modalGrav.innerHTML = listaPlanetas[0].gravity;
        let modalPO = document.getElementById("modalCard1-PO");
        modalPO.innerHTML = listaPlanetas[0].orbital_period;
        let modalPopu = document.getElementById("modalCard1-populacao");
        modalPopu.innerHTML = listaPlanetas[0].population;
        let modalPR = document.getElementById("modalCard1-PR");
        modalPR.innerHTML = listaPlanetas[0].rotation_period;
        let modalAgua = document.getElementById("modalCard1-agua");
        modalAgua.innerHTML = listaPlanetas[0].surface_water;
        let modalFilme = document.getElementById("modalCard1-filme");
        filmes = listaPlanetas[0].films;
        modalFilme.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard1-img","Imagens/tatooinePlanet.webp");

        let modalTitulo1 = document.getElementById("modalCard2-titulo");
        modalTitulo1.innerHTML = listaPlanetas[1].name;
        let modalTerreno1 = document.getElementById("modalCard2-terreno");
        modalTerreno1.innerHTML = listaPlanetas[1].terrain;
        let modalClima1 = document.getElementById("modalCard2-clima");
        modalClima1.innerHTML = listaPlanetas[1].climate;
        let modalDiametro1 = document.getElementById("modalCard2-diametro");
        modalDiametro1.innerHTML = listaPlanetas[1].diameter;
        let modalGrav1 = document.getElementById("modalCard2-grav");
        modalGrav1.innerHTML = listaPlanetas[1].gravity;
        let modalPO1 = document.getElementById("modalCard2-PO");
        modalPO1.innerHTML = listaPlanetas[1].orbital_period;
        let modalPopu1 = document.getElementById("modalCard2-populacao");
        modalPopu1.innerHTML = listaPlanetas[1].population;
        let modalPR1 = document.getElementById("modalCard2-PR");
        modalPR1.innerHTML = listaPlanetas[1].rotation_period;
        let modalAgua1 = document.getElementById("modalCard2-agua");
        modalAgua1.innerHTML = listaPlanetas[1].surface_water;
        let modalFilme1 = document.getElementById("modalCard2-filme");
        filmes = listaPlanetas[1].films;
        modalFilme1.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard1-img","Imagens/AlderaanPlanet.webp");

    } else if (id == "pagina2") {
        let saidaTitulo1 = document.getElementById("card1-title");
        let saidaTitulo2 = document.getElementById("card2-title");
        saidaTitulo1.innerHTML = listaPlanetas[2].name;
        saidaTitulo2.innerHTML = listaPlanetas[3].name;
        let saidaTerreno1 = document.getElementById("card1-terreno");
        let saidaTerreno2 = document.getElementById("card2-terreno");
        saidaTerreno1.innerHTML = listaPlanetas[2].terrain;
        saidaTerreno2.innerHTML = listaPlanetas[3].terrain;
        let saidaClima1 = document.getElementById("card1-clima");
        let saidaClima2 = document.getElementById("card2-clima");
        saidaClima1.innerHTML = listaPlanetas[2].climate;
        saidaClima2.innerHTML = listaPlanetas[3].climate;
        colocarImg("card1-img","Imagens/yavin4.jpeg");
        colocarImg("card2-img","Imagens/hoth.jpeg");

        let modalTitulo = document.getElementById("modalCard1-titulo");
        modalTitulo.innerHTML = listaPlanetas[2].name;
        let modalTerreno = document.getElementById("modalCard1-terreno");
        modalTerreno.innerHTML = listaPlanetas[2].terrain;
        let modalClima = document.getElementById("modalCard1-clima");
        modalClima.innerHTML = listaPlanetas[2].climate;
        let modalDiametro = document.getElementById("modalCard1-diametro");
        modalDiametro.innerHTML = listaPlanetas[2].diameter;
        let modalGrav = document.getElementById("modalCard1-grav");
        modalGrav.innerHTML = listaPlanetas[2].gravity;
        let modalPO = document.getElementById("modalCard1-PO");
        modalPO.innerHTML = listaPlanetas[2].orbital_period;
        let modalPopu = document.getElementById("modalCard1-populacao");
        modalPopu.innerHTML = listaPlanetas[2].population;
        let modalPR = document.getElementById("modalCard1-PR");
        modalPR.innerHTML = listaPlanetas[2].rotation_period;
        let modalAgua = document.getElementById("modalCard1-agua");
        modalAgua.innerHTML = listaPlanetas[2].surface_water;
        let modalFilme = document.getElementById("modalCard1-filme");
        filmes = listaPlanetas[2].films;
        modalFilme.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard1-img","Imagens/yavin4Planet.webp");

        let modalTitulo1 = document.getElementById("modalCard2-titulo");
        modalTitulo1.innerHTML = listaPlanetas[3].name;
        let modalTerreno1 = document.getElementById("modalCard2-terreno");
        modalTerreno1.innerHTML = listaPlanetas[3].terrain;
        let modalClima1 = document.getElementById("modalCard2-clima");
        modalClima1.innerHTML = listaPlanetas[3].climate;
        let modalDiametro1 = document.getElementById("modalCard2-diametro");
        modalDiametro1.innerHTML = listaPlanetas[3].diameter;
        let modalGrav1 = document.getElementById("modalCard2-grav");
        modalGrav1.innerHTML = listaPlanetas[3].gravity;
        let modalPO1 = document.getElementById("modalCard2-PO");
        modalPO1.innerHTML = listaPlanetas[3].orbital_period;
        let modalPopu1 = document.getElementById("modalCard2-populacao");
        modalPopu1.innerHTML = listaPlanetas[3].population;
        let modalPR1 = document.getElementById("modalCard2-PR");
        modalPR1.innerHTML = listaPlanetas[3].rotation_period;
        let modalAgua1 = document.getElementById("modalCard2-agua");
        modalAgua1.innerHTML = listaPlanetas[3].surface_water;
        let modalFilme1 = document.getElementById("modalCard2-filme");
        filmes = listaPlanetas[3].films;
        modalFilme1.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard2-img","Imagens/hothPlanet.webp");
        

    } else if (id == "pagina3") {
        let saidaTitulo1 = document.getElementById("card1-title");
        let saidaTitulo2 = document.getElementById("card2-title");
        saidaTitulo1.innerHTML = listaPlanetas[4].name;
        saidaTitulo2.innerHTML = listaPlanetas[5].name;
        let saidaTerreno1 = document.getElementById("card1-terreno");
        let saidaTerreno2 = document.getElementById("card2-terreno");
        saidaTerreno1.innerHTML = listaPlanetas[4].terrain;
        saidaTerreno2.innerHTML = listaPlanetas[5].terrain;
        let saidaClima1 = document.getElementById("card1-clima");
        let saidaClima2 = document.getElementById("card2-clima");
        saidaClima1.innerHTML = listaPlanetas[4].climate;
        saidaClima2.innerHTML = listaPlanetas[5].climate;
        colocarImg("card1-img","Imagens/dagobah.jpeg");
        colocarImg("card2-img","Imagens/bespin.jpeg");

        let modalTitulo = document.getElementById("modalCard1-titulo");
        modalTitulo.innerHTML = listaPlanetas[4].name;
        let modalTerreno = document.getElementById("modalCard1-terreno");
        modalTerreno.innerHTML = listaPlanetas[4].terrain;
        let modalClima = document.getElementById("modalCard1-clima");
        modalClima.innerHTML = listaPlanetas[4].climate;
        let modalDiametro = document.getElementById("modalCard1-diametro");
        modalDiametro.innerHTML = listaPlanetas[4].diameter;
        let modalGrav = document.getElementById("modalCard1-grav");
        modalGrav.innerHTML = listaPlanetas[4].gravity;
        let modalPO = document.getElementById("modalCard1-PO");
        modalPO.innerHTML = listaPlanetas[4].orbital_period;
        let modalPopu = document.getElementById("modalCard1-populacao");
        modalPopu.innerHTML = listaPlanetas[4].population;
        let modalPR = document.getElementById("modalCard1-PR");
        modalPR.innerHTML = listaPlanetas[4].rotation_period;
        let modalAgua = document.getElementById("modalCard1-agua");
        modalAgua.innerHTML = listaPlanetas[4].surface_water;
        let modalFilme = document.getElementById("modalCard1-filme");
        filmes = listaPlanetas[4].films;
        modalFilme.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard1-img","Imagens/dagobahPlanet.webp");

        let modalTitulo1 = document.getElementById("modalCard2-titulo");
        modalTitulo1.innerHTML = listaPlanetas[5].name;
        let modalTerreno1 = document.getElementById("modalCard2-terreno");
        modalTerreno1.innerHTML = listaPlanetas[5].terrain;
        let modalClima1 = document.getElementById("modalCard2-clima");
        modalClima1.innerHTML = listaPlanetas[5].climate;
        let modalDiametro1 = document.getElementById("modalCard2-diametro");
        modalDiametro1.innerHTML = listaPlanetas[5].diameter;
        let modalGrav1 = document.getElementById("modalCard2-grav");
        modalGrav1.innerHTML = listaPlanetas[5].gravity;
        let modalPO1 = document.getElementById("modalCard2-PO");
        modalPO1.innerHTML = listaPlanetas[5].orbital_period;
        let modalPopu1 = document.getElementById("modalCard2-populacao");
        modalPopu1.innerHTML = listaPlanetas[5].population;
        let modalPR1 = document.getElementById("modalCard2-PR");
        modalPR1.innerHTML = listaPlanetas[5].rotation_period;
        let modalAgua1 = document.getElementById("modalCard2-agua");
        modalAgua1.innerHTML = listaPlanetas[5].surface_water ;
        let modalFilme1 = document.getElementById("modalCard2-filme");
        filmes = listaPlanetas[5].films;
        modalFilme1.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard2-img","Imagens/bespinPlanet.webp");

    } else if (id == "pagina4") {
        let saidaTitulo1 = document.getElementById("card1-title");
        let saidaTitulo2 = document.getElementById("card2-title");
        saidaTitulo1.innerHTML = listaPlanetas[6].name;
        saidaTitulo2.innerHTML = listaPlanetas[7].name;
        let saidaTerreno1 = document.getElementById("card1-terreno");
        let saidaTerreno2 = document.getElementById("card2-terreno");
        saidaTerreno1.innerHTML = listaPlanetas[6].terrain;
        saidaTerreno2.innerHTML = listaPlanetas[7].terrain;
        let saidaClima1 = document.getElementById("card1-clima");
        let saidaClima2 = document.getElementById("card2-clima");
        saidaClima1.innerHTML = listaPlanetas[6].climate;
        saidaClima2.innerHTML = listaPlanetas[7].climate;
        colocarImg("card1-img","Imagens/endor.jpg");
        colocarImg("card2-img","Imagens/naboo.jpg");

        let modalTitulo = document.getElementById("modalCard1-titulo");
        modalTitulo.innerHTML = listaPlanetas[6].name;
        let modalTerreno = document.getElementById("modalCard1-terreno");
        modalTerreno.innerHTML = listaPlanetas[6].terrain;
        let modalClima = document.getElementById("modalCard1-clima");
        modalClima.innerHTML = listaPlanetas[6].climate;
        let modalDiametro = document.getElementById("modalCard1-diametro");
        modalDiametro.innerHTML = listaPlanetas[6].diameter;
        let modalGrav = document.getElementById("modalCard1-grav");
        modalGrav.innerHTML = listaPlanetas[6].gravity;
        let modalPO = document.getElementById("modalCard1-PO");
        modalPO.innerHTML = listaPlanetas[6].orbital_period;
        let modalPopu = document.getElementById("modalCard1-populacao");
        modalPopu.innerHTML = listaPlanetas[6].population;
        let modalPR = document.getElementById("modalCard1-PR");
        modalPR.innerHTML = listaPlanetas[6].rotation_period;
        let modalAgua = document.getElementById("modalCard1-agua");
        modalAgua.innerHTML = listaPlanetas[6].surface_water ;
        let modalFilme = document.getElementById("modalCard1-filme");
        filmes = listaPlanetas[6].films;
        modalFilme.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard1-img","Imagens/endorPlanet.jpg");

        let modalTitulo1 = document.getElementById("modalCard2-titulo");
        modalTitulo1.innerHTML = listaPlanetas[7].name;
        let modalTerreno1 = document.getElementById("modalCard2-terreno");
        modalTerreno1.innerHTML = listaPlanetas[7].terrain;
        let modalClima1 = document.getElementById("modalCard2-clima");
        modalClima1.innerHTML = listaPlanetas[7].climate;
        let modalDiametro1 = document.getElementById("modalCard2-diametro");
        modalDiametro1.innerHTML = listaPlanetas[7].diameter;
        let modalGrav1 = document.getElementById("modalCard2-grav");
        modalGrav1.innerHTML = listaPlanetas[7].gravity;
        let modalPO1 = document.getElementById("modalCard2-PO");
        modalPO1.innerHTML = listaPlanetas[7].orbital_period;
        let modalPopu1 = document.getElementById("modalCard2-populacao");
        modalPopu1.innerHTML = listaPlanetas[7].population;
        let modalPR1 = document.getElementById("modalCard2-PR");
        modalPR1.innerHTML = listaPlanetas[7].rotation_period;
        let modalAgua1 = document.getElementById("modalCard2-agua");
        modalAgua1.innerHTML = listaPlanetas[7].surface_water ;
        let modalFilme1 = document.getElementById("modalCard2-filme");
        filmes = listaPlanetas[7].films;
        modalFilme1.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard2-img","Imagens/nabooPlanet.webp");

    } else if (id == "pagina5"){
        let saidaTitulo1 = document.getElementById("card1-title");
        let saidaTitulo2 = document.getElementById("card2-title");
        saidaTitulo1.innerHTML = listaPlanetas[8].name;
        saidaTitulo2.innerHTML = listaPlanetas[9].name;
        let saidaTerreno1 = document.getElementById("card1-terreno");
        let saidaTerreno2 = document.getElementById("card2-terreno");
        saidaTerreno1.innerHTML = listaPlanetas[8].terrain;
        saidaTerreno2.innerHTML = listaPlanetas[9].terrain;
        let saidaClima1 = document.getElementById("card1-clima");
        let saidaClima2 = document.getElementById("card2-clima");
        saidaClima1.innerHTML = listaPlanetas[8].climate;
        saidaClima2.innerHTML = listaPlanetas[9].climate;
        colocarImg("card1-img","Imagens/coruscant.jpg");
        colocarImg("card2-img","Imagens/kamino.jpeg");

        let modalTitulo = document.getElementById("modalCard1-titulo");
        modalTitulo.innerHTML = listaPlanetas[8].name;
        let modalTerreno = document.getElementById("modalCard1-terreno");
        modalTerreno.innerHTML = listaPlanetas[8].terrain;
        let modalClima = document.getElementById("modalCard1-clima");
        modalClima.innerHTML = listaPlanetas[8].climate;
        let modalDiametro = document.getElementById("modalCard1-diametro");
        modalDiametro.innerHTML = listaPlanetas[8].diameter;
        let modalGrav = document.getElementById("modalCard1-grav");
        modalGrav.innerHTML = listaPlanetas[8].gravity;
        let modalPO = document.getElementById("modalCard1-PO");
        modalPO.innerHTML = listaPlanetas[8].orbital_period;
        let modalPopu = document.getElementById("modalCard1-populacao");
        modalPopu.innerHTML = listaPlanetas[8].population;
        let modalPR = document.getElementById("modalCard1-PR");
        modalPR.innerHTML = listaPlanetas[8].rotation_period;
        let modalAgua = document.getElementById("modalCard1-agua");
        modalAgua.innerHTML = listaPlanetas[8].surface_water ;
        let modalFilme = document.getElementById("modalCard1-filme");
        filmes = listaPlanetas[0].films;
        modalFilme.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard1-img","Imagens/coruscantPlanet.webp");

        let modalTitulo1 = document.getElementById("modalCard2-titulo");
        modalTitulo1.innerHTML = listaPlanetas[9].name;
        let modalTerreno1 = document.getElementById("modalCard2-terreno");
        modalTerreno1.innerHTML = listaPlanetas[9].terrain;
        let modalClima1 = document.getElementById("modalCard2-clima");
        modalClima1.innerHTML = listaPlanetas[9].climate;
        let modalDiametro1 = document.getElementById("modalCard2-diametro");
        modalDiametro1.innerHTML = listaPlanetas[9].diameter;
        let modalGrav1 = document.getElementById("modalCard2-grav");
        modalGrav1.innerHTML = listaPlanetas[9].gravity;
        let modalPO1 = document.getElementById("modalCard2-PO");
        modalPO1.innerHTML = listaPlanetas[9].orbital_period;
        let modalPopu1 = document.getElementById("modalCard2-populacao");
        modalPopu1.innerHTML = listaPlanetas[9].population;
        let modalPR1 = document.getElementById("modalCard2-PR");
        modalPR1.innerHTML = listaPlanetas[9].rotation_period;
        let modalAgua1 = document.getElementById("modalCard2-agua");
        modalAgua1.innerHTML = listaPlanetas[9].surface_water ;
        let modalFilme1 = document.getElementById("modalCard2-filme");
        filmes = listaPlanetas[9].films;
        modalFilme1.innerHTML = buscaFilmes(filmes);
        colocarImg("modalCard2-img","Imagens/kaminoPlanet.webp");
    }
    
}

function buscaFilmes(listaFilmes){
    let filmes = [];
    for (let i = 0; i < listaFilmes.length; i++) {
        let texto = listaFilmes[i];
        let result = texto.substr(28,1);

        if (result == "1") {
            filmes.push("A New Hope (episode IV)");
        } else if(result == "2"){
            filmes.push("The Empire Strikes Back (episode V)");
        } else if(result == "3"){
            filmes.push("Return of the Jedi (episode VI)");
        } else if(result == 4){
            filmes.push("The Phantom Menace (episode I)");
        } else if(result == 5){
            filmes.push("Attack of the Clones (episode II)");
        } else if(result == 6){
            filmes.push("Revenge of the Sith (episode III)");
        }
    }
    
    return String(filmes);
}

function main() {
    link = "https://swapi.dev/api/planets/";
    let dados = fazGet(link);
    let dataPlanetas = JSON.parse(dados);
    let listaPlanetas = dataPlanetas.results;
    console.log(listaPlanetas);

    //Puxando os dados do Json para os cards
    let saidaTitulo1 = document.getElementById("card1-title");
    let saidaTitulo2 = document.getElementById("card2-title");
    saidaTitulo1.innerHTML = listaPlanetas[0].name;
    saidaTitulo2.innerHTML = listaPlanetas[1].name;
    let saidaTerreno1 = document.getElementById("card1-terreno");
    let saidaTerreno2 = document.getElementById("card2-terreno");
    saidaTerreno1.innerHTML = listaPlanetas[0].terrain;
    saidaTerreno2.innerHTML = listaPlanetas[1].terrain;
    let saidaClima1 = document.getElementById("card1-clima");
    let saidaClima2 = document.getElementById("card2-clima");
    saidaClima1.innerHTML = listaPlanetas[0].climate;
    saidaClima2.innerHTML = listaPlanetas[1].climate;
    colocarImg("card1-img","Imagens/tatooine.jpeg");
    colocarImg("card2-img","Imagens/alderaan.webp");

    //Puxando os dados do Json para o modal
    let modalTitulo = document.getElementById("modalCard1-titulo");
    modalTitulo.innerHTML = listaPlanetas[0].name;
    let modalTerreno = document.getElementById("modalCard1-terreno");
    modalTerreno.innerHTML = listaPlanetas[0].terrain;
    let modalClima = document.getElementById("modalCard1-clima");
    modalClima.innerHTML = listaPlanetas[0].climate;
    let modalDiametro = document.getElementById("modalCard1-diametro");
    modalDiametro.innerHTML = listaPlanetas[0].diameter;
    let modalGrav = document.getElementById("modalCard1-grav");
    modalGrav.innerHTML = listaPlanetas[0].gravity;
    let modalPO = document.getElementById("modalCard1-PO");
    modalPO.innerHTML = listaPlanetas[0].orbital_period;
    let modalPopu = document.getElementById("modalCard1-populacao");
    modalPopu.innerHTML = listaPlanetas[0].population;
    let modalPR = document.getElementById("modalCard1-PR");
    modalPR.innerHTML = listaPlanetas[0].rotation_period;
    let modalAgua = document.getElementById("modalCard1-agua");
    modalAgua.innerHTML = listaPlanetas[0].surface_water;
    let modalFilme = document.getElementById("modalCard1-filme");
    filmes = listaPlanetas[0].films;
    modalFilme.innerHTML = buscaFilmes(filmes);
    colocarImg("modalCard1-img","Imagens/tatooinePlanet.webp");

    let modalTitulo1 = document.getElementById("modalCard2-titulo");
    modalTitulo1.innerHTML = listaPlanetas[1].name;
    let modalTerreno1 = document.getElementById("modalCard2-terreno");
    modalTerreno1.innerHTML = listaPlanetas[1].terrain;
    let modalClima1 = document.getElementById("modalCard2-clima");
    modalClima1.innerHTML = listaPlanetas[1].climate;
    let modalDiametro1 = document.getElementById("modalCard2-diametro");
    modalDiametro1.innerHTML = listaPlanetas[1].diameter;
    let modalGrav1 = document.getElementById("modalCard2-grav");
    modalGrav1.innerHTML = listaPlanetas[1].gravity;
    let modalPO1 = document.getElementById("modalCard2-PO");
    modalPO1.innerHTML = listaPlanetas[1].orbital_period;
    let modalPopu1 = document.getElementById("modalCard2-populacao");
    modalPopu1.innerHTML = listaPlanetas[1].population;
    let modalPR1 = document.getElementById("modalCard2-PR");
    modalPR1.innerHTML = listaPlanetas[1].rotation_period;
    let modalAgua1 = document.getElementById("modalCard2-agua");
    modalAgua1.innerHTML = listaPlanetas[1].surface_water;
    let modalFilme1 = document.getElementById("modalCard2-filme");
    filmes = listaPlanetas[1].films;
    modalFilme1.innerHTML = buscaFilmes(filmes);
    colocarImg("modalCard2-img","Imagens/AlderaanPlanet.webp");
}

function colocarImg(idCard,imgCard){
    document.getElementById(idCard).src=imgCard;
}

main()