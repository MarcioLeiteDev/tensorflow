$('#result').text('');

function executar() {
    let txt = '';

    const tensor1 = tf.tensor([1,2,3,4]);
    const expandDims = tensor1.expandDims(1);

    const tensor2 = tf.tensor([[1],[2],[3],[4]]);
    const squeeze = tensor2.squeeze(1);

    const tensor3 = tf.tensor([1,2,3,4]);
    const cumsum = tensor3.cumsum();
    


    txt += 'expandDIms:\n\n';
    txt += 'ANTES:\n';
    txt += tensor1.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += expandDims.toString() + '\n\n';

    txt += 'squeeze:\n\n';
    txt += 'ANTES:\n';
    txt += tensor2.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += squeeze.toString() + '\n\n';

    txt += 'cumsum:\n\n';
    txt += 'ANTES:\n';
    txt += tensor3.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += cumsum.toString() + '\n\n';


    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

