     /*
            Pues seguimos con los números. Escribe un script  que dado un número nos
            devuelva true si es un número par y false si es un número impar. 
            No usar condiconales.
        */
            let num = parseInt(prompt("Entrar numero entero"));
            let res = num%2;
            let par = res==0;
            console.log("¿Es par? " + par);
    
            var esDia = true;
            var precio = 45;
            console.log(45 * esDia);      //daría 45
            console.log(esDia);     // true
    
            let num1;
            console.log("Valor es: " + num1);   // undefined
    
            let apell = null;
            console.log(apell);     // null
    
            /* Primer caso con switch Casse*/
    
            switch (prompt("¿Cómo está el clima?")) {
                case "lluvioso":
                    console.log("Recuerda llevar un paraguas.");
                    break;
                case "soleado":
                    console.log("Vístete ligero.");
                    break;
                case "nublado":
                    console.log("Sal al exterior.");
                    break;
                default:
                    console.log("¡Tipo de clima desconocido!");
                    break;
            }
    
            /*  En un restaurante los clientes pueden pedir menú de carne, pescado o ensalada. 
                Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide ensalada se le ofrecerá agua
                Si no elije el menú de la lista aparecerá la frase elija carne, pescado o ensalada.
    
                Por ejemplo he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?"
            */  
            let menu, bebida;
            menu = prompt("Titpo de menu: carne, pescado, ensalada")
            switch (menu){
                case 'carne':
                    bebida = "¿Desea beber vino tinto?";
                    break;
                case 'pescado':
                    bebida = "¿Desea beber vino blanco?";
                    break;
                case 'ensalada':
                    bebida = "¿Desea agua?";
                    break;
                default:
                    bebida = "Elija carne pescado o ensalada";
                }
            alert(bebida);  
    
    
            /* Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.
            Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño 
    
            Si tecleo el 3 el script me responderá que estamos en Primavera
            */

        let nMes, estacion;
        nMes = parseInt(prompt("Indica el número del mes 1 al 12"));
        switch (nMes){
            case 12:
            case 1:
            case 2:
                estacion = "Invierno";
                break;
            case 3:
            case 4:
            case 5:
                estacion = "Primavera";
                break;
            case 6:
            case 7:
            case 8:
                estacion = "Verano";
                break;
            case 9:
            case 10:
            case 11:
                estacion = "Otoño";
                break;
            default: 
                estacion = "desconocida";
        }
        alert("La estación del año es "+estacion);


        /* En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. 
            Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras,
            si paga 2 a las dos primeras y si paga 1 solo a la primera sala. 
                
        Tecleo que pago 2 créditos, el script me dirá que puedo acceder a las salas de consola y juegos 2D.
        */

         let creditos, acceso='Acceso a Salas: ';
         switch (creditos = parseInt(prompt("¿Cuántos créditos vas a pagar?"))){
             case 4:
                 acceso += "Realidad Virtual, ";
             case 3:
                 acceso += "Juegos 3D, ";
             case 2:
                 acceso += "Juegos 2D, ";
             case 1:
                 acceso += "Consolas, ";
                 break;
             default:
                 acceso += "Ninguna";
         }
         alert(acceso);
 

        /* Un comerciante hace descuentos a sus clientes de la siguiente forma:
         Si ha comprado menos de 100 euros no hay descuento
         Si la compra está entre 100 y 300 euros le descuenta un 5%
         Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
         Si la compra supera los 400 euros le descuenta un 15% 
 
         Es decir: hago una compra de 150 euros pago 150 - 5% de 150, o sea 142,5 euros.*/
 
        let factura, total;
        factura = parseInt(prompt('¿Cuánto ha comprado?') );
        switch (true){
             case (factura >=100000 && factura <= 300000):
                 descuento = 5;
                 break
             case (factura >300000 && factura <=400000):
                 descuento = 10;
                 break
             case (factura >400000):
                 descuento = 15;
                 break
             default:
                 descuento = 0;
        }
        total = factura - (factura * 0.15)
        alert("Debe pagar: " + total + "€"); 
