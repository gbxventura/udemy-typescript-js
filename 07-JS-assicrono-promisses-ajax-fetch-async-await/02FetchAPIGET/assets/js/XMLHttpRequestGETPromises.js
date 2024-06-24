// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     // XHR = XML HTTP REQUEST === ajax
//     const xhr = new XMLHttpRequest();
//     // METODO , URL, ASSYNC(TRUE)/SYNC(FALSE)
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});
async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("Erro 404!");

    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
    console.log("ERROR 404!" + e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
