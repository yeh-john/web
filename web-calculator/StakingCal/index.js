function add()
{
    // Calculate info
    const coin = document.getElementById("t1").value;
    const goal = document.getElementById("t2").value;
    const input_day = document.getElementById("t3").value;
    const apr = document.getElementById("t4").value;

    // Start calculate
    const need_stake = parseFloat(goal)/parseFloat(apr)*365/parseInt(input_day);

    // Result info
    const result = 'You need to stake ';
    const result1 = need_stake;
    const result2 = 'Can get '+goal+coin+' reward in '+input_day+'days';

    // Result
    document.write('<h2>'+result+'<font color="red">'+result1+'</font>'+coin+'</h2>');
    document.write('<h2>'+result2+'</h2><br>');
    // Calculate again button
    document.write('<form action="./index.html"><input type="submit" value="Caluculate again" /></form>');
}
