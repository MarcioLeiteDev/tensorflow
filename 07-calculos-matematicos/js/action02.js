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

    const tensor8 = tf.tensor([1,-1] );
    const sin = tensor8.sin();

    const tensor9 = tf.tensor([1,-1] );
    const sinh = tensor9.sinh();

    const tensor10 = tf.tensor([9,25,49,100] );
    const sqrt = tensor10.sqrt();

    const tensor11 = tf.tensor([9,25,49,100] );
    const square = tensor11.square();

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

    txt += 'sin:\n\n';
    txt += 'Antes:\n';
    txt += tensor8.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += sin.toString() + '\n\n';

    txt += 'sinh:\n\n';
    txt += 'Antes:\n';
    txt += tensor9.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += sinh.toString() + '\n\n';

    txt += 'sqrt:\n\n';
    txt += 'Antes:\n';
    txt += tensor10.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += sqrt.toString() + '\n\n';

    txt += 'square:\n\n';
    txt += 'Antes:\n';
    txt += tensor11.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += square.toString() + '\n\n';


    exibir(txt)
}

function exibir(str = '') {
    $('#result').text(str)
}

