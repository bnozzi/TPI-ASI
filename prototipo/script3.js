let indexCuota=-1
function verificarDNI(){
    let finded=false
    let inscripto
    let inscripcionN
    // loop all inscripcion+n
    for(let inscripcion=1; inscripcion<sessionStorage.getItem("contador"); inscripcion++){
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
        //document.getElementById("validarDocumentacion").style.display="none";
        //document.getElementById("identificador").style.display="none";
    }
    else{ // se el dni pertenece a un deportista 
                
        //alert(inscripto.nombre)
        if (inscripto.estado=="Documentacion Validada"){
            document.getElementById("monto").innerHTML="El monto de la inscripcion es de $1500"
            document.getElementById("estado").innerHTML="La inscripcion corresponde al deportista" + " " + inscripto.nombre + ", tiene la documentacion validada y se puede realizar el cobro de la misma" 
            document.getElementById("estado").style.display="block";
            document.getElementById("cobro").style.display="block";
        }else if(inscripto.estado=="Pendiente de Pago"){
            document.getElementById("estado").innerHTML="La inscripcion corresponde al deportista" + " " + inscripto.nombre + ",no tiene la documentacion validada y no se puede realizar el cobro de la misma" 
            document.getElementById("estado").style.display="block";
            document.getElementById("cobro").style.display="none";
        }else if(inscripto.estado=="Pagada y Finalizada"){
            //inscripto.fechaUltimoPago="2022-8-1"            
            function getCuotas(){ // return a list of months and year
                //inscripto.fechaUltimoPago="2022-8-1"

                
                let givenDateTime = inscripto.fechaUltimoPago;


                let createdDate = new Date(givenDateTime);

                createdDate.setDate(1);
                let currentDate = new Date();
                if (createdDate<currentDate){
                let dateAndYearList = [createdDate.toLocaleString('es', { month: 'long', year: 'numeric' })];
                console.log(createdDate.toLocaleString('es', { month: 'long', year: 'numeric' }))

                while (createdDate.setMonth(createdDate.getMonth()+1) < currentDate) {
                    dateAndYearList.push(createdDate.toLocaleString('es', { month: 'long', year: 'numeric' 
                    }));
                }
                return dateAndYearList
                }
                else{
                    return []
                }
            }
            inscripto.cuotas=getCuotas()

            if(getCuotas().length>=1){
                
               
                console.log(inscripto.cuotas)
                    let tableData = getCuotas().map(value => {
                        indexCuota++;
                        return (
                            `<tr>
                            <td>${value}</td>
                            <td>${2000}</td>
                            <td> <input type="checkbox" name="" id="row${indexCuota}" disabled onchange="enableCheckbox(indexCuota);GetSelected()"></td>
                            <td>${""}</td>
                            </tr>`
                            );
                        }).join('');

                        tableData+=`
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td> 
                            <td id="totalTabla">0</td>
                        </tr>
                        `
                const table= document.getElementById("bodyTable").innerHTML=tableData
                document.getElementById("row0").disabled=false;
                

                document.getElementById("monto").innerHTML="El deportista debe "+getCuotas().length+" cuotas, lo que hace un total de $"+2000*getCuotas().length+" cuotas"
                document.getElementById("estado").innerHTML="La inscripcion corresponde al deportista" + " " + inscripto.nombre + ",ya fue abonada y se puede realizar el cobro de la cuota"
                document.getElementById("estado").style.display="block";
                document.getElementById("cobro").style.display="block";
                document.getElementById("tabla").style.display="block";

                
            }
            else{
                alert("el deportista" + inscripto.nombre + " no tiene cuotas pendientes por pagar")
            }
            sessionStorage.setItem("inscripcion" + String(inscripcionN),JSON.stringify(inscripto));

            
    
           
            
    
    
        }else if(inscripto.estado=="Cancelada"){
            document.getElementById("estado").innerHTML="La inscripcion correspondiente al deportista" + " " + inscripto.nombre + " fue cancelada"
            document.getElementById("estado").style.display="block";
            document.getElementById("cobro").style.display="none";
        }
        } 
    }

    // var cont=1;
    // var inscripto=""
    // while (cont<30){
        // console.log("inscripcion"+String(cont))
        // if( sessionStorage.getItem("inscripcion"+String(cont)).includes(document.getElementById("verif").value) ){
            // inscripto = JSON.parse(sessionStorage.getItem("inscripcion"+String(cont)))
            // break;
        // }else{
            // cont+=1;
        // }

        // if (sessionStorage.getItem("inscripcion"+String(cont))==null){
            // alert("El deportista no se encontro");
            // break;
            // location.reload()
        // }
        
    // }



    

    



