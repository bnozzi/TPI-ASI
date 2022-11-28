function setearCupos(){
    sessionStorage.setItem("cupoPrincipiantesLunesyMiercoles",5);
    sessionStorage.setItem("cupoPrincipiantesMartesyJueves",5);
    sessionStorage.setItem("cupoIntermediosLunesyMiercoles",5);
    sessionStorage.setItem("cupoIntermediosMartesyJueves",5);
    sessionStorage.setItem("cupoAvanzadosLunesyMiercoles",5);
    sessionStorage.setItem("cupoAvanzadosMiercolesyViernes",5);
    sessionStorage.setItem("contador",1);
}

function setDateTime(){
    let date= new Date().toLocaleString();
    document.getElementById("DateTime").innerHTML= date;
}

/*
var cupoPrincipiantesLunesyMiercoles=5;
var cupoPrincipiantesMartesyJueves=5;
var cupoIntermediosLunesyMiercoles=5;
var cupoIntermediosMartesyJueves=5;
var cupoAvanzadosLunesyMiercoles=5;
var cupoAvanzadosMiercolesyViernes=5;

var categoria_seleccionada=""
var disponiblidad=0;*/



sessionStorage.setItem("categoria_seleccionada","");

sessionStorage.setItem("disponibilidad",0);

let btnCategoriaWasPress=false  

function Categoria(){
    btnCategoriaWasPress=true
    if (document.getElementById("cantidad").value==0){
        sessionStorage.setItem("categoria_seleccionada","Principiante");
        document.getElementById("horariosPrincipiantes").style.display="block";
        document.getElementById("horariosIntermedios").style.display="none";
        document.getElementById("horariosAvanzados").style.display="none";
        document.getElementById("botoncupo").style.display="block"
    }else if(document.getElementById("cantidad").value==1){
        sessionStorage.setItem("categoria_seleccionada","Intermedio");
        document.getElementById("horariosIntermedios").style.display="block";
        document.getElementById("horariosPrincipiantes").style.display="none";
        document.getElementById("horariosAvanzados").style.display="none";
        document.getElementById("botoncupo").style.display="block"
    }else if(document.getElementById("cantidad").value==2){
        sessionStorage.setItem("categoria_seleccionada","Avanzado");
        document.getElementById("horariosAvanzados").style.display="block";
        document.getElementById("horariosPrincipiantes").style.display="none";
        document.getElementById("horariosIntermedios").style.display="none";
        document.getElementById("botoncupo").style.display="block"
    }     
}

function changeCategoria(){
    if (btnCategoriaWasPress){Categoria()}
}




function verificarCupo(){
    if (sessionStorage.getItem("categoria_seleccionada")=="Principiante"){
        if(document.getElementById("HP").value=="1"){
            if (sessionStorage.getItem("cupoPrincipiantesLunesyMiercoles")>0){
                document.getElementById("disponibilidad").innerHTML="Hay disponibilidad para el cupo seleccionado";
                sessionStorage.setItem("disponibilidad",1);
            }else{
                alert("No hay disponibilidad para el turno seleccionado, por favor, elija otro");
                sessionStorage.setItem("disponibilidad",0);
            }
    
        }else if(document.getElementById("HP").value=="2"){
            if (sessionStorage.getItem("cupoPrincipiantesMartesyJueves")>0){
                document.getElementById("disponibilidad").innerHTML="Hay disponibilidad para el cupo seleccionado";
                sessionStorage.setItem("disponibilidad",1);
            }else{
                alert("No hay disponibilidad para el turno seleccionado, por favor, elija otro");
                sessionStorage.setItem("disponibilidad",0);
            }
    
        }
    }

    if (sessionStorage.getItem("categoria_seleccionada")=="Intermedio"){
        if(document.getElementById("HI").value=="3"){
            if (sessionStorage.getItem("cupoIntermediosLunesyMiercoles")>0){
                document.getElementById("disponibilidad").innerHTML="Hay disponibilidad para el cupo seleccionado";
                sessionStorage.setItem("disponibilidad",1);
            }else{
                alert("No hay disponibilidad para el turno seleccionado, por favor, elija otro");
                sessionStorage.setItem("disponibilidad",0);
            }
    
    
        }else if(document.getElementById("HI").value=="4"){
            if (sessionStorage.getItem("cupoIntermediosMartesyJueves")>0){
                document.getElementById("disponibilidad").innerHTML="Hay disponibilidad para el cupo seleccionado";
                sessionStorage.setItem("disponibilidad",1);
            }else{
                alert("No hay disponibilidad para el turno seleccionado, por favor, elija otro");
                sessionStorage.setItem("disponibilidad",0);
            }
    
        }

    }

    if (sessionStorage.getItem("categoria_seleccionada")=="Avanzado"){
        if(document.getElementById("HA").value=="5"){
            if (sessionStorage.getItem("cupoAvanzadosLunesyMiercoles")>0){
                document.getElementById("disponibilidad").innerHTML="Hay disponibilidad para el cupo seleccionado";
                sessionStorage.setItem("disponibilidad",1);
            }else{
                alert("No hay disponibilidad para el turno seleccionado, por favor, elija otro");
                sessionStorage.setItem("disponibilidad",0);
            }
    
    
        }else if(document.getElementById("HA").value=="6"){
            if (sessionStorage.getItem("cupoAvanzadosMiercolesyViernes")>0){
                document.getElementById("disponibilidad").innerHTML="Hay disponibilidad para el cupo seleccionado";
                sessionStorage.setItem("disponibilidad",1);
            }else{
                alert("No hay disponibilidad para el turno seleccionado, por favor, elija otro");
                sessionStorage.setItem("disponibilidad",0);
            }
    
        }
    }


}

