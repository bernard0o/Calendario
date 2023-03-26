window.onload = function(){
    /* Data atual */
    const data = new Date();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let dia = data.getDate();
    let toWordsDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let toWordsYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    /* Quantidade de dias do mês atual */
    let data2 = new Date(ano, mes + 1, 0);
    let ultimoDiaMes = data2.getDate();
    let data3 = new Date(ano, mes, 1);
    let primeiroDiaMes = data3.getDay() + 1;
    
    /* Passando dados pro HTML*/
    document.getElementById("ano").innerText += ` ${ano}`;
    document.getElementById("data").innerText = `${toWordsDay[data.getDay()]}, ${dia} de ${toWordsYear[mes]}`;
    let local = document.getElementById("dias");
    let count = 0;
    for (let i = 1; i <= ultimoDiaMes + count; i++){
        let div = document.createElement("div");
        if (i != dia + count){
            div.className = "dia";
        } else{
            div.className = "diaAtual";
        }
        if (i >= primeiroDiaMes){
            div.innerText = `${i - count}`;
        }
        else{
            div.className = "dia";
            count ++;
        }
        local.appendChild(div);
    }
};