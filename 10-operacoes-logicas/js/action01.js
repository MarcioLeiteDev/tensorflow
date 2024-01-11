$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([1,2,3,4]);
    const tensor2 = tf.tensor([1,0,3,5]);
    const equal = tensor1.equal(tensor2);

    const tensor3 = tf.tensor([1,2,3,7]);
    const tensor4 = tf.tensor([1,0,3,5]);
    const greater = tensor3.greater(tensor4);


    txt += 'equal:\n\n';
    txt += 'Antes:\n';
    txt += tensor1.toString() + '\n\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += equal.toString() + '\n\n';

    txt += 'greater:\n\n';
    txt += 'Antes:\n';
    txt += tensor3.toString() + '\n\n';
    txt += tensor4.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += greater.toString() + '\n\n';


    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

