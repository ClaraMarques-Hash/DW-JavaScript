const ipDataList = [];
const searchButton = document.querySelector('#btnBuscar');
const ipInput = document.querySelector('#ipInput');
const ipTableBody = document.querySelector('#ipData');
const tableContainer = document.querySelector('#tabelaContainer');

searchButton.addEventListener('click', buscarIp);

ipInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    buscarIp();
  }
});

function buscarIp() {
  const ip = ipInput.value.trim();
  const alerta = document.querySelector('#alert-info');

  if (!ip) {
    alerta.innerHTML = `<div class="alert">Por favor, insira um IP válido.</div>`;
    return;
  }

  
  if (ipDataList.some(item => item.ip === ip)) {
    alerta.innerHTML = `<div class="alert">Esse IP já foi buscado.</div>`;
    return;
  }

  fetch(`https://ipinfo.io/${ip}/json?token=SEU_TOKEN_AQUI`)
    .then(res => res.json())
    .then(info => {
      const registro = {
        ip: info.ip || '-',
        cidade: info.city || '-',
        pais: info.country || '-',
        org: info.org || '-',
        id: Math.random().toString(36).substring(2, 8) 
      };

      ipDataList.push(registro);
      atualizarTabela();
      alerta.innerHTML = '';
    })
    .catch(() => {
      alerta.innerHTML = `<div class="alert">Erro ao buscar o IP.</div>`;
    });
}

function atualizarTabela() {
  ipTableBody.innerHTML = '';

  ipDataList.forEach(item => {
    const linha = document.createElement('tr');

    linha.innerHTML = `
      <td>${item.ip}</td>
      <td>${item.org}</td>
      <td>${item.pais}</td>
      <td>${item.cidade}</td>
      <td><button class="btnRemover" data-id="${item.id}">X</button></td>
    `;

    ipTableBody.appendChild(linha);
  });

  tableContainer.style.display = ipDataList.length ? 'block' : 'none';

  document.querySelectorAll('.btnRemover').forEach(btn => {
    btn.addEventListener('click', function () {
      const id = this.getAttribute('data-id');
      const index = ipDataList.findIndex(item => item.id === id);
      if (index !== -1) {
        ipDataList.splice(index, 1);
        atualizarTabela();
      }
    });
  });
}
