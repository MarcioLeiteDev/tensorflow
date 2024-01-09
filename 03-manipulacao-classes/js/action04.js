$('#result').text('');

function executar() {
    let txt = '';

    const fdata1 = tf.tensor([1,2,3,4]);
    const fdata2 = tf.tensor([[1,2],[3,4]]);
    const fdata3 = tf.scalar(2);
    const dataSync1 = fdata1.dataSync();
    const dataSync2 = fdata2.dataSync();
    const dataSync3 = fdata3.dataSync();

    const ArrayData1 = tf.tensor([1,2,3,4]);
    const ArrayData2 = tf.tensor([[1,2],[3,4]]);
    const ArrayData3 = tf.scalar(2);
    const arraySync1 = ArrayData1.arraySync();
    const arraySync2 = ArrayData2.arraySync();
    const arraySync3 = ArrayData3.arraySync();

    txt += 'dataSync:\n';
    txt += 'Antes:\n';
    txt += fdata1.toString() + '\n\n';
    txt += fdata2.toString() + '\n\n';
    txt += fdata3.toString() + '\n\n';
    txt += 'Depois:\n';
    txt += arraySync1.toString() + '\n\n';
    txt += arraySync2.toString() + '\n\n';
    txt += arraySync3.toString() + '\n\n';

    exibir(txt)
}

function exibir(str=''){
    $('#result').text(str)
}

