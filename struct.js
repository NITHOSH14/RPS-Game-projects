
    const score=JSON.parse(localStorage.getItem
    ('score')) ||
    {
            win:0,
            lose:0,
            tie:0,
        };
   
updatescoreElement();
/*
    if(!score)
    {
        score={
            win:0,
            lose:0,
            tie:0,
        };
    }
*/
function playGame(playerMove)
{
    const computerMove=pickcomputermove();
    
         let result='';
         
         if(playerMove==='scissor')

         {  

             if(computerMove==='rock')
        {
            result='you lose';
        }
        else if(computerMove==='paper')
        {
            result='you won!';
        }
        else if (computerMove==='scissor')
        {
            result='tie';
        }
        
    }

    else if(playerMove==='paper')
    {
        

if(computerMove==='rock')
{
   result='you won!';
}
else if(computerMove==='paper')
{
   result='tie';
}
else if (computerMove==='scissor')
{
   result='you lose';
}

    }
    else if(playerMove==='rock')
    {
       
        
        
       if(computerMove==='rock')

       {
           result='tie';
       }
       else if(computerMove==='paper')
       {
           result='you lose';
       }
       else if (computerMove==='scissor')
       {
           result='you won!';
       }
      
    }

    if(result==='you won!')
    {
        score.win+= 1;
    
    }
    else if (result==='you lose')
        {
            score.lose+= 1;
        }
     
        else if(result==='tie')
        {
            score.tie+= 1;
        }
     localStorage.setItem('score', JSON.stringify(score));

    updatescoreElement();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-move').innerHTML=`you
            <img src="${playerMove}-emoji.png" alt="rock" width="50px" height="50px">
           
            <img src="${computerMove}-emoji.png" alt="scissors" width="50px" height="50px">
            computer`;
     
        
}


function updatescoreElement(){
      document.querySelector('.js-score')
    .innerHTML=`win=${score.win}, lose=${score.lose}, tie=${score.tie}`;

}

            function pickcomputermove()

            {

                let computerMove='';

                const randomNumber=Math.random();
                
            
                
                if (randomNumber>=0&& randomNumber<=1/3)
                {
                    computerMove='rock';
                }
                else if(randomNumber>=1/3 && randomNumber<=2/3)
                
                {
                    computerMove='paper';
                }
                else if(randomNumber>=2/3 && randomNumber<=1)
                {
                    computerMove='scissor';
                }
            
                return  computerMove;
            }
