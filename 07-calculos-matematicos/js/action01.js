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

    const tensor5 = tf.tensor([1 , -1])
    const asinh = tensor5.asinh();

    const tensor6 = tf.tensor([1 , -1])
    const atan = tensor6.atan();

    const atan2 = tf.atan2( 1,-1 );

    const tensor7 = tf.tensor([1.2, 2.5 , 3.8]);
    const ceil = tensor7.ceil(); // arredondamento para cima
    const floor = tensor7.floor(); // arredondamento para baixo


    const tensor8 = tf.tensor([1,2]);
    const cos = tensor8.cos();

    const tensor9 = tf.tensor([1,2]); // cosseno hiperbolico
    const cosh = tensor9.cosh();


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

    txt += 'asinh:\n\n';
    txt += 'Antes:\n';
    txt += tensor5.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += asinh.toString() + '\n\n';

    txt += 'atan:\n\n';
    txt += 'Antes:\n';
    txt += tensor6.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += atan.toString() + '\n\n';

    txt += 'atan2:\n\n';
    txt += 'atan2 2 de 1 e -1:\n';
    txt += atan2.toString() + '\n\n';

    txt += 'ceil:\n\n';
    txt += 'Antes:\n';
    txt += tensor7.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += ceil.toString() + '\n\n';

    txt += 'floor:\n\n';
    txt += 'Antes:\n';
    txt += tensor7.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += floor.toString() + '\n\n';

    txt += 'cos:\n\n';
    txt += 'Antes:\n';
    txt += tensor8.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += cos.toString() + '\n\n';

    txt += 'cosh:\n\n';
    txt += 'Antes:\n';
    txt += tensor9.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += cosh.toString() + '\n\n';


    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

