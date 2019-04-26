const charactersAPI = new APIHandler('http://localhost:8000');


$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    console.log(document.getElementById('name-new').value)
    charactersAPI.getFullList();
  };

  // eslint-disable-next-line func-names
  document.getElementById('fetch-one').onclick = function () {
    const idCharacter = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(idCharacter);
  };

  document.getElementById('delete-one').onclick = function () {
    const idCharacter = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(idCharacter);
  };

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault()
    const id = document.getElementById('id-edit').value;
    const nameId = document.getElementById('name-edit').value;
    const occupationId = document.getElementById('occupation-edit').value;
    const weaponId = document.getElementById('weapon-edit').value;
    const isACartoon = document.getElementById('cartoon-edit').checked;
    charactersAPI.updateOneRegister(id, nameId, occupationId, weaponId,isACartoon);
  };

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault()
    const nameId = document.getElementById('name-new').value;
    const occupationId = document.getElementById('occupation-new').value;
    const weaponId = document.getElementById('weapon-new').value;
    const isACartoon = document.getElementById('cartoon-new').checked;
    console.log(isACartoon);
    charactersAPI.createOneRegister(nameId, occupationId, weaponId,isACartoon);
  };
});
