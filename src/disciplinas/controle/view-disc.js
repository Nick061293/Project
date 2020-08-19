function btnClose() {
    //monitorar click na classe btnClose
    $('.btn-close').click(function(e) {
        e.preventDefault()

        $('#form').empty()
        $('#form').hide(2000)
        $('.row').show(2000)
    })
}

$(document).ready(function() {
    //click nos botoes com as classes

    $('.btn-view').click(function(e) {
        e.preventDefault()

        var dados = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/view-disc.php',
            success: function(dados) {

                $('#form').show(3000)
                $('.row').hide(3000)

                $('#form').load('src/disciplinas/visao/add-disc.html', function() {
                    $('#h4').empty()
                    $('#h4').append('Visualizacao do Registro')
                    $('.btn-save').after('<button class="btn btn-success btn-block btn-close"><i class="mdi mdi-close"></i>Fechar</button>')
                    $('.btn-save').hide()
                    $('#Nome').attr('disabled', true)
                    $('#Nome').val(dados[0].Nome)
                    $('#Professor').attr('disabled', true)
                    $('#Professor').val(dados[0].Professor)
                    $('#Nota').attr('disabled', true)
                    $('#Nota').empty()
                    $('#Nota').append(`<option>${dados[0].Nota}</option>`)

                    btnClose()

                })
            }
        })
    })
})