function habilitarDatos(){
    if(sessionStorage.getItem("disponibilidad")==1){
        document.getElementById("datos").style.display="block";
    }else if(sessionStorage.getItem("disponibilidad")==0){
        document.getElementById("datos").style.display="none";
    }
    
}

function guardarDatos(){
    var cont=1;
    let inscripcionN=0
    let repetido=false
    for(let inscripcion=1; inscripcion<sessionStorage.getItem("contador"); inscripcion++){
        inscripto=JSON.parse(sessionStorage.getItem("inscripcion"+inscripcion))
        if (inscripto.doc==document.getElementById("doc").value){ 
            repetido=true
            inscripcionN=inscripcion
            break
        }
    }

    if (repetido==false){
        if (sessionStorage.getItem("categoria_seleccionada")=="Principiante"){
            if(document.getElementById("HP").value=="1"){
                if (sessionStorage.getItem("cupoPrincipiantesLunesyMiercoles")>0){
                    sessionStorage.setItem("cupoPrincipiantesLunesyMiercoles",sessionStorage.getItem("cupoPrincipiantesLunesyMiercoles")-1);
                }
        
            }else if(document.getElementById("HP").value=="2"){
                if (sessionStorage.getItem("cupoPrincipiantesMartesyJueves")>0){
                    sessionStorage.setItem("cupoPrincipiantesMartesyJueves",sessionStorage.getItem("cupoPrincipiantesMartesyJueves")-1);
                }
        
            }
        }
    
        if (sessionStorage.getItem("categoria_seleccionada")=="Intermedio"){
            if(document.getElementById("HI").value=="3"){
                if (sessionStorage.getItem("cupoIntermediosLunesyMiercoles")>0){
                    sessionStorage.setItem("cupoIntermediosLunesyMiercoles",sessionStorage.getItem("cupoIntermediosLunesyMiercoles")-1);
                }
        
        
            }else if(document.getElementById("HI").value=="4"){
                if (sessionStorage.getItem("cupoIntermediosMartesyJueves")>0){
                    sessionStorage.setItem("cupoIntermediosMartesyJueves",sessionStorage.getItem("cupoIntermediosMartesyJueves")-1);
                }
        
            }
    
        }
    
        if (sessionStorage.getItem("categoria_seleccionada")=="Avanzado"){
            if(document.getElementById("HA").value=="5"){
                if (sessionStorage.getItem("cupoAvanzadosLunesyMiercoles")>0){
                    sessionStorage.setItem("cupoAvanzadosLunesyMiercoles",sessionStorage.getItem("cupoAvanzadosLunesyMiercoles")-1);
                }
        
        
            }else if(document.getElementById("HA").value=="6"){
                if (sessionStorage.getItem("cupoAvanzadosMiercolesyViernes")>0){
                    sessionStorage.setItem("cupoAvanzadosMiercolesyViernes",sessionStorage.getItem("cupoAvanzadosMiercolesyViernes")-1);
                }
        
            }
        }
    
    
    
    
        var categoria=sessionStorage.getItem("categoria_seleccionada");
        var nombre=document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var doc= document.getElementById("doc").value;
        var edad= document.getElementById("edad").value;
        var mail=document.getElementById("mail").value;
        var contactoMedico=document.getElementById("contactoMedico").value;
        var telefono=document.getElementById("telefono").value;

        /*let fechaActual = new Date();
    
        const formatDate = (fechaActual)=>{
        let formatted_date = fechaActual.getFullYear() + "-" + (fechaActual.getMonth() + 1) + "-" + fechaActual.getDate() 
        return formatted_date;
        }
        */

        const date = new Date();
        
        let day = date.getDate();
        // set  actual month - 2 como fecha de inscripcion para poder realizar el cobro de cuotas
        let month = (date.getMonth() - 2<0)?  0:date.getMonth() - 2 ;
        let year = date.getFullYear();
        
        let currentDate = `${year}-${month}-${day}`;
    
        let inscripcion = {
            nombre: nombre,
            apellido : apellido,
            doc: doc,
            categoria:categoria,
            edad:edad,
            mail:mail,
            contactoMedico:contactoMedico,
            telefono:telefono,
            estado: "Pendiente de Pago",
            fecha:currentDate ,
            fechaUltimoPago: currentDate,

        }
        console.log(typeof inscripcion);
    
        sessionStorage.setItem("inscripcion" + sessionStorage.getItem("contador") ,JSON.stringify(inscripcion));
    
    
        sessionStorage.setItem("contador",Number(sessionStorage.getItem("contador")) + 1);
    
        alert("La Inscripcion se guardo con exito");
        location.reload();
    }
    else{ //repetido = true 
        alert("incripcion de "+ inscripto.nombre +" modificada con exito")
        var categoria=sessionStorage.getItem("categoria_seleccionada");
        var nombre=document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var doc= document.getElementById("doc").value;
        var edad= document.getElementById("edad").value;
        var mail=document.getElementById("mail").value;
        var contactoMedico=document.getElementById("contactoMedico").value;
        var telefono=document.getElementById("telefono").value;

        let inscripcion = {
            nombre: nombre,
            apellido : apellido,
            doc: doc,
            categoria:categoria,
            edad:edad,
            mail:mail,
            contactoMedico:contactoMedico,
            telefono:telefono
        }
        sessionStorage.setItem("inscripcion"+inscripcionN,JSON.stringify(inscripcion));

    }


    
}   
let inputAdded=false
function verificar(){
    
    let finded= false
    let inscripto
    // loop all inscripcion+n
    for(let inscripcion=1; inscripcion<sessionStorage.getItem("contador"); inscripcion++){
        console.log(sessionStorage.getItem("inscripcion"+inscripcion)["doc"])
        inscripto=JSON.parse(sessionStorage.getItem("inscripcion"+inscripcion))
        if (inscripto.doc== 
        document.getElementById("verif").value){ 
            finded=true
            break
        }
    }
    if (finded==false){
        alert("La inscripcion no esta asociada a ningun deportista");
        document.getElementById("validarDocumentacion").style.display="none";
        document.getElementById("identificador").style.display="none";
    }
    else{

        if (inscripto.estado=="Pendiente de Pago"){
            document.getElementById("identificador").innerHTML="La inscripcion esta asociada al deportista" + " " + inscripto.nombre
            document.getElementById("validarDocumentacion").style.display="block";
            document.getElementById("documentacion").style.display="block"        
            
            if (inscripto.edad<18 && inputAdded==false){
                document.getElementById("documentacion").innerHTML= document.getElementById("documentacion").innerHTML+`<label for=""> Auth</label>
                <input type="checkbox" name="" id="" required>`
                inputAdded=true
            }
        }else if(inscripto.estado==="Documentacion Validada"){
            document.getElementById("identificador").innerHTML="La inscripcion esta asociada al deportista" + " " + inscripto.nombre + " " + "pero esta Pendiente de Pago"
            document.getElementById("identificador").style.display="block";
            document.getElementById("documentacion").style.display="none"        } 
    }


}

