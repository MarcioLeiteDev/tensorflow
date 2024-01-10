$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([-1, 2, -3, 4]);
    const abs = tensor1.abs();

    const tensor2 = tf.tensor([1, -1]);
    const acos = tensor2.acos();

    const tensor3 = tf.tensor([1 , 2.5])
    const acosh = tensor3.acosh();

    const tensor4 = tf.tensor([1 , -1])
    const asin = tensor4.asin();



    txt += 'abs:\n\n';
    txt += 'Antes:\n';
    txt += tensor1.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += abs.toString() + '\n\n';

    txt += 'acos:\n\n';
    txt += 'Antes:\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += acos.toString() + '\n\n';

    txt += 'acosh:\n\n';
    txt += 'Antes:\n';
    txt += tensor3.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += acosh.toString() + '\n\n';

    txt += 'asin:\n\n';
    txt += 'Antes:\n';
    txt += tensor4.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += asin.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

