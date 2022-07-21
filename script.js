let dice = document.getElementsByTagName('div')[0];

let btn = document.getElementsByTagName('button')[0];

let initialValue = 9855;


function roll(){
    let i = 1;
    setInterval(() => {
    
        if(i<=11){

            let randNum = Math.ceil(Math.random() * 6);

            dice.innerHTML = "&#"+(initialValue+randNum);
        
            i++;
        }
    },100);
}


