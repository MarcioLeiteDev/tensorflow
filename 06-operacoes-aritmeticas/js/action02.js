$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([1,2,3,4]);
    const tensor2 = tf.tensor([0,5,1,3]);
    const maximum = tensor1.maximum(tensor2);

    const tensor3 = tf.tensor([1,2,3,4]);
    const tensor4 = tf.tensor([0,5,1,3]);
    const minimum = tensor3.minimum(tensor4);

    txt += 'Maximum:\n\n';
    txt += 'Antes:\n';
    txt += tensor1.toString() + '\n\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += maximum.toString() + '\n\n';

    txt += 'Minimum:\n\n';
    txt += 'Antes:\n';
    txt += tensor3.toString() + '\n\n';
    txt += tensor4.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += minimum.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

