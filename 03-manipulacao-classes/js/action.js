$('#result').text('');

function executar(){
    let txt = '';

    const tensor1d = tf.tensor([1.5]);
    const asScalar = tensor1d.asScalar();

    const tensor2d = tf.tensor([1,2,3,4] , [2,2]);
    const flatten = tensor2d.flatten();

    const tensor1 = tf.tensor([1,2,3,4] , [2,2]);
    const as1D = tensor1.as1D()

    txt += 'asScalar:\n\n';
    txt += 'Antes:\n';
    txt += tensor1d.toString() + '\n\n';
    txt += 'DEPOIS:\n';
    txt += asScalar.toString() + '\n\n';

    txt += 'flatten:\n\n';
    txt += 'Antes:\n';
    txt += tensor2d.toString() + '\n\n';
    txt += 'DEPOIS:\n';
    txt += flatten.toString() + '\n\n';

    txt += 'as1D:\n\n';
    txt += 'Antes:\n';
    txt += tensor1.toString() + '\n\n';
    txt += 'DEPOIS:\n';
    txt += as1D.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

