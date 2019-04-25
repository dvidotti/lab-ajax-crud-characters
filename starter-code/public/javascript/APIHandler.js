class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters/`)
      .then((result) => {
        let allInfo;
        const container = document.getElementsByClassName('characters-container');
        container.innerHtml = '';
        result.data.forEach((e) => {
         // const nameResult = e.name;
          // const occupationResult = e.occupation;
        //  const weaponResult = e.weapon;
        //  const cartoonResult = e.cartoon;
          const card = `<div class="character-info">
          <div class="name">${e.name}</div>
          <div class="occupation">${e.occupation}</div>
          <div class="cartoon">${e.cartoon}</div>
          <div class="weapon">${e.weapon}</div>
        </div>`
          allInfo = container.innerHtml += card;
          // container.appendChild(charInfo);
        });
         console.log(allInfo);
          return allInfo;
      // document.getElementById('character-info')
      });
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
