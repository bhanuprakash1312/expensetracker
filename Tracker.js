let table = document.getElementById('table');
let add = document.getElementById('add-button');   
function deleterow(row){
    row.remove();
}
function addrow(){
    
    
    let amount = document.getElementsByClassName('amount')[0].value
    let options = document.getElementsByClassName('transaction-type')[0].value
    let date = document.getElementsByClassName('date-input')[0].value
    let row = document.createElement('tr');
    let amountcell = document.createElement('td');
    amountcell.innerText = amount;

    let transactioncell = document.createElement('td');
    transactioncell.innerText = options;
    let datecell = document.createElement('td');
    datecell.innerText = date;
    if(amount == '' || date == ''){
        alert('Please fill the required fields');
        return;
    }
    let Deletecell = document.createElement('td');
    let Deletebtn = document.createElement('button');
    let Deleteimg = document.createElement('img');
    Deleteimg.src = 'recycle-bin.png';
    Deleteimg.style.width = '20px';
    Deleteimg.style.height = '20px';
    Deletebtn.style.backgroundColor = 'red';
    Deletebtn.classList.add('delete-button');
    Deletebtn.appendChild(Deleteimg);
    Deletecell.appendChild(Deletebtn);

    Deletebtn.addEventListener('click', () => deleterow(row));
    
    row.appendChild(amountcell);
    row.appendChild(transactioncell);
    row.appendChild(datecell);
    row.appendChild(Deletecell);
    table.appendChild(row);
    let amountcard = document.getElementById('total').innerText;
    let spendcard = document.getElementById('spend').innerText;
    let balancecard = document.getElementById('balance').innerText;
    if(options === 'Income'){
        if(amountcard == '0'){
            document.getElementById('total').innerText = amount;
        }
        else{
            document.getElementById('total').innerText = parseInt(amountcard) + parseInt(amount);
        }
        if(balancecard=='0'){
            document.getElementById('balance').innerText = amount;
        }
        else{
            document.getElementById('balance').innerText = parseInt(balancecard) + parseInt(amount);
        }
    }
    else if(options == 'Expense'){
        if(spendcard == '0'){
            document.getElementById('spend').innerText = amount;
        }
        else{
            document.getElementById('spend').innerText = parseInt(spendcard) + parseInt(amount);
        }
        if(balancecard=='0'){
            document.getElementById('balance').innerText = amount;
        }
        else{
            document.getElementById('balance').innerText = parseInt(balancecard) - parseInt(amount);
        }
        
    }

}
add.addEventListener('click', addrow);  
