const charactersAPI = new APIHandler("http://localhost:8000");


$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
  // document.getElementsByClassName('characters-container').innerHtml ='';
  const a = charactersAPI.getFullList()
  // console.log(a);
  const b = document.getElementsByClassName('character-info');
  b.parentNode.removeChild(b)

  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
