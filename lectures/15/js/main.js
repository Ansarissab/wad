 // l1f16bscs0071

var Acc_Name = document.getElementById("title");
var Acc_Balance = document.getElementById("balance");
var Acc_Currency = document.getElementById("currency");
var Acc_IBAN = document.getElementById("IBAN");
var Acc_Deposite = document.getElementById("deposit");
var Acc_Withdraw = document.getElementById("withdraw");

var Information =
    {
        Name : "Ansari SSab",
        Balance : 100000,
        Currency : "PKR" ,
        IBAN: "PKN12345678912345"
    }

Show_data();
function Show_data()
{
    Acc_Name.innerText = Information.Name;
    Acc_Balance.value = Information.Balance;
    Acc_Balance.innerText = Acc_Balance.value;
    Acc_Currency.innerText = Information.Currency;
    Acc_IBAN.innerText = Information.IBAN;
}
function Deposit()
{
    document.getElementById("deposit-msg").innerText = "";
    if(event.key === "Enter")
    {
        var amount = parseInt(Acc_Deposite.value,10);
        if(amount>0) {
            Acc_Balance.value += amount;
            Acc_Balance.innerText = Acc_Balance.value;
            Acc_Deposite.value = "";
            var TableTransactions = document.getElementById("transaction-table");
            TableTransactions.innerHTML += '<tr>' +
                '<td>' + Date() + '</td>' +
                '<td>' + "Credit" + '</td>' +
                '<td>' + amount + '</td>' +
                '</tr>';
        }
        else{
            var Error = document.getElementById("deposit-msg");
            Error.innerText = "Enter a valid input";
        }

    }
}
 function WithDraw()
 {
     document.getElementById("withdraw-msg").innerText = "";
     if(event.key === "Enter")
     {
         var data = parseInt(Acc_Withdraw.value,10);
         if(data <= Acc_Balance.value && data>0)
         {
             Acc_Balance.value = Acc_Balance.value - data;
             Acc_Balance.innerText = Acc_Balance.value;
             Acc_Withdraw.value = "";
             var TableTransactions = document.getElementById("transaction-table");
             TableTransactions.innerHTML+='<tr>' +
                 '<td>'+Date()+'</td>' +
                 '<td align="left" valign="middle" scope="col">'+"Debit"+'</td>' +
                 '<td align="left" valign="middle" scope="col">'+data+'</td>' +
                 '</tr>';
         }
         else
         {
             var error_msg = document.getElementById("withdraw-msg");
             error_msg.innerText = "Don't have sufficient amount in account!";
         }
     }
 }