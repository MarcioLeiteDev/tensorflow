$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([true,true,true]);
    // const all = tensor1.all();
    const all = tf.all(tensor1);

    const tensor2 = tf.tensor([1,2,3,4]);
    const max = tensor2.max()

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


    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

