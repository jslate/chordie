with_sharps = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#']

$('#compute').on('click', function(){
  i = with_sharps.indexOf($('#base').val());
  $('#output').html(with_sharps[i] + ' ' + loopAroundIndex(with_sharps, i+4) + ' ' + loopAroundIndex(with_sharps, i+7));
});

function loopAroundIndex(array, index) {
  if (array.length < index)
    return array[index - array.length];
  else
    return array[index];
}