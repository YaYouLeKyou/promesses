//création de la promesse

const PromiseGetUsers = new Promise(function (resolve, reject) {
  if (typeof USERS !== "undefined") {
    resolve(USERS);
  } else {
    reject("Accès aux users impossible");
  }
});

//récupérer l' état de la promesse

PromiseGetUsers.then(function (u) {
  let liste = `<ul>`;
  for (let user of u) {
    liste += `<li>${user.name}</li>`;
  }
  liste += `</ul>`;
  document.querySelector("#users").innerHTML = liste;
}).catch(function (e) {
  console.log(e);
});

/********************News*************************/

//création de la promesse en fléché

const PromiseGetNews = new Promise((resolve, reject) => {
  if (typeof NEWS !== "undefined") {
    resolve(NEWS);
  } else {
    reject("Accès aux news impossible");
  }
});

//récupérer l' état de la promesse en fléché

PromiseGetNews.then((n) => {
  let liste = `<ul>`;
  for (let actu of n) {
    liste += `<li>${actu.title}</li>`;
  }
  liste += `</ul>`;
  document.querySelector("#news").innerHTML = liste;
}).catch((e) => console.log(e));
