$('#result').text('');

function executar(){
    let txt = '';

    const tensor1d = tf.tensor([1.5]);
    const asScalar = tensor1d.asScalar();

    txt += 'asScalar:\n\n';
    txt += 'Antes:\n';
    txt += tensor1d.toString() + '\n\n';
    txt += 'DEPOIS:\n';
    txt += asScalar.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

