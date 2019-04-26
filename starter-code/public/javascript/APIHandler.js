class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters/`)
      .then((result) => {
        let allInfo;
        const container = document.getElementsByClassName('characters-container');
        container.innerHtml = '';
        result.data.forEach((e) => {
          const card = `<div class="character-info">
          <div class="id">Id:   <font color='#A4890D'>${e.id}</font></div>
          <div class="name">Name:   <font color='#A4890D'>${e.name}</font></div>
          <div class="occupation">Occupation:  <font color='#A4890D'>${e.occupation}</font></div>
          <div class="cartoon">Is a Cartoon?:  <font color='#A4890D'>${e.cartoon}</font></div>
          <div class="weapon">Weapon:          <font color='#A4890D'>${e.weapon}</font></div>
          </div>`;
          allInfo = container.innerHtml += card;
        });
        document.getElementsByClassName('characters-container')[0].innerHTML = allInfo;
      });
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then((result) => {
        let info;
        const container = document.getElementsByClassName('characters-container');
        container.innerHtml = '';
        const card = `<div class="character-info">
          <div class="id">Id:   <font color='#A4890D'>${result.data.id}</font></div>
          <div class="name">Name:   <font color='#A4890D'>${result.data.name}</font></div>
          <div class="occupation">Occupation:  <font color='#A4890D'>${result.data.occupation}</font></div>
          <div class="cartoon">Is a Cartoon?:  <font color='#A4890D'>${result.data.cartoon}</font></div>
          <div class="weapon">Weapon:          <font color='#A4890D'>${result.data.weapon}</font></div>
          </div>`;
        info = container.innerHtml += card;
        document.getElementsByClassName('characters-container')[0].innerHTML = info;
      });
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    let objResult = {name: name, occupation:occupation,cartoon:cartoon, weapon:weapon};
    console.log(objResult);
    axios.post(`${this.BASE_URL}/characters/`,objResult)
      .then((result)=>{
        console.log('created');
      })    
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    let objResult = {name: name, occupation:occupation,cartoon:cartoon, weapon:weapon};
    axios.put(`${this.BASE_URL}/characters/${id}`, objResult)
      .then((result) => {
        console.log('save');
      });      
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then((result) => {
        console.log('deleted');
      });
  }
}
