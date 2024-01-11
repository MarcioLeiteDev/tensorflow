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

    txt += 'roubnd:\n\n';
    txt += 'Antes:\n';
    txt += tensor5.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += round.toString() + '\n\n';


    exibir(txt)
}

function exibir(str = '') {
    $('#result').text(str)
}

