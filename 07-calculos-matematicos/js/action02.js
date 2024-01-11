$('#result').text('');

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1, 2]);
    const exp = tensor1.exp();

    const tensor2 = tf.tensor([1, 2]);
    const expm1 = tensor2.expm1();

    const tensor3 = tf.tensor([1, 2]);
    const log = tensor3.log();

    const tensor4 = tf.tensor([-1, 2]);
    const neg = tensor4.neg();

    const tensor5 = tf.tensor([1.2 , 3.8 ,2.5 ] );
    const round = tensor4.round();

    const tensor6 = tf.tensor([9,25] );
    const rsqrt = tensor6.rsqrt();

    const tensor7 = tf.tensor([-1, ,2, -3 , 0] );
    const sign = tensor7.sign();

    txt += 'exp:\n\n';
    txt += 'Antes:\n';
    txt += tensor1.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += exp.toString() + '\n\n';

    txt += 'expm1:\n\n';
    txt += 'Antes:\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += expm1.toString() + '\n\n';

    txt += 'log:\n\n';
    txt += 'Antes:\n';
    txt += tensor3.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += log.toString() + '\n\n';

    txt += 'neg:\n\n';
    txt += 'Antes:\n';
    txt += tensor4.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += neg.toString() + '\n\n';

    txt += 'round:\n\n';
    txt += 'Antes:\n';
    txt += tensor5.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += round.toString() + '\n\n';

    txt += 'rsqrt:\n\n';
    txt += 'Antes:\n';
    txt += tensor6.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += rsqrt.toString() + '\n\n';

    txt += 'sign:\n\n';
    txt += 'Antes:\n';
    txt += tensor7.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += sign.toString() + '\n\n';


    exibir(txt)
}

function exibir(str = '') {
    $('#result').text(str)
}

