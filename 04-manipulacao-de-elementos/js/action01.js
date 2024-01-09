$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([1,2,3,4]);
    const pad = tensor1.pad([[1,2]]);

    const tensor2 = tf.tensor([1,2]);
    const tensor3 = tf.tensor([3,4]);
    // const concat = tensor2.concat(tensor3);
    const concat = tensor2.concat([tensor2 , tensor3 , tensor1]);

    const tensor4 = tf.tensor([1,2]);
    const tensor5 = tf.tensor([3,4]);
    const stack = tf.stack([tensor4 , tensor5]);

    const tensor6 = tf.tensor([1,2,3,4] , [2,2]);
    const reverse = tensor6.reverse();


    txt += 'pad:\n\n';
    txt += 'ANTES:\n';
    txt += tensor1.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += pad.toString() + '\n\n';

    txt += 'concat:\n\n';
    txt += 'ANTES:\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += concat.toString() + '\n\n';

    txt += 'stack:\n\n';
    txt += 'ANTES:\n';
    txt += tensor4.toString() + '\n\n';
    txt += tensor5.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += stack.toString() + '\n\n';

    txt += 'reverse:\n\n';
    txt += 'ANTES:\n';
    txt += tensor6.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += reverse.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

