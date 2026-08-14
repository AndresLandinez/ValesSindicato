// ========== DATOS INICIALES ==========
const DEFAULT_USERS = [
  { user: "Hernan", name: "Hernan Ramiro Betancur Osorio", id: "4002302" },
  { user: "Over",  name: "Overmar Diaz Castro",                id: "10603346" },
  { user: "Otto",  name: "Otto Ivan Marrugo Suarez",           id: "10603188" },
  { user: "Rico",  name: "Luis Alberto Rico Carmona",          id: "10602357" },
  { user: "Antonio", name: "Antonio Jimenez Rodriguez",        id: "4002419" },
  { user: "Dewis", name: "Dewis Moreno Cota",                  id: "4005046" },
  { user: "Landinez", name: "Diego Andres Landinez",           id: "4004721" },
  { user: "Victor", name: "Victor Ramos Sanjuan",             id: "4002540" },
  { user: "Dairo", name: "Dairo Perez Barrios",                id: "10604658" },
  { user: "Gonar", name: "Gonzalo Arnedo Arnedo",             id: "4004957" },
  { user: "Paniza", name: "Jefferson Paniza Rodriguez",        id: "10602360" },
  { user: "Guardo", name: "Jose David Guardo Pajaro",          id: "4004956" },
  { user: "Jose",  name: "Jose Luis Hernandez Castilla",      id: "4004958" },
  { user: "Canoles", name: "Oscar Enrique Canoles Pajaro",    id: "4002316" },
  { user: "Wilman", name: "Wilman Manrique Ramirez",           id: "4002441" },
  { user: "Brandon", name: "Edil Brandon Lambis Medina",       id: "10604034" },
  { user: "Yeferson", name: "Yeferson Adrian Martinez Acevedo", id: "10604451" },
];

const ADMIN_CREDENTIALS = {
  user: "admin",
  pass: "sindicato2024"
};

// ========== ESTADO ==========
let list = [];

// ========== INICIALIZACIÓN ==========
function init() {
  const saved = localStorage.getItem("sindicato_users");
  if (saved) {
    try {
      list = JSON.parse(saved);
    } catch (e) {
      list = [...DEFAULT_USERS];
      saveUsers();
    }
  } else {
    list = [...DEFAULT_USERS];
    saveUsers();
  }
  populateSelects();
}

function saveUsers() {
  localStorage.setItem("sindicato_users", JSON.stringify(list));
}

function populateSelects() {
  const sel1 = document.getElementById("poderdante");
  const sel2 = document.getElementById("apoderado");
  const val1 = sel1.value;
  const val2 = sel2.value;

  sel1.innerHTML = '<option value="">Seleccione...</option>';
  sel2.innerHTML = '<option value="">Seleccione...</option>';

  const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name));

  sorted.forEach((item) => {
    const opt1 = document.createElement("option");
    opt1.value = item.user;
    opt1.textContent = item.user;   // CÓDIGO CORTO visible
    sel1.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = item.user;
    opt2.textContent = item.user;   // CÓDIGO CORTO visible
    sel2.appendChild(opt2);
  });

  if (list.find(u => u.user === val1)) sel1.value = val1;
  if (list.find(u => u.user === val2)) sel2.value = val2;
}

// ========== DOCUMENTOS ==========
const poderdante = document.getElementById("poderdante");
const apoderado  = document.getElementById("apoderado");

function getDate() {
  return new Date().toLocaleDateString("es-CO", {
    year: "numeric", month: "long", day: "numeric"
  });
}

function getUserData(value) {
  return list.find(item => item.user === value);
}

function validateSelection() {
  if (!poderdante.value || !apoderado.value) {
    alert("Por favor seleccione ambos usuarios.");
    return false;
  }
  if (poderdante.value === apoderado.value) {
    alert("El poderdante y el apoderado deben ser personas diferentes.");
    return false;
  }
  return true;
}

function buildHTML(tipo, p1, p2, date) {
  if (tipo === "asamblea") {
    return `
      <div class="print">
        <p class="opal">Bolívar - Cartagena de Indias</p>
        <p class="opal">${date}</p>
        <br><br>
        <p class="dest">Sr(es) SINTRAPETROCOL</p>
        <br>
        <p class="text">
          Yo, ${p1.name}, con código de identificación ${p1.id}, en calidad de miembro de SINTRAPETROCOL, con la presente otorgo poder de representación sindical a:<br><br>
          Nombre del Representante Sindical: ${p2.name}<br>
          Número de código del Representante: ${p2.id}<br><br>
          El representante sindical mencionado anteriormente tiene el poder y la autoridad para actuar en mi nombre y en representación del sindicato en todos los asuntos relacionados con la representación sindical.<br><br>
          Este poder de representación sindical es válido a partir de la fecha de su firma y permanece en vigor durante la asamblea a la que haya lugar.
        </p>
        <br><br><br>
        <p class="dest">
          Cordialmente<br><br><br><br>
          _____________________________<br>
          Firma<br>${p1.name}<br>
          C.c.
        </p>
        <br><br>
        <i class="by">By AL</i>
      </div>`;
  } else {
    return `
      <div class="print">
        <p class="opal">Bolívar - Cartagena de Indias</p>
        <p class="opal">${date}</p>
        <br><br>
        <p class="dest">Sr(es) SINTRAPETROCOL</p>
        <br>
        <p class="text">
          Yo, ${p1.name}, identificado con el número de código ${p1.id}, por medio del presente documento otorgo poder especial, amplio y suficiente a ${p2.name}, identificado con el código ${p2.id}, para que en mi nombre y representación pueda reclamar la valera de almuerzo del mes correspondiente.
        </p>
        <br><br><br>
        <p class="dest">
          Cordialmente<br><br><br><br><br>
          _____________________________<br>
          Firma<br>${p1.name}<br>
          C.c.
        </p>
        <br><br>
        <i class="by">By AL</i>
      </div>`;
  }
}

