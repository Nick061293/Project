$(document).ready(function() {
    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#add-disc').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: '/src/disciplinas/modelo/add-disc.php',
            success: function(dados) {
                $('#add-disc').after(`
                    <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                        <strong>${dados.mensagem}</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                `)
                $('#Nome').val('')
                $('#Professor').val('')
                $('#Nota').val('')
            }
        })
    })
})