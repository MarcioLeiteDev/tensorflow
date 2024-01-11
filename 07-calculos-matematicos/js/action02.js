$('#result').text('');

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2]);
    const exp = tensor1.exp();

    txt += 'exp:\n\n';
    txt += 'Antes:\n';
    txt += tensor1.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += exp.toString() + '\n\n';


    exibir(txt)
}

function exibir(str = '') {
    $('#result').text(str)
}

