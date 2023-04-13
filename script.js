$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "alunos.xml",
        dataType: "xml",
        success: function(xml) {
            $(xml).find('aluno').each(function() {
                var nome = $(this).find('nome').text();
                var idade = $(this).find('idade').text();
                var nota = $(this).find('nota').text();
                $('<tr></tr>').html('<td>'+nome+'</td><td>'+idade+'</td><td>'+nota+'</td>').appendTo('#tabela-alunos tbody');
            });
        },
        error: function() {
            alert("Erro ao carregar o arquivo XML.");
        }
    });
});

