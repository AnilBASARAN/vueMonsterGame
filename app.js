const randomizeNumber = (min, max) => {
  // Math.random() gives [0,1), so multiplying by (max–min+1) gives [0, max–min+1)
  // flooring that gives [0, max–min], then adding min shifts to [min, max]
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const app = Vue.createApp({
    data(){
        return {
            monsterHealth:100,
            userHealth:100,
            gameOver:false,
            surrender:false,
            win:false,
            currentRound:0,
            disabled:false,
        }
    },
    methods:{
        userAttack(){
            this.currentRound++;
            if(this.currentRound >= 4){
                this.disabled = false;
            }
            if(this.userHealth>0){
 this.monsterHealth -= randomizeNumber(5,12);
           this.monsterAttack();
            }else{
                this.gameOver = true;
            }
          
        },
        monsterAttack(){
            this.currentRound++;
               if(this.currentRound >= 4){
                this.disabled = false;
            }
           if(this.monsterHealth>0){
            this.userHealth -= randomizeNumber(8,15);
           }else{
            this.gameOver = true;
            this.win = true;
           }
             
        },
          specialAttack(){
            
                  if(this.userHealth>0 && this.disabled == false ){
            this.monsterHealth -= randomizeNumber(10,25);
           this.monsterAttack();
           }else{
            this.gameOver = true;
           }
           this.currentRound = 0;
           this.disabled = true;
            
        },
        heal(){
            let healValue = randomizeNumber(10,20);
           if(this.userHealth>0 && this.userHealth + healValue > 100 ){
            this.userHealth = 100;
             }else{
             this.userHealth += healValue
           }
           this.monsterAttack();
        },
        surrenderMe(){
            if(!this.gameOver){

                this.surrender = true;
            }
        }
    },

})

app.mount('#game');