$('#result').text('');

function executar(){
    let txt = '';

    const escalar = tf.scalar(1.5);

    const tensor1d = tf.tensor1d([1,2,3]);

    // const tensor2d = tf.tensor2d([1,2,3,4], [2,2]);
    const tensor2d = tf.tensor2d([[1,2] , [3,4]]);

    // const tensor3d = tf.tensor3d([[ [1],[2]], [ [3],[4] ]]);
    const tensor3d = tf.tensor3d([1,2,3,4] , [2,2,1]);

    txt += 'Tensor Escalar: \n' + escalar.toString() + '\n\n';
    txt += 'Tensor de 1 Dimensão: \n' + tensor1d.toString() + '\n\n';
    txt += 'Tensor de 2 Dimensão: \n' + tensor2d.toString() + '\n\n';
    txt += 'Tensor de 3 Dimensão: \n' + tensor3d.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

