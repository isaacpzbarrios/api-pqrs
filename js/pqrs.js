/**  Ventanas flotantes*/
function registrarte() {
  document.getElementById("popRegistrar").style.display = "block";
  document.getElementById("popIniciar").style.display = "none";
  document.getElementById("popSesionUser").style.display = "none";
}

function cerrar01() {
  document.getElementById("popRegistrar").style.display = "none";
}

function iniciar() {
  document.getElementById("popIniciar").style.display = "block";
  document.getElementById("popRegistrar").style.display = "none";
  document.getElementById("popSesionUser").style.display = "none";
}

function cerrar() {
  document.getElementById("popIniciar").style.display = "none";
}

function sesion() {
  document.getElementById("popSesionUser").style.display = "block";
  document.getElementById("popIniciar").style.display = "none";
  document.getElementById("popRegistrar").style.display = "none";
}

function cerrar02() {
  document.getElementById("popSesionUser").style.display = "none";
}

function cerrarSesion() {
  let validacion = confirm("¿Seguro de querer cerrar sesión?");
  if (validacion == true) {
    document.getElementById("body").innerHTML = "";
    window.location = "../index.html";
  }
}

/**  funcion para registrar usuarios*/
function registrar() {
  let nombre,
    apellido,
    correo,
    tipo_identificacion,
    numero_identificacion,
    telefono,
    contraseña;
  nombre = document.getElementById("exampleInputNombre").value;
  apellido = document.getElementById("exampleInputApellido").value;
  correo = document.getElementById("exampleInputEmail").value;
  tipo_identificacion = document.getElementById("tipoIdentificacion").value;
  numero_identificacion = document.getElementById(
    "exampleInputIdentificacion"
  ).value;
  telefono = document.getElementById("exampleInputTelefono").value;
  contraseña = document.getElementById("exampleInputContraseña").value;

  if (
    nombre == "" ||
    apellido == "" ||
    correo == "" ||
    tipo_identificacion == "Tipo de identificación" ||
    numero_identificacion == "" ||
    telefono == "" ||
    contraseña == ""
  ) {
    alert("Error!, verificar los campos");
  } else {
    alert("Funciona");
    document.getElementById("registroUsuario").reset();
  }
}

