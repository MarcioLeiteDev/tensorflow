$('#result').text('');

function executar(){
    let txt = '';

    const fill0 = tf.fill([1], 0);
    const fill1 = tf.fill([2,2], 1);
    const fill2 = tf.fill([2,2], 2);

    const zeros1 = tf.zeros([1]);
    const zeros2 = tf.zeros([2,2]);
    const zeros3 = tf.zeros([2,4]);

    txt+= 'fill:\n\n';
    txt+= fill0.toString() + '\n\n';
    txt+= fill1.toString() + '\n\n';
    txt+= fill2.toString() + '\n\n';

    txt+= 'Zeros:\n\n';
    txt+= zeros1.toString() + '\n\n';
    txt+= zeros2.toString() + '\n\n';
    txt+= zeros3.toString() + '\n\n';


    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

