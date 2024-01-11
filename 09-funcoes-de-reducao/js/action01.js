$('#result').text('');

function executar(){
    let txt = '';

    const tensor1 = tf.tensor([true,true,true]);
    // const all = tensor1.all();
    const all = tf.all(tensor1);

    txt += 'all:\n\n';
    txt += 'Antens:\n';
    txt += tensor1.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += all.toString() + '\n\n';


    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

