var i = 0;
var timer;
var path = new Array();

function swapImage()
{
   document.getElementById("slide").src=path[i];
   
   var tbComprador = localStorage.getItem("dadosUser");
       tbComprador = JSON.parse(tbComprador); 
  
   var comp = tbComprador[0];	
    
   if(comp.perfil == "S") {	
	path[0] = "img/civic.jpg";
	path[1] = "img/corolla.jpg";
   }else{
	   path[0] = "img/troller.jpg";
	   path[1] = "img/wrangler.jpg";
   }
     
   if(i < path.length - 1) 
	   i++; 
   else 
	   i = 0;
   MostraPerfil(i, comp.perfil);
   
   timer = setTimeout("swapImage()",2000);
}

function stopShow()
{
  clearTimeout(timer);
}

function runShow()
{
  swapImage();  
}

function validarFormulario() {
    var resultado = true;
    inputs = document.getElementsByTagName("input");
    for (var i=0; i<inputs.length; i++) {    
        if (((inputs[i].type == "text")) && (inputs[i].value == "")) {
            alert(inputs[i].name.toUpperCase() + " não pode estar em branco. Favor preencher!");
            resultado = false;
            break;
        }

    }
    return resultado;
}

function gerarRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var div = document.querySelector("#counter");
  var valor = Math.floor(Math.random() * (max - min + 1)) + min;
  div.textContent = valor;
  return valor;
}

function redirecionaAguarde(){	
	
	let dadosUser = new Array()	

    var nome = document.getElementById("txtNome").value;   
    var idade = document.getElementById("txtIdade").value;
	var perfil = document.getElementById("perfil").value;
   
    dadosUser.push({nome:nome, idade:idade, perfil: perfil})

    localStorage.setItem("dadosUser",JSON.stringify(dadosUser));
	
	
	window.location.href = "aguarde.html";
	
}
function MostraPerfil(codigo, perfil) {
		
	var tabela = document.getElementById("tblListar");
			
	if(perfil == "S") {	 
	  if(codigo == 0) {		   
		   tabela.innerHTML =  
				"   <tr>"+      
				"   <td>Fabricante: Honda </td>"+
				"   </tr>" +
				"   <tr>"+  
				"   <td>Nome: Civic</td>"+
				"   </tr>"+  
				"   <tr>"+  
				"   <td>Potência do Motor: 150 CV </td>"+
				"   </tr>"+  
				"   <tr>"+  
				"   <td>Garantia: 3 anos</td>"+
				"   </tr>"+
                "   <tr>"+  				
				"   <td>Consumo (cidade): 9,7 km/l</td>"+		
				"   </tr>";	 
		}else{
			tabela.innerHTML = 
				"   <tr>"+      
				"   <td>Fabricante: Toyota </td>"+
				"   </tr>"+   
				"   <tr>"+   
				"   <td>Nome: Corolla</td>"+
				"   </tr>"+   
				"   <tr>"+   
				"   <td>Potência do Motor: 144 CV</td>"+
				"   </tr>"+   
				"   <tr>"+   
				"   <td>Garantia: 3 anos </td>"+
				"   </tr>"+   
		     	"   <tr>"+   
				"   <td>Consumo (cidade): 10,6 km/l</td>"+		
				"   </tr>";	 
		}
	}else{
		if(codigo == 0) {		   
		   tabela.innerHTML = 
				"   <tr>"+      
				"   <td>Fabricante: Ford </td>"+
				"   </tr>"+   
				"   <tr>"+   
				"   <td>Nome: Troller</td>"+
				"   </tr>"+   
				"   <tr>"+   
				"   <td>Potência do Motor: 200 CV </td>"+
				"   </tr>"+
                "   <tr>"+   				
				"   <td>Garantia: 3 anos</td>"+
				"   </tr>"+
                "   <tr>"+   				
				"   <td>Consumo (cidade): 7,7 km/l</td>"+		
				"   </tr>";	 
		}else{
			tabela.innerHTML =  
				"   <tr>"+      
				"   <td>Fabricante: Jeep </td>"+
			    "   </tr>"+ 
				"   <tr>"+   
				"   <td>Nome: Wrangler</td>"+
				"   </tr>"+
                "   <tr>"+   				
				"   <td>Potência do Motor: 199 CV</td>"+
				"   </tr>"+   
				"   <tr>"+   
				"   <td>Garantia: 2 anos </td>"+
				"   </tr>"+   
				"   <tr>"+   
				"   <td>Consumo (cidade): 3,1 km/l</td>"+						
				"   </tr>";	 
		}
		
	}
 }
	
