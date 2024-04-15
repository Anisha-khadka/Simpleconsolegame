
let points=0;
let chances=0;
while(true)
{
    let arr=['snake','gun','water']
    let b= Math.floor(Math.random()*arr.length);
    let c= arr[b];
    console.log(c)
    let a1=prompt("Enter s,w,g?")
    if(a1==c)
    {
        alert("draw")
        chances++;
    }
    else if(a1=='s' && c=='gun')
    {
       alert("Lost")
       chances++;
    }
    else if(a1=='s' && c=='water')
    {
       alert("lost")
       chances++;
    }
    else if(a1='w' && c=='gun')
    {
       alert('Win')
       points++;
    }

    
    else if(a1='w' && c=='snake')
    {
       alert('Win')
       points++;
    }
    else if(a1='gun' && c=='snake')
    {
       alert('Win')
       points++;
    }
    else if(a1='gun' && c=='water')
    {
       alert('lost')
       chances++;
    }
    else{
        console.log("wrong input");
    }
    if(chances==5){
         break;
    }

}
alert("Your points are" +points+ "Chances used in game" +chances);
