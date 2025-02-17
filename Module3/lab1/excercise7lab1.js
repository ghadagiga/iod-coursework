const basketballGame = {
    score: 0,
    count:0,
    basket() {
        this.score += 2;
       return(this)
        },
    freeThrow() {
    this.score++;
    if (this.count===0)
    {
    this.count++;
    this.freeThrow(this)
    }
    return(this);
    },
    threePointer() {
    this.score += 3;
    return(this);
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    }
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();