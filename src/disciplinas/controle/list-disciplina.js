$(document).ready(function() {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/disciplinas/modelo/list-disciplinas.php',
        success: function(dados) {
            for (var i = 0; i < dados.length; i++) {
                let resultado = `
            <tr>
            <td class="text-center">${dados[i].Id}</td>
            <td>${dados[i].Nome}</td>
            <td>${dados[i].Professor}</td>
            <td class="text-center">${dados[i].Nota}</td>
            <td class="text-center">
                <button class="btn btn-info btn-sm btn-view"><i class="mdi mdi-eye"></i></button>
                <button class="btn btn-primary btn-sm btn-edit"><i class="mdi mdi-pencil"></i></button>
                <button class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-trash-can"></i></button>
            </td>
        </tr>
            `

                $('tbody').append(resultado)

            }

            $('body').append('<script src="src/disciplinas/controle/view-disc.js"></script>')
        }
    })
})