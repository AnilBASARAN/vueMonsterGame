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
        }
    },
    methods:{
        userAttack(){
            if(this.userHealth>0){
 this.monsterHealth -= randomizeNumber(5,12);
           this.monsterAttack();
            }else{
                this.gameOver = true;
            }
          
        },
        monsterAttack(){
           if(this.monsterHealth>0){
            this.userHealth -= randomizeNumber(8,15);
           }else{
            this.gameOver = true;
            this.win = true;
           }
             
        },
          specialAttack(){
           if(this.userHealth>0){
            this.monsterHealth -= randomizeNumber(10,25);
           this.monsterAttack();
           }else{
            this.gameOver = true;
           }
        },
        heal(){
           if(this.userHealth>0){
             this.userHealth += randomizeNumber(10,20);
           }else{
            this.gameOver = true
           }
        },
        surrenderMe(){
            if(!this.gameOver){

                this.surrender = true;
            }
        }
    },

})

app.mount('#game');