$('#result').text('');

function executar(){
    let txt = '';

    const tensor = tf.tensor([1,2,3,4]);
    const tensor1 = tf.tensor([[1,2] , [3,4]]);
    const tensor2 = tf.tensor( [1,2,3,4] , [2,2] );
    // const tensor2d = tf.tensor2d([[1,2,3,4] , [2,2]]);

    tf.tensor([1,2,3,4]).print();
    tensor1.print();
    tensor2.print();
    tensor.print();

    txt += 'Tensor Padrão Uma Dimensão: \n' + tensor.toString() + '\n\n';
    txt += 'Tensor Padrão Duas DImensões: \n' + tensor1.toString() + '\n\n';
    txt += 'Tensor Padrão com Dimensionalidade: \n' + tensor2.toString() + '\n\n';


    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

