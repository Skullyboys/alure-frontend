 var web3;
 var timestamp;
 var interval;
 var myaddress;
 var contract;

 const dvaddress = "0xc073750f2f7BcCa1fF9aFA5a9549135B22c72fD9";
 const tokenaddress = "0x1c91b818e244c20732f917fde4c872644bcc544d";

 let devbalance = document.getElementById("devbalance");
 let mybalance = document.getElementById("mybalance");
 let lockedMoney = document.getElementById("locked-money");








 async function onPageLoad() {
     await loadweb3();

     if (addr == undefined) {

         walcon.style.display = "block";
         need1.style.display = "none";
         need2.style.display = "none";
         need3.style.display = "none";
         need4.style.display = "none";
         myacc.style.display = "none";
         balown.style.display = "none";
         titlearea.style.display = "none";
         loaderimg.style.display = "block";
         desc.style.display = "none";
         details.style.display = "none";
         icons.style.display = "none";

     }

     let accounts = await web3.eth.getAccounts();
     myaddress = accounts[0];
     console.log(myaddress);
     document.getElementById("con").innerHTML = myaddress;


     try {
         contract = await new web3.eth.Contract(dvaddress);
     } catch (error) {
         console.log(error);
     }




     updateBalances();
 }




 async function updateBalances() {
     let value = await web3.eth.getBalance(myaddress);


     mybalance.innerText = web3.utils.fromWei(value, 'ether');



 }



 onPageLoad();