/** Funcion Para iniciar sesion(Admin y asesor) */
function iniciarAdminAsesor() {
  let rol, usuario, contraseña;
  rol = document.getElementById("rol").value;
  usuario = document.getElementById("exampleInputUser").value;
  contraseña = document.getElementById("exampleInputPassword1").value;

  if (rol == 0 || usuario == "" || contraseña == "") {
    alert("Error!, verificar los campos");
  } else {
    let data = {
      tipo_usuario: rol,
      usuario: usuario,
      contraseña: contraseña,
    };

    axios
      .post("http://127.0.0.1:3000/ingresar", data)
      .then(function (response) {
        console.log(response);
        if (response) {
          window.open("html/pageAdmi.html");
          document.getElementById("iniciosesionAdminAsesor").reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

/** Admin modulo */
/** insertar usuario */
function insertUser() {
  document.getElementById("insertUserAdmin").style.display = "block";
  document.getElementById("tableGetUsuario").style.display = "none";
  document.getElementById("adminBtnActualizarUser").style.display = "none";
  document.getElementById("crudSoliciudAdmin").style.display = "none";

}
/** Cancelar insertar usuario */
function adminCancelar() {
  document.getElementById("insertUserAdmin").style.display = "none";
  document.getElementById("AdminRegistrarUsuario").reset();
}

function adminRegistrar() {
  let nombre,
    apellido,
    tipo_usuario,
    telefono,
    correo,
    direccion,
    contraseña,
    usuario,
    tipo_documento,
    numero_identificacion;
  nombre = document.getElementById("adminInputNombre").value;
  apellido = document.getElementById("adminInputApellido").value;
  tipo_usuario = document.getElementById("adminTipoUsuario").value;
  telefono = document.getElementById("adminInputTelefono").value;
  correo = document.getElementById("adminInputEmail").value;
  direccion = document.getElementById("adminInputDireccion").value;
  contraseña = document.getElementById("adminInputContraseña").value;
  usuario = document.getElementById("adminInputUsuario").value;
  tipo_documento = document.getElementById("adminTipoIdentificacion").value;
  numero_identificacion = document.getElementById(
    "adminInputIdentificacion"
  ).value;

  let data = {
    nombre: nombre,
    apellido: apellido,
    id_tipo_usuario: tipo_usuario,
    numero_identificacion: numero_identificacion,
    numero_telefono: telefono,
    correo: correo,
    direccion: direccion,
    contraseña: contraseña,
    usuario: usuario,
    tipo_documento: tipo_documento,
  };
  if (
    nombre != "" ||
    apellido != "" ||
    id_tipo_usuario != 0 ||
    numero_identificacion != "" ||
    numero_telefono != "" ||
    correo != "" ||
    direccion != "" ||
    contraseña != "" ||
    usuario != "" ||
    tipo_documento != 0
  ) {
    axios
      .post("http://127.0.0.1:3000/insertUsuario", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    alert("Registro exitoso!");
    document.getElementById("AdminRegistrarUsuario").reset();
  } else {
    alert("Error, por favor verificar los campos!");
  }
}

function onEdit02(td) {
  document.getElementById("insertUserAdmin").style.display = "block";
  document.getElementById("adminInputIdentificacion").disabled = true;
  document.getElementById("adminInputUsuario").disabled = true;

  selectedRow = td.parentElement.parentElement;
  if (selectedRow.cells[3].innerHTML == "Administrador") {
    document.getElementById("adminTipoUsuario").value = 1
  } else if (selectedRow.cells[3].innerHTML == "Asesor") {
    document.getElementById("adminTipoUsuario").value = 2
  } else if (selectedRow.cells[3].innerHTML == "Usuario") {
    document.getElementById("adminTipoUsuario").value = 3
  }

  if (selectedRow.cells[9].innerHTML == "Cedula Ciudadania") {
    document.getElementById("adminTipoIdentificacion").value = 1
  } else if (selectedRow.cells[9].innerHTML == "Pasaporte") {
    document.getElementById("adminTipoIdentificacion").value = 2
  } else if (selectedRow.cells[9].innerHTML == "Tarjeta Identidad") {
    document.getElementById("adminTipoIdentificacion").value = 3
  } else if (selectedRow.cells[9].innerHTML == "Documento Extranjeria") {
    document.getElementById("adminTipoIdentificacion").value = 4
  } else if (selectedRow.cells[9].innerHTML == "Registro Civil") {
    document.getElementById("adminTipoIdentificacion").value = 5
  }

  document.getElementById("adminInputNombre").value = selectedRow.cells[1].innerHTML;
  document.getElementById("adminInputApellido").value = selectedRow.cells[2].innerHTML;
  document.getElementById("adminInputTelefono").value = selectedRow.cells[4].innerHTML;
  document.getElementById("adminInputEmail").value = selectedRow.cells[5].innerHTML;
  document.getElementById("adminInputDireccion").value = selectedRow.cells[6].innerHTML;
  document.getElementById("adminInputContraseña").value = selectedRow.cells[7].innerHTML;
  document.getElementById("adminInputUsuario").value = selectedRow.cells[8].innerHTML;
  document.getElementById("adminInputIdentificacion").value = selectedRow.cells[11].innerHTML;

}

function actualizardatosUser() {
  document.getElementById("adminInputIdentificacion").disabled = false;
  document.getElementById("adminInputUsuario").disabled = false;

  nombre = document.getElementById("adminInputNombre").value;
  apellido = document.getElementById("adminInputApellido").value;
  tipo_usuario = document.getElementById("adminTipoUsuario").value;
  telefono = document.getElementById("adminInputTelefono").value;
  correo = document.getElementById("adminInputEmail").value;
  direccion = document.getElementById("adminInputDireccion").value;
  contraseña = document.getElementById("adminInputContraseña").value;
  tipo_documento = document.getElementById("adminTipoIdentificacion").value;
  numero_identificacion = document.getElementById("adminInputIdentificacion").value;

  let data = {
    nombre: nombre,
    apellido: apellido,
    id_tipo_usuario: tipo_usuario,
    numero_telefono: telefono,
    correo: correo,
    direccion: direccion,
    contraseña: contraseña,
    tipo_documento: tipo_documento
  }

  axios.put('http://127.0.0.1:3000/updateUsuario/' + numero_identificacion, data)
    .then(function (response) {
      console.log(response);
      document.getElementById("AdminRegistrarUsuario").reset();
      alert("Actualizado")
      getUsuario();
      document.getElementById("insertUserAdmin").style.display = "none";

    })
    .catch(function (error) {
      console.log(error);
    });
}

function onDelete02(td) {
  selectedRow = td.parentElement.parentElement;
  let numero_identificacion = selectedRow.cells[11].innerHTML;

  axios.delete('http://127.0.0.1:3000/deleteUsuarioById/' + numero_identificacion,)
    .then(function (response) {
      console.log(response);
      alert("ELiminado")
    })
    .catch(function (error) {
      console.log(error);
    });

}


/** GEt usuario */

function getUsuario() {
  document.getElementById("adminBtnActualizarUser").style.display = "block";
  document.getElementById("crudSoliciudAdmin").style.display = "none";

  let user;
  let infoForm = {};

  document.getElementById("insertUserAdmin").style.display = "none";

  axios
    .get("http://127.0.0.1:3000/getAllUsuario")
    .then(function (response) {
      console.log(response);
      console.log(response.data[0].nombre);
      user = JSON.stringify(response);
      console.log(user);

      document.getElementById("cuerpoGetUsuario").innerHTML = "";

      for (let x in response.data) {
        infoForm["ID"] = x;
        infoForm["NOMBRE"] = response.data[x].nombre;
        infoForm["APELLIDO"] = response.data[x].apellido;
        infoForm["TIPOUSUARIO"] = response.data[x].id_tipo_usuario;
        infoForm["NUMEROTELEFONO"] = response.data[x].numero_telefono;
        infoForm["CORREO"] = response.data[x].correo;
        infoForm["DIRECCION"] = response.data[x].direccion;
        infoForm["CONTRASEÑA"] = response.data[x].contraseña;
        infoForm["USUARIO"] = response.data[x].usuario;
        infoForm["TIPODOCUMENTO"] = response.data[x].tipo_documento;
        infoForm["FECHAREGISTRO"] = response.data[x].fecha_registro;
        infoForm["NUMEROIDENTIFICACION"] =
          response.data[x].numero_identificacion;

        document.getElementById("tableGetUsuario").style.display = "block";
        document.getElementById("cuerpoGetUsuario").innerHTML += "";

        tabla = document.getElementById("cuerpoGetUsuario");
        filanueva = tabla.insertRow(tabla.length);

        cell1 = filanueva.insertCell(0);
        cell1.innerHTML = infoForm.ID;

        cell2 = filanueva.insertCell(1);
        cell2.innerHTML = infoForm.NOMBRE;

        cell3 = filanueva.insertCell(2);
        cell3.innerHTML = infoForm.APELLIDO;

        cell4 = filanueva.insertCell(3);
        cell4.innerHTML = infoForm.TIPOUSUARIO;

        cell5 = filanueva.insertCell(4);
        cell5.innerHTML = infoForm.NUMEROTELEFONO;

        cell6 = filanueva.insertCell(5);
        cell6.innerHTML = infoForm.CORREO;

        cell7 = filanueva.insertCell(6);
        cell7.innerHTML = infoForm.DIRECCION;

        cell8 = filanueva.insertCell(7);
        cell8.innerHTML = infoForm.CONTRASEÑA;

        cell9 = filanueva.insertCell(8);
        cell9.innerHTML = infoForm.USUARIO;

        cell10 = filanueva.insertCell(9);
        cell10.innerHTML = infoForm.TIPODOCUMENTO;

        cell11 = filanueva.insertCell(10);
        cell11.innerHTML = infoForm.FECHAREGISTRO;

        cell12 = filanueva.insertCell(11);
        cell12.innerHTML = infoForm.NUMEROIDENTIFICACION;

        cell13 = filanueva.insertCell(12);
        cell13.innerHTML = `<a class="btn btn-warning mx-2 " onClick="onEdit02(this)">Edit</a>
     <a class= "btn btn-danger " onClick="onDelete02(this)">Delete</a>`;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}


/** crud solicitud */
function crudSolicitudes() {
  document.getElementById("crudSoliciudAdmin").style.display = "block";
  document.getElementById("insertUserAdmin").style.display = "none";
  document.getElementById("tableGetUsuario").style.display = "none";

}

function adminEnviarSolicitud() {
  let descripcion, tipo_solicitud, prioridad, estado, codigo, usuario;
  descripcion = document.getElementById("adminInputDescripcion").value;
  tipo_solicitud = document.getElementById("adminTipoSolicitud").value;
  prioridad = document.getElementById("adminTipoPrioridad").value;
  estado = document.getElementById("adminEstadoSolicitud").value;
  codigo = document.getElementById("adminInputCodigo").value;
  usuario = document.getElementById("adminInputUsuarioSolicitud").value;

  let data = {
    descripcion: descripcion,
    id_tipo_solicitud: tipo_solicitud,
    id_tipo_prioridad: prioridad,
    id_estado_solicitud: estado,
    codigo: codigo,
    n_usuario: usuario,
  };

  axios
    .post("http://127.0.0.1:3000/insertSolicitudes", data)
    .then(function (response) {
      console.log(response);
      document.getElementById("AdminRegistrarSolicitud").reset();
    })
    .catch(function (error) {
      console.log(error);
    });

  alert("Bravo Crack");
}

function verSolicitudes() {
  let user;
  let infoForm = {};

  axios
    .get("http://127.0.0.1:3000/getAllSolicitud")
    .then(function (response) {
      console.log(response);
      console.log(response.data[0].descripcion);
      user = JSON.stringify(response);
      console.log(user);

      document.getElementById("cuerpoGetSolicitudes").innerHTML = "";

      for (let x in response.data) {
        infoForm["ID"] = x;
        infoForm["DESCRIPCION"] = response.data[x].descripcion;
        infoForm["TIPOSOLICITUD"] = response.data[x].id_tipo_solicitud;
        infoForm["TIPOPRIORIDAD"] = response.data[x].id_tipo_prioridad;
        infoForm["ESTADOSOLICITUDES"] = response.data[x].id_estado_solicitud;
        infoForm["FECHA"] = response.data[x].fecha;
        infoForm["CODIGO"] = response.data[x].codigo;
        infoForm["USUARIO"] = response.data[x].n_usuario;

        document.getElementById("tableGetSolicitudes").style.display = "block";
        document.getElementById("cuerpoGetSolicitudes").innerHTML += "";

        tabla = document.getElementById("cuerpoGetSolicitudes");
        filanueva = tabla.insertRow(tabla.length);

        cell1 = filanueva.insertCell(0);
        cell1.innerHTML = infoForm.ID;

        cell2 = filanueva.insertCell(1);
        cell2.innerHTML = infoForm.DESCRIPCION;

        cell3 = filanueva.insertCell(2);
        cell3.innerHTML = infoForm.TIPOPRIORIDAD;

        cell4 = filanueva.insertCell(3);
        cell4.innerHTML = infoForm.TIPOSOLICITUD;

        cell5 = filanueva.insertCell(4);
        cell5.innerHTML = infoForm.ESTADOSOLICITUDES;

        cell6 = filanueva.insertCell(5);
        cell6.innerHTML = infoForm.FECHA;

        cell7 = filanueva.insertCell(6);
        cell7.innerHTML = infoForm.CODIGO;

        cell8 = filanueva.insertCell(7);
        cell8.innerHTML = infoForm.USUARIO;

        cell9 = filanueva.insertCell(8);
        cell9.innerHTML = `<a class="btn btn-warning mx-2 " onClick="onEdit(this)">Edit</a>
     <a class= "btn btn-danger" onClick="onDelete(this)">Delete</a>`;
      }
    })
    .catch(function (error) {
      console.log(error);
    });



}

function onEdit(td) {
  document.getElementById("adminBtnActualizar").disabled = false;
  selectedRow = td.parentElement.parentElement;

  if (selectedRow.cells[2].innerHTML == "Nueva") {
    document.getElementById("adminEstadoSolicitud").value = 4;
  } else if (selectedRow.cells[2].innerHTML == "Suspendida") {
    document.getElementById("adminEstadoSolicitud").value = 3;

  } else if (selectedRow.cells[2].innerHTML == "Abierta") {
    document.getElementById("adminEstadoSolicitud").value = 2;

  } else if (selectedRow.cells[2].innerHTML == "Cerrada") {
    document.getElementById("adminEstadoSolicitud").value = 1;

  }
  if (selectedRow.cells[3].innerHTML == "Baja") {
    document.getElementById("adminTipoPrioridad").value = 1;
  } else if (selectedRow.cells[3].innerHTML == "Media") {
    document.getElementById("adminTipoPrioridad").value = 2;

  } else if (selectedRow.cells[3].innerHTML == "Alta") {
    document.getElementById("adminTipoPrioridad").value = 3;

  }

  document.getElementById("adminTipoSolicitud").disabled = true;
  document.getElementById("adminInputDescripcion").disabled = true;
  document.getElementById("adminInputCodigo").disabled = true;
  document.getElementById("adminInputUsuarioSolicitud").disabled = true;


  document.getElementById("adminInputDescripcion").value =
    selectedRow.cells[1].innerHTML;
  document.getElementById("adminInputCodigo").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("adminInputUsuarioSolicitud").value =
    selectedRow.cells[7].innerHTML;



}

function actualizardatos() {
  let boxprioridad = document.getElementById("adminTipoPrioridad").value
  let boxestado = document.getElementById("adminEstadoSolicitud").value
  let codigo = document.getElementById("adminInputCodigo").value


  let data = {
    codigo: codigo,
    id_tipo_prioridad: boxprioridad,
    id_estado_solicitud: boxestado
  }

  axios.put('http://127.0.0.1:3000/updateSolicitud', data)
    .then(function (response) {
      console.log(response);
      verSolicitudes();
      alert("ACTUALIZADO")
      document.getElementById("AdminRegistrarSolicitud").reset();
      document.getElementById("adminBtnActualizar").disabled = true;
      document.getElementById("adminTipoSolicitud").disabled = false;
      document.getElementById("adminInputDescripcion").disabled = false;
      document.getElementById("adminInputCodigo").disabled = false;
      document.getElementById("adminInputUsuarioSolicitud").disabled = false;

    })
    .catch(function (error) {
      console.log(error);
    });
}

function onDelete(td) {
  selectedRow = td.parentElement.parentElement;
  let codigo = selectedRow.cells[6].innerHTML;

  axios.delete('http://127.0.0.1:3000/deleteSolicitud/' + codigo,)
    .then(function (response) {
      console.log(response);
      verSolicitudes();
      alert("ELiminado")
    })
    .catch(function (error) {
      console.log(error);
    });

}



























