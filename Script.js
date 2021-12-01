function calcular(){

			var n = Number(document.getElementById("numero").value);
			var res = document.getElementById("resultado");
			var contador = '';

			for(var i=0;i<=10;i++){
				contador += `${n} * ${i} = ${n*i} </br>`;
				res.innerHTML=contador;			
			}	
		}