function realizarCobro(){
    // var cont=1;
    // var inscripto=""
    // while (cont<30){
    //     console.log("inscripcion"+String(cont))
    //     if( sessionStorage.getItem("inscripcion"+String(cont)).includes(document.getElementById("verif").value) ){
    //         inscripto = JSON.parse(sessionStorage.getItem("inscripcion"+String(cont)))
    //         break;
    //     }else{
    //         cont+=1;
    //     }

    //     if (sessionStorage.getItem("inscripcion"+String(cont))==null){
    //         alert("El deportista no se encontro");
    //         break;
    //         location.reload()
    //     }
        
    // }

    let finded= false
    let inscripto //objeto deportista
    let inscripcionN //index deportista
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
    if (finded===false){ 
        alert("El deportista no se encontro");
    }
    else{

        //{\"nombre\":\"Bruno\",\"apellido\":\"Pizzi\",\"doc\":\"1\",
        //\"categoria\":\"Principiante\",\"edad\":\"24\",\"mail\":\"pizzi686@gmail.com\",
        //\"contactoMedico\":\"dsadsasaddas\",\"telefono\":\"0633553355\",
        //\"estado\":\"Documentacion Validada\",\"fecha\":\"2022-07-15\",\"fechaUltimoPago\":\""}"

        if (inscripto.estado=="Documentacion Validada"){
            inscripto.estado="Pagada y Finalizada";
            sessionStorage.setItem("inscripcion" + String(inscripcionN),JSON.stringify(inscripto));
    
            alert("Cobro Realizado con Exito");
            
          
            location.reload();
    
    
        }else if (inscripto.estado=="Pagada y Finalizada"){
            // fechaUltimoPago 
            
            const fechaUltimoPagoCuota=LastMontYearToDate(GetSelected())
            let day = fechaUltimoPagoCuota.getDate();
            let month = fechaUltimoPagoCuota.getMonth()+1  ;
            let year = fechaUltimoPagoCuota.getFullYear();
            let currentDate = `${year}-${month}-${day}`;
            console.log(currentDate)
            //add 1 for month
              

            inscripto.fechaUltimoPago=currentDate;
            alert(inscripto.fechaUltimoPago)
            //sessionStorage.setItem("inscripcion" + String(cont),JSON.stringify(inscripto));
            sessionStorage.setItem("inscripcion" + String(inscripcionN),JSON.stringify(inscripto));
    
            alert("Cobro Realizado con Exito");
            location.reload();
        } 
    }

      
    
}

function total(actualValue){
}
function enableCheckbox(index){
    for (let i=0; i<index;i++){
        if(document.getElementById("row"+i).checked){
            document.getElementById("row"+(i+1)).disabled=false;
            

        }
        else{
            document.getElementById("row"+(i+1)).disabled=true;


        }
    }
}

function GetSelected() { //and claculate total
    //Reference the Table.
    let grid = document.getElementById("tabla");
    let sumVal = 0;
    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("INPUT");
    let cuotasAPagar=[]
    //Loop through the CheckBoxes.
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
          //  console.log(row.cells[1].innerHTML)
            cuotasAPagar.push(row.cells[0].innerHTML)

            sumVal = sumVal + parseInt(row.cells[1].innerHTML);
        }
    }
    document.getElementById("totalTabla").innerHTML = sumVal
    for (let cuota of cuotasAPagar){
        //console.log(cuota)
    }
    //Display selected Row data in Alert Box.
    return cuotasAPagar
}

function LastMontYearToDate(lista){
    let lastMonth=lista[lista.length-1]
    let MonthYear=lastMonth.split(" ")
    let mes=MonthYear[0]
    let año=MonthYear[2]
    meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    for (let i=0;i<meses.length;i++){
        if( meses[i]==mes){
            mes=i
        }
    } 
    
    let date=new Date(año,String(parseInt(mes+1)),1)

    return date
}
function formatDate(stringdate){
    list= stringdate.split("-")
    list[1]=String((Number(list[1])+1 <11)? Number(list[1])+1:11)  
    return list.join("-")
}