function consultaCep() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            if (typeof response.cep === "undefined") {
                alert('Cep não encontrado!');
            }
            else {
                $("#titulo_cep").html("CEP: " + response.cep);
                $("#logradouro").html(response.logradouro);
                $("#complemento").html(response.complemento);
                $("#localidade").html(response.localidade);
                $("#uf").html(response.uf);
                $("#bairro").html(response.bairro);
                $(".div_cep").show();
                $(".barra-progresso").hide();
            }
        },
        error: function (xhr, response, errorThrown) {
            console.log(response);
            alert('Cep não encontrado!');
        }
    })
}

$(function () { // Esconde o corpo do html e barra de progresso, para que seja exibido apenas no momento oportuno.
    $(".div_cep").hide();
    $(".barra-progresso").hide();
})

