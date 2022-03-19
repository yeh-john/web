function add()
{
    // Calculate info
    const token = document.getElementById("t1").value;
    const bought_price = document.getElementById("t2").value;
    const sold_price = document.getElementById("t3").value;
    const gas_fee = document.getElementById("t4").value;
    const commission_rate = document.getElementById("t5").value;

    // Start calculate
    const commission = parseFloat(sold_price)*parseFloat(commission_rate)
    const profit = parseFloat(sold_price)-parseFloat(bought_price)-parseFloat(gas_fee)-parseFloat(commission)

    // Const result info
    const result = 'NFT resale profit is '

    // Result
    document.write('<h2>'+result+'<font color="red">'+profit+'</font>'+token+'</h2>');
    // Calculate again button
    document.write('<form action="./index.html"><input type="submit" value="Caluculate again" /></form>');
}
