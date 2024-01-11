$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([1,2,3,4] , [2,2]);
    const tensor2 = tf.tensor([5,6,7,8] , [2,2]);

    const matMul = tensor1.matMul(tensor2);

    txt += 'matMul:\n\n';
    txt += 'Antes:\n';
    txt += tensor1.toString() + '\n\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += matMul.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

