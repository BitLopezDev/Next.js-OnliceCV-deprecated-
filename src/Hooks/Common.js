//To solve incompatibilities from old project migration I will be using this hook.
const common = () => {

    useEffect(() => {
    
        window.onerror = function (msg, url, lineNo, columnNo, error) {
            // var mensajeerror = [
            //      'Message: ' + msg,
            //      'URL: ' + url,
            //      'Line: ' + lineNo,
            //      'Column: ' + columnNo,
            //      'Error object: ' + JSON.stringify(error)
            //  ].join(' - ');
        
            var mensajeerror = {
                Message: msg,
                URL: url,
                Line: lineNo,
                Column: columnNo,
                Errorobject: JSON.stringify(error)
        
            };
        
        
            console.error(mensajeerror);
            let str = JSON.stringify(mensajeerror, null, 4);
            console.error(str);
        
            //ActualAlert
            document.getElementById("ActualAlert").innerText = `ERROR: ${mensajeerror} 
             ${str}
             Verifique la consola para más información.`;
            document.getElementById("ActualAlert").classList.add("alert-danger");
            document.getElementById('ActualAlert').classList.remove('active');
        
            document.getElementById("abrirModal").click();
            
        
        
        }
        
        /*Alerts are created with the .alert class, followed by one of the contextual classes .alert-success, .alert-info, .alert-warning, .alert-danger, .alert-primary, .alert-secondary, .alert-light or .alert-dark*/
        
        function cargadoDOMAny() {
            document.getElementById("cerrarModal").click();
            alert('Hola');
            //cerrarModal
            // $('#ElModal').modal({ show: true});
            /*if (lady = 3) {
                romina(nombre)
            }*/
        }
        document.getElementById('cerrarModal').onclick = function () {
            //document.getElementById("ActualAlert")
            document.getElementById("ActualAlert").innerText = '';
        
            let clasesAlert = ['alert-success', 'alert-info', 'alert-warning', 'alert-danger', 'alert-primary', 'alert-secondary', 'alert-light', 'alert-dark',];
            for (let i in clasesAlert) {
                document.getElementById("ActualAlert").classList.remove(clasesAlert[i]);
                //console.log(`removed class ${clasesAlert[i]}, N° ${i}`);
        
            }
        
        };
        
        
        window.addEventListener("load", cargadoDOMAny);
      }, []);

}

export default common;