function cambiarEstado(){
    
    let finded=false
    let inscripto
    let inscripcionN
    // loop all inscripcion+n
    for(let inscripcion=1; inscripcion<sessionStorage.getItem("contador"); inscripcion++){
        console.log(sessionStorage.getItem("inscripcion"+inscripcion)["doc"])
        inscripto=JSON.parse(sessionStorage.getItem("inscripcion"+inscripcion))
        if (inscripto.doc== 
        document.getElementById("verif").value){ 
            finded=true
            inscripcionN=inscripcion
            break
        }
    }
    if (finded==false){
        alert("La inscripcion no esta asociada a ningun deportista");
        document.getElementById("validarDocumentacion").style.display="none";
        document.getElementById("identificador").style.display="none";
     
    }
    else{

        if (inscripto.estado=="Pendiente de Pago"){
                inscripto.estado="Documentacion Validada";
                sessionStorage.setItem("inscripcion" + String(inscripcionN),JSON.stringify(inscripto));
                alert("Documentacion validada con exito");
            }
        }

    }



function checkDNI(){
    let finded=false
    let inscripto
    let inscripcionN
    // loop all inscripcion+n
    for(let inscripcion=1; inscripcion<sessionStorage.getItem("contador"); inscripcion++){
        inscripto=JSON.parse(sessionStorage.getItem("inscripcion"+inscripcion))
        if (inscripto.doc==document.getElementById("doc").value){ 
            finded=true
            inscripcionN=inscripcion
            break
        }
    }
    if(finded){
        let inputDoc=document.getElementById("doc")
        if(inscripto.doc==inputDoc.value){
            if (confirm("desea modificar los datos de "+ inscripto.nombre + " " + inscripto.apellido)){
                let form = document.getElementById("formInscripcion");
                //Reference the inputs in form.
                let inputs = form.getElementsByTagName("INPUT");
                //set inscripto values in form 
                inputs.doc.value=inscripto.doc
                inputs.nombre.value=inscripto.nombre
                inputs.apellido.value=inscripto.apellido
                inputs.edad.value=inscripto.edad
                inputs.mail.value=inscripto.mail
                inputs.telefono.value=inscripto.telefono
                inputs.contactoMedico.value=inscripto.contactoMedico
            }
            else{
                form.reset()
            }

        }
    }

}


function formatDate(stringdate){
    list= stringdate.split("-")
    list[1]=String(Number(list[1])+1)
    return list.join("-")
}