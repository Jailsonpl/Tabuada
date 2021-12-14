let escolha=document.querySelector("select");
escolha.addEventListener('change',operacao);

function operacao(){
			let oper=escolha.value;
			var num = Number(document.getElementById("numero").value);
			var res = document.getElementById("resultado");
			var contador = '';

			if(num==""){
				res.innerHTML="Digite um numero"
			} else{	
				if(oper=="Soma"){
				for(var i=0;i<=10;i++){
					contador += `${num} + ${i} = ${num+i} </br>`;				
					}		
				} else if(oper=="Subtração"){
				for(var i=0;i<=10;i++){
					contador += `${num} - ${i} = ${num-i} </br>`;				
					}		
				} else if(oper=="Multiplicação"){
				for(var i=0;i<=10;i++){
					contador += `${num} * ${i} = ${num*i} </br>`;				
					}		
				} else if(oper=="Divisão"){
				for(var i=1;i<=10;i++){
					contador += `${num} / ${i} = ${(num/i).toFixed(2)} </br>`;				
					}		
				}
			res.innerHTML=contador;	
		}
	}