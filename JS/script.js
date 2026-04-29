const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
let date = new Date().toLocaleDateString();

const list = [
  { user: "Hernan", name: "Hernan Ramiro Betancur Osorio", id: "4002302" },
  { user: "Over", name: "Overmar Diaz Castro", id: "10603346" },
  { user: "Otto", name: "Otto Ivan Marrugo Suarez", id: "10603188" },
  { user: "Rico", name: "Luis Alberto Rico Carmona", id: "10602357" },
  { user: "Antonio", name: "Antonio Jimenez Rodriguez", id: "4002419" },
  { user: "Dewis", name: "Dewis Moreno Cota", id: "4005046" },
  { user: "Landinez", name: "Diego Andres Landinez", id: "4004721" },
  { user: "Victor", name: "Victor Ramos Sanjuan", id: "4002540" },
  { user: "Dairo", name: "Dairo Perez Barrios", id: "10604658" },
  { user: "Gonar", name: "Gonzalo Arnedo Arnedo", id: "4004957" },
  { user: "Paniza", name: "Jefferson Paniza Rodriguez", id: "10602360" },
  { user: "Guardo", name: "Jose David Guardo Pajaro", id: "4004956" },
  { user: "Jose", name: "Jose Luis Hernandez Castilla", id: "4004958" },
  { user: "Canoles", name: "Oscar Enrique canoles Pajaro", id: "4002316" },
  { user: "Wilman", name: "Wilman Manrique Ramirez", id: "4002441" },
  { user: "Brandon", name: "Edil Brandon Lambis Medina", id: "10604034" },
  { user: "Yeferson", name: "Yeferson Adrian Martinez Acevedo", id: "10604451" },
];

function asamblea() {
  let name1 = "";
  let id1 = "";
  let name2 = "";
  let id2 = "";

  if (user1.value === 'null' || user2.value === 'null') {
    alert("Ingrese usuario");
  } else {
    list.forEach((e) => {
      if (user1.value === e.user) {
        name1 = e.name;
        id1 = e.id;
        console.log(name1, id1);
      }
      if (user2.value === e.user) {
        name2 = e.name;
        id2 = e.id;
        console.log(name2, id2);
      }
    });
    document.getElementById('print').innerHTML = `

    <div class = "print">
    <h3 class = "opal">Bolívar - Cartagena de Indias</h3>
    <h3 class = "opal">${date}</h3>
    <br><br><br><br><br><br>
    <h3 class = "dest"> Sr(es) <br/>
    SINTRAPETROCOL</h3><br><br><br>
    <p class= "text">
    Yo, ${name1}, con codigo de identificación ${id1}, en calidad de miembro de SINTRAPETROCOL, con la presente otorgo poder de representación sindical a:<br><br>
    Nombre del Representante Sindical: ${name2}<br>
    Número de código del Representante: ${id2}<br><br>
    
    El representante sindical mencionado anteriormente tiene el poder y la autoridad para actuar en mi nombre y en representación del sindicato en todos los asuntos relacionados con la representación sindical.<br><br>Este poder de representación sindical es válido a partir de la fecha de su firma y permanece en vigor durante la asamblea a la que haya lugar.</p><br><br>
    <h3 class = "dest">Cordialmente<br><br><br><br><br>
    _____________________________<br>
    Firma<br>${name1}<br>
    C.c.
    </h3><br><br><br><br>
    <i class='by'>By AL</i>`;
  }
  printPDF();
}

function valera() {
  let name1 = "";
  let id1 = "";
  let name2 = "";
  let id2 = "";

  if (user1.value === 'null' || user2.value === 'null') {
    alert("Ingrese usuario");
    return
    }
    else {
    list.forEach((e) => {
      if (user1.value === e.user) {
        name1 = e.name;
        id1 = e.id;
        console.log(name1, id1);
      }
      if (user2.value === e.user) {
        name2 = e.name;
        id2 = e.id;
        console.log(name2, id2);
      }
    });
    document.getElementById('print').innerHTML = `

    <div class = "print">
    <h3 class = "opal">Bolívar - Cartagena de Indias</h3>
    <h3 class = "opal">${date}</h3>
    <br><br><br><br><br><br>
    <h3 class = "dest"> Sr(es) <br/>
    SINTRAPETROCOL</h3><br><br><br><br><br>
    <p class= "text">Yo, ${name1}, identificado con el número de código ${id1}, por medio del presente documento otorgo poder especial, amplio y suficiente a ${name2}, identificado con el código ${id2}, para que en mi nombre y representación pueda reclamar la valera de almuerzo, del mes correspondiente.</p><br><br><br>
    <h3 class = "dest">Cordialmente<br><br><br><br><br><br><br>
    _____________________________<br>
    Firma<br>${name1}<br>
    C.c.
    </h3><br><br><br><br>
    <i class='by'>By AL</i>`;
  }
  printPDF();
}

function printPDF() {
  window.print();
}

document.getElementById("asamblea").addEventListener("click", () => asamblea());
document.getElementById("valeras").addEventListener("click", () => valera());
