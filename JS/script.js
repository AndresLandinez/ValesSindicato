const poderdante = document.getElementById("poderdante");
const apoderado = document.getElementById("apoderado");

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
  { user: "Canoles", name: "Oscar Enrique Canoles Pajaro", id: "4002316" },
  { user: "Wilman", name: "Wilman Manrique Ramirez", id: "4002441" },
  { user: "Brandon", name: "Edil Brandon Lambis Medina", id: "10604034" },
  { user: "Yeferson", name: "Yeferson Adrian Martinez Acevedo", id: "10604451" },
];

function getDate() {
  return new Date().toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getUserData(value) {
  return list.find((item) => item.user === value);
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

function buildPreviewHTML(tipo, p1, p2, date) {
  if (tipo === "asamblea") {
    return `
      <div class="print">
        <h3 class="opal">Bolívar - Cartagena de Indias</h3>
        <h3 class="opal">${date}</h3>
        <br><br><br><br><br><br>
        <h3 class="dest">Sr(es)<br/>SINTRAPETROCOL</h3><br><br><br>
        <p class="text">
          Yo, ${p1.name}, con código de identificación ${p1.id}, en calidad de miembro de SINTRAPETROCOL, con la presente otorgo poder de representación sindical a:<br><br>
          Nombre del Representante Sindical: ${p2.name}<br>
          Número de código del Representante: ${p2.id}<br><br>
          El representante sindical mencionado anteriormente tiene el poder y la autoridad para actuar en mi nombre y en representación del sindicato en todos los asuntos relacionados con la representación sindical.<br><br>
          Este poder de representación sindical es válido a partir de la fecha de su firma y permanece en vigor durante la asamblea a la que haya lugar.
        </p><br><br>
        <h3 class="dest">
          Cordialmente<br><br><br><br><br>
          _____________________________<br>
          Firma<br>${p1.name}<br>
          C.c.
        </h3><br><br><br><br>
        <i class="by">By AL</i>
      </div>`;
  } else {
    return `
      <div class="print">
        <h3 class="opal">Bolívar - Cartagena de Indias</h3>
        <h3 class="opal">${date}</h3>
        <br><br><br><br><br><br>
        <h3 class="dest">Sr(es)<br/>SINTRAPETROCOL</h3><br><br><br><br><br>
        <p class="text">
          Yo, ${p1.name}, identificado con el número de código ${p1.id}, por medio del presente documento otorgo poder especial, amplio y suficiente a ${p2.name}, identificado con el código ${p2.id}, para que en mi nombre y representación pueda reclamar la valera de almuerzo del mes correspondiente.
        </p><br><br><br>
        <h3 class="dest">
          Cordialmente<br><br><br><br><br><br><br>
          _____________________________<br>
          Firma<br>${p1.name}<br>
          C.c.
        </h3><br><br><br><br>
        <i class="by">By AL</i>
      </div>`;
  }
}

function buildPrintHTML(tipo, p1, p2, date) {
  const baseStyle = `font-family: 'Montserrat', sans-serif; padding: 40px; color: #242222;`;
  const opalStyle = `text-align: right; font-weight: 600; margin: 4px 0;`;
  const destStyle = `text-align: left; font-weight: 600; margin: 8px 0;`;
  const textStyle = `text-align: justify; font-size: 18px; font-weight: 700; line-height: 1.7; color: black; margin: 16px 0;`;
  const byStyle = `display: block; text-align: right; font-size: 10px; color: #666; margin-top: 16px;`;

  if (tipo === "asamblea") {
    return `
      <div style="${baseStyle}">
        <h3 style="${opalStyle}">Bolívar - Cartagena de Indias</h3>
        <h3 style="${opalStyle}">${date}</h3>
        <br><br><br><br><br><br>
        <h3 style="${destStyle}">Sr(es)<br/>SINTRAPETROCOL</h3><br><br><br>
        <p style="${textStyle}">
          Yo, ${p1.name}, con código de identificación ${p1.id}, en calidad de miembro de SINTRAPETROCOL, con la presente otorgo poder de representación sindical a:<br><br>
          Nombre del Representante Sindical: ${p2.name}<br>
          Número de código del Representante: ${p2.id}<br><br>
          El representante sindical mencionado anteriormente tiene el poder y la autoridad para actuar en mi nombre y en representación del sindicato en todos los asuntos relacionados con la representación sindical.<br><br>
          Este poder de representación sindical es válido a partir de la fecha de su firma y permanece en vigor durante la asamblea a la que haya lugar.
        </p><br><br>
        <h3 style="${destStyle}">
          Cordialmente<br><br><br><br><br>
          _____________________________<br>
          Firma<br>${p1.name}<br>
          C.c.
        </h3><br><br><br><br>
        <i style="${byStyle}">By AL</i>
      </div>`;
  } else {
    return `
      <div style="${baseStyle}">
        <h3 style="${opalStyle}">Bolívar - Cartagena de Indias</h3>
        <h3 style="${opalStyle}">${date}</h3>
        <br><br><br><br><br><br>
        <h3 style="${destStyle}">Sr(es)<br/>SINTRAPETROCOL</h3><br><br><br><br><br>
        <p style="${textStyle}">
          Yo, ${p1.name}, identificado con el número de código ${p1.id}, por medio del presente documento otorgo poder especial, amplio y suficiente a ${p2.name}, identificado con el código ${p2.id}, para que en mi nombre y representación pueda reclamar la valera de almuerzo del mes correspondiente.
        </p><br><br><br>
        <h3 style="${destStyle}">
          Cordialmente<br><br><br><br><br><br><br>
          _____________________________<br>
          Firma<br>${p1.name}<br>
          C.c.
        </h3><br><br><br><br>
        <i style="${byStyle}">By AL</i>
      </div>`;
  }
}

function renderDocument(tipo) {
  if (!validateSelection()) return;

  const p1 = getUserData(poderdante.value);
  const p2 = getUserData(apoderado.value);
  const date = getDate();

  // 1. Mostrar vista previa en la página
  const previewHTML = buildPreviewHTML(tipo, p1, p2, date);
  document.getElementById("print").innerHTML = previewHTML;

  // 2. Imprimir en iframe limpio (solo el documento, sin botones ni selects)
  const printHTML = buildPrintHTML(tipo, p1, p2, date);

  const iframe = document.createElement("iframe");
  iframe.style.position = "absolute";
  iframe.style.top = "-9999px";
  iframe.style.left = "-9999px";
  iframe.style.width = "210mm";
  iframe.style.height = "297mm";
  document.body.appendChild(iframe);

  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          @page { margin: 20mm; }
          body { margin: 0; padding: 0; background: white; }
        </style>
      </head>
      <body>${printHTML}</body>
    </html>
  `);
  doc.close();

  // Esperar a que cargue la fuente y renderice
  setTimeout(() => {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();

    // Eliminar el iframe después de imprimir (o cancelar)
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 1000);
  }, 500);
}

document.getElementById("asamblea").addEventListener("click", () => renderDocument("asamblea"));
document.getElementById("valeras").addEventListener("click", () => renderDocument("valeras"));
