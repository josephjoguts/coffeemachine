class CoffeeMachine{
    power;
    coffee;
    water;
    current_temp

    constructor(power) {
        this.power = power;
        this.current_temp=0;
    }
    brewCoffee(water,coffee,temp){
        this.coffee=coffee;
        this.water= water;
        return this.boilWater(temp)
    }
    boilWater(temp){
        let brewPower = Math.floor(this.power/100)+Math.floor(this.water/20)
        let brewTime = Math.floor(temp/brewPower);

        let startBoil=setInterval(()=>{
                if(this.current_temp+brewPower<temp){
                    this.current_temp+=brewPower;
                    console.log(`boiling water; curr_temp:${this.current_temp}`)
                }
                else{
                    clearInterval(startBoil)
                    this.current_temp = temp;
                    console.log("water was boiled ready to do coffee")
                    return this.startBrewing(this.coffee);
                }


        },1000)

    }
    startBrewing(coffee){
        const stopInterval = Math.floor(coffee/5)
      let startBrew= setInterval(()=>{
                coffee-=stopInterval;
                if(coffee<=0){
                    clearInterval(startBrew)
                    console.log("coffee is ready")
                    return "ready";
                }
                else{
                    console.log(`really brew coffee await ${Math.floor(coffee/stopInterval)} secs`)
                }

        },1000)
    }

}

let coffeMachine = new CoffeeMachine(300);
coffeMachine.brewCoffee(250,15,80)