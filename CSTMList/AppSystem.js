function addrow()
            {
              if (document.getElementById('Pname').value == "") {
                   alert("Item Information Required!");
                }else if(document.getElementById('Pquantity').value == ""){
                   alert("Item Information Required!");
                }else if(document.getElementById('Pprice').value == ""){
                   alert("Item Information Required!");
                }else{
                var TheProduct = document.getElementById('Pname').value;
                var TheQuantity = document.getElementById('Pquantity').value;
                var ThePrice = document.getElementById('Pprice').value;

                var pro = parseFloat(TheQuantity) * parseFloat(ThePrice);   
              
                var table = document.getElementsByTagName('table')[0];
                  
                var newRow = table.insertRow(table.rows.length/3+1);
                  
                  
                var cel1 = newRow.insertCell(0);
                var cel2 = newRow.insertCell(1);
                var cel3 = newRow.insertCell(2);
                var cel4 = newRow.insertCell(3);
                  
                  
                cel1.innerHTML = TheProduct;
                cel2.innerHTML = TheQuantity;
                cel3.innerHTML = pro;
                cel4.innerHTML = '<input type="button" name="u" value="Remove" onclick="delProduct(this);" class="btn-del">'

        document.getElementById("deltab").appendChild(newRow);


              }
 
            }

function total()
         {
          var table = document.getElementById("deltab");
          var addVal = 0;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                addVal = addVal + parseFloat(table.rows[i].cells[2].innerHTML);
            }
            
            document.getElementById("AllVal").innerHTML = "Total of: " + addVal + " pesos" ;
            console.log(addVal);
         }

let btnClear = document.getElementById('clr');
let data = document.querySelectorAll('input');
btnClear.addEventListener('click', () => {
    data.forEach(input =>  input.value = '');
});         


   function delProduct(Item){
        var s=Item.parentNode.parentNode;
        s.parentNode.removeChild(s);
    }
    




            

 