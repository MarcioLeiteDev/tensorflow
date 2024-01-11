$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([true,true,true]);
    // const all = tensor1.all();
    const all = tf.all(tensor1);

    const tensor2 = tf.tensor([1,2,3,4]);
    const max = tensor2.max()

    const tensor3 = tf.tensor([1,2,3,4]);
    const min = tensor2.min()

    const tensor4 = tf.tensor([1,2,3,4]);
    const mean = tensor4.mean()

    const tensor5 = tf.tensor([1,2,3,4]);
    const prod = tensor5.prod()

    txt += 'all:\n\n';
    txt += 'Antens:\n';
    txt += tensor1.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += all.toString() + '\n\n';

    txt += 'max:\n\n';
    txt += 'Antens:\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += max.toString() + '\n\n';

    txt += 'min:\n\n';
    txt += 'Antens:\n';
    txt += tensor3.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += min.toString() + '\n\n';

    txt += 'mean:\n\n';
    txt += 'Antens:\n';
    txt += tensor4.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += mean.toString() + '\n\n';

    txt += 'prod:\n\n';
    txt += 'Antens:\n';
    txt += tensor5.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += prod.toString() + '\n\n';


    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

