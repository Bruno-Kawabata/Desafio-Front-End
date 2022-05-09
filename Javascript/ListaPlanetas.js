function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLista(planeta) {
    console.log(planeta)
    linha = document.createElement("tr");
    tdNome = document.createElement("td");
    tdTerreno = document.createElement("td");
    tdClima = document.createElement("td");
    tdNome.innerHTML = planeta.name
    tdTerreno.innerHTML = planeta.terrain
    tdClima.innerHTML = planeta.climate

    linha.appendChild(tdNome);
    linha.appendChild(tdTerreno);
    linha.appendChild(tdClima);

    return linha;
}

function main() {
    let dados = fazGet("https://swapi.dev/api/planets/");
    let dataPlanetas = JSON.parse(dados);
    let listaPlanetas = dataPlanetas.results;
    console.log(listaPlanetas);
    
    // Criando uma Lista com os dados
    let tabela = document.getElementById("listaPlanetas");
    listaPlanetas.forEach(element => {
    let linha = criaLista(element);
    tabela.appendChild(linha);
    });
}

function pesquisaLista() {
    let input, filter, table, tr, td, txtValue;

    //Intialising Variables
    input = document.getElementById("entrada");
    filter = input.value.toUpperCase();
    table = document.getElementById("listaPlanetas");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

main()