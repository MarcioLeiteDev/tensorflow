$('#result').text('');

function executar(){
    let txt = '';

    const tensor1d = tf.tensor([1.5]);
    const asScalar = tensor1d.asScalar();

    const tensor2d = tf.tensor([1,2,3,4] , [2,2]);
    const flatten = tensor2d.flatten();

    const tensor1 = tf.tensor([1,2,3,4] , [2,2]);
    const as1D = tensor1.as1D()

    const tensor2 = tf.tensor([1,2,3,4] , [2,2,1]);
    const as2D = tensor2.as2D(2,2)

    const tensor3 = tf.tensor([1,2,3,4] , [2,2,1,1]);
    const as3D = tensor3.as3D(2,2,1)

    const tensor4 = tf.tensor([1,2,3,4]);
    const as4D = tensor4.as4D(1,2,2,1)

    const tensor5 = tf.tensor([1,2,3,4,5,6,7,8]);
    const as5D = tensor5.as5D(1,2,2,2,1)

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

    txt += 'as2D:\n\n';
    txt += 'Antes:\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'DEPOIS:\n';
    txt += as2D.toString() + '\n\n';

    txt += 'as3D:\n\n';
    txt += 'Antes:\n';
    txt += tensor3.toString() + '\n\n';
    txt += 'DEPOIS:\n';
    txt += as3D.toString() + '\n\n';

    txt += 'as4D:\n\n';
    txt += 'Antes:\n';
    txt += tensor4.toString() + '\n\n';
    txt += 'DEPOIS:\n';
    txt += as4D.toString() + '\n\n';

    txt += 'as5D:\n\n';
    txt += 'Antes:\n';
    txt += tensor5.toString() + '\n\n';
    txt += 'DEPOIS:\n';
    txt += as5D.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

