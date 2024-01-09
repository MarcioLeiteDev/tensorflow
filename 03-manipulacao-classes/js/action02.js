$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([[1,2] , [3,4]]);
    const tensor2 = tf.tensor([true,false, true, false]);
    const toFloat = tensor2.toFloat()
    const tensor3 = tf.tensor([1.2,2.5, 3.7, 4.8]);
    const toInt = tensor3.toInt()
    const tensor4 = tf.tensor([1,0,1,0]);
    const toBool = tensor4.toBool()



    txt += 'dispose:\n\n';
    txt += 'Antes:\n\n';
    txt += tensor1.toString();
    tensor1.dispose();
    // tensor1.print();
    txt += 'Depois:\n\n';
    txt += 'memoria liberada';
    txt += '\n\n';

    txt += 'toFloat:\n\n';
    txt += 'Antes:\n\n';
    txt += tensor2.toString();
    txt += 'Depois:\n\n';
    txt += toFloat;

    txt += 'toInt:\n\n';
    txt += 'Antes:\n\n';
    txt += tensor3.toString();
    txt += 'Depois:\n\n';
    txt += toInt;

    txt += 'toBool:\n\n';
    txt += 'Antes:\n\n';
    txt += tensor3.toString();
    txt += 'Depois:\n\n';
    txt += toBool;

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

