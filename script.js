alert("")


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // paraliza envío formulario

    
    console.log(event.target.elements);
    //Texto
    console.log(event.target.fname.value);
    console.log(event.target.lname.value);
    console.log(event.target.email.value);
    console.log(event.target.tlf.value);
    console.log(event.target.address.value);
  
    // Radio
    console.log(event.target.genero.value);
    //Checkbox
    console.log(event.target.accept.checked);
    console.log(event.target.spam.checked);
  
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const tlf = event.target.tlf.value;
    const genero = event.target.season.value; //radio
    const address = event.target.address.value;
  
    let msj = "";
  
    // Lógica de validación
    // 3 < fname < 30 required
    if (fname.length < 3 || fname.length > 30) {
      //err
      console.log("Nombre fuera de tamaño: 3-30");
      msj += "Nombre fuera de tamaño: 3-30\n";
    }
  
    // 3 < lname < 30 required
    if (lname.length < 3 || lname.length > 30) {
      console.log("Apellido fuera de tamaño: 3-30");
      msj += "Apellido fuera de tamaño: 3-30\n";
    }
  
    // email .com .es @ require
  
    //hola@gmail.com
    //false && true && true --> false
    //hola@gmail.c
    //true && true && true --> true
  
    if (
      (!email.endsWith(".com") && !email.endsWith(".es")) ||
      !email.includes("@")
    ) {
      console.log("Error validación: " + email);
      msj += "Error validación: " + email+"\n";
    }
  
    // select required ??
    // radio required
    if (genero == "") {
      console.log("Selecciona alguna estación del año");
      msj += "Selecciona alguna estación del año\n";
    }
  
    // Comprobar si hay errores
    if (msj.length != 0) {
      alert(msj); //imprime mensaje final de error
      //document.body.innerHTML += msj;
      let p = document.createElement("pre");
      let mensaje = document.createTextNode(msj);
      p.style.color = "#DD1C1A";
      p.style.fontSize = "16px";
      p.appendChild(mensaje);
  
      document.getElementById("contact").appendChild(p); // dibuja resultado
    }
    else{
      //Enviar formulario
      //document.querySelector("form").submit();
      alert("Formulario enviado con éxito");
      event.target.submit();
    }
  });