

$(document).ready(function() {
  $('#input-tags').selectize({
      plugins: ['remove_button', 
              'drag_drop',
              'optgroup_columns'],  
      delimiter: ',',
      persist: false,
      create: function(input) {
        return { 
          value: input,
          text: input 
        }
      }
  });
  // return ['tag1', 'tag2', …]
  function viewTags() {
    tags = document.getElementById('input-tags');
    console.log(tags.value.split(','));
  }
  });
});
