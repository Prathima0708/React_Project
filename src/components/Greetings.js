function Greetings()
{
    let currDate=new Date();
    currDate=currDate.getHours()
    let greeting='';
    const cssStyle={};

    if (currDate >=1 && currDate <12)
    {
        greeting='Good Morning';
        cssStyle.color='green';
    }
    else if(currDate >=12 && currDate<4)
    {
        greeting='Good Afternoon'
        cssStyle.color='Orange';
    }
    else if(currDate >=4 && currDate<8)
    {
        greeting='Good Evening'
        cssStyle.color='Blue';
    }
    else
    {
        greeting='Good Night'
        cssStyle.color='Black';
    }

    return(
        <div style={{marginTop:30,flexDirection:"row",padding:20,float:"left",backgroundColor:"pink",marginBottom:30,height:100,marginLeft:20,borderRadius:10}}>

            
        
        <h1 style={{alignItems:"center"}}>Hello ,<span style={cssStyle}>{greeting}</span></h1>
        </div>
    )
}

export default Greetings;