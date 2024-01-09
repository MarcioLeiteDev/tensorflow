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
    const tensor5 = tf.tensor([1,2,3,4]);
    const reshape = tensor5.reshape([2,2]);
    const tensor6 = tf.tensor([[1,2],[3,4]]);
    const tensor7 = tf.tensor([1,2,3,4]);
    const reshapeAs = tensor6.reshapeAs(tensor7);
    



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

    txt += 'reshape:\n\n';
    txt += 'Antes:\n\n';
    txt += tensor4.toString() + '\n\n';
    txt += 'Depois:\n\n';
    txt += reshape.toString() + '\n\n';

    txt += 'reshapeAs:\n\n';
    txt += 'Antes:\n\n';
    txt += tensor6.toString() + '\n\n';
    txt += 'Depois:\n\n';
    txt += reshapeAs.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

