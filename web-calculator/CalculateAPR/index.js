function add()
{
    // Calculate info
    const platform = document.getElementById("t1").value;
    const coin = document.getElementById("t2").value;
    const reward = document.getElementById("t3").value;
    const stake_amt = document.getElementById("t4").value;  // Staking amount

    // Start calculate
    const day_rate = parseFloat(reward)/parseFloat(stake_amt)
    const apr = parseFloat(day_rate)*365
    const percent = parseFloat(apr)*100

    // Const result info
    const result = platform+' staking '+coin+' APR is ';
    const result2 = percent+'%';

    // Result
    document.write('<h2>'+result+'<font color="red">'+result2+'</font></h2>');
    // Calculate again button
    document.write('<form action="./index.html"><input type="submit" value="Caluculate again" /></form>');
}
