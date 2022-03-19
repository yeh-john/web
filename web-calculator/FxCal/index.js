function add()
{
    // Calculate info
    const coin = document.getElementById("t1").value;
    const bought_price = document.getElementById("t2").value;
    const current_price = document.getElementById("t3").value;

    // Start calculate
    const change_amt = parseFloat(current_price)-parseFloat(bought_price);
    const change_per = parseFloat(change_amt)/parseFloat(bought_price)
    const percent = parseFloat(change_per)*100

    // Const result info
    const result = coin+' price change '+percent+'%';

    // Result
    document.write('<h2>'+result+'</h2>');
    // Calculate again button
    document.write('<form action="./index.html"><input type="submit" value="Caluculate again" /></form>');
}