function renderDocument(tipo) {
  if (!validateSelection()) return;

  const p1 = getUserData(poderdante.value);
  const p2 = getUserData(apoderado.value);
  const date = getDate();

  document.getElementById("print").innerHTML = buildHTML(tipo, p1, p2, date);

  setTimeout(() => window.print(), 300);
}

document.getElementById("asamblea").addEventListener("click", () => renderDocument("asamblea"));
document.getElementById("valeras").addEventListener("click", () => renderDocument("valeras"));

// ========== MODALES ADMIN ==========
const modalLogin = document.getElementById("modalLogin");
const modalAdmin = document.getElementById("modalAdmin");

function openModal(modal) { modal.style.display = "block"; }
function closeModal(modal) { modal.style.display = "none"; }

document.getElementById("btnAdmin").addEventListener("click", () => {
  openModal(modalLogin);
  document.getElementById("adminUser").value = "";
  document.getElementById("adminPass").value = "";
  document.getElementById("loginError").textContent = "";
  document.getElementById("adminUser").focus();
});

document.getElementById("closeLogin").addEventListener("click", () => closeModal(modalLogin));
document.getElementById("closeAdmin").addEventListener("click", () => closeModal(modalAdmin));

window.addEventListener("click", (e) => {
  if (e.target === modalLogin) closeModal(modalLogin);
  if (e.target === modalAdmin) closeModal(modalAdmin);
});

document.getElementById("btnLogin").addEventListener("click", () => {
  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value;

  if (user === ADMIN_CREDENTIALS.user && pass === ADMIN_CREDENTIALS.pass) {
    closeModal(modalLogin);
    openModal(modalAdmin);
    renderAdminList();
    clearAddForm();
  } else {
    document.getElementById("loginError").textContent = "Usuario o contraseña incorrectos.";
  }
});

document.getElementById("adminPass").addEventListener("keypress", (e) => {
  if (e.key === "Enter") document.getElementById("btnLogin").click();
});

// ========== ADMIN: LISTAR / ELIMINAR ==========
function renderAdminList() {
  const container = document.getElementById("adminUserList");
  container.innerHTML = "";

  const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name));

  sorted.forEach((item) => {
    const div = document.createElement("div");
    div.className = "user-item";
    div.innerHTML = `
      <div class="user-info">
        <strong>${item.name}</strong>
        <span>Código: ${item.user} | ID: ${item.id}</span>
      </div>
      <button class="btnDelete" data-user="${item.user}">Eliminar</button>
    `;
    container.appendChild(div);
  });

  container.querySelectorAll(".btnDelete").forEach(btn => {
    btn.addEventListener("click", () => {
      if (confirm("¿Está seguro de eliminar a este miembro?")) {
        list = list.filter(u => u.user !== btn.getAttribute("data-user"));
        saveUsers();
        populateSelects();
        renderAdminList();
      }
    });
  });
}

// ========== ADMIN: AGREGAR ==========
function clearAddForm() {
  document.getElementById("newUserKey").value = "";
  document.getElementById("newUserName").value = "";
  document.getElementById("newUserId").value = "";
  document.getElementById("addUserMsg").textContent = "";
}

document.getElementById("btnAddUser").addEventListener("click", () => {
  const key  = document.getElementById("newUserKey").value.trim();
  const name = document.getElementById("newUserName").value.trim();
  const id   = document.getElementById("newUserId").value.trim();
  const msg  = document.getElementById("addUserMsg");

  if (!key || !name || !id) {
    msg.textContent = "Complete todos los campos.";
    msg.className = "error-msg";
    return;
  }
  if (/\s/.test(key)) {
    msg.textContent = "El código corto no debe contener espacios.";
    msg.className = "error-msg";
    return;
  }
  if (list.find(u => u.user === key)) {
    msg.textContent = "Ya existe un miembro con ese código corto.";
    msg.className = "error-msg";
    return;
  }
  if (list.find(u => u.id === id)) {
    msg.textContent = "Ya existe un miembro con ese número de código.";
    msg.className = "error-msg";
    return;
  }

  list.push({ user: key, name: name, id: id });
  saveUsers();
  populateSelects();
  renderAdminList();
  clearAddForm();

  msg.textContent = "Miembro agregado correctamente.";
  msg.className = "success-msg";
  setTimeout(() => msg.textContent = "", 3000);
});

// ========== INICIAR ==========
init();
