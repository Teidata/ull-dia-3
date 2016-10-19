

$(document).ready(function() {
  
  $('#input-tags').selectize({
      delimiter: ',',
      persist: false,
      plugins: [
              'remove_button', 
              'drag_drop',
              'optgroup_columns'
               ],  
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
