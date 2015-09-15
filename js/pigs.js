//Wanta cheat at this game?  Go the fuck ahead.
//Writen by Alex Kremer
//askremer@gmail.com

//Main game loop.  This shit keeps you going.
function game($scope){
    
    //Constants
    var constants = {
        "pigeat" : 10,
        "newpighappy" : -10,
        "maxhappiness" : 100,
        "minhappiness" : 0
    }
    
    
    //Holds Variables is the MODEL for you mother fuckers.u
    $scope.objects = {
        "pigs":1,
        "farmland":2,
        "gold" : 20,
        "feed" : 200,
        "eaten" : 10,
        "pighappy" : 100,
        "humanhappy" : 50,
        "cityhappy" : 50,
        "kingdomhappy" : 25,
        "sellcost" : 10,
        "feedcost" : 1
    };
    
    $scope.variablepurchase = {
        "feed":0
        
    };

    $scope.resources = {
        "gold" : {
            "objects":"gold",
            "buildable":"goldcost"
        },
        "feed":{
            "objects":"feed",
            "buildable":"feedcost"
        },
        "eaten":{
            "objects":"eaten",
            "buildable":"eatcost"
        },
        "pighappy":{
            "objects":"pighappy",
            "buildable":"pighappycost"
        },
        "humanhappy":{
            "objects":"humanhappy",
            "buildable":"humanhappycost"
        },
        "cityhappy":{
            "objects":"cityhappy",
            "buildable":"cityhappycost"
        }
    }
    
    $scope.buildable = {
        "feed" : {
            "bonus" : [
            {
                "bonusto":"feed",
                "bonusadd":"30"
            }
            ],
            "goldcost":10
        },
        "pigs" : {
            "bonus" : [
            {
                "bonusto":"pigs",
                "bonusadd"  :"1"
            },
            {
                "bonusto":"eaten",
                "bonusadd" : constants.pigeat
            },
            {
                "bonusto":"pighappy",
                "bonusadd" : constants.newpighappy
            }
            ],
            "goldcost":"10"
        },
        "playsong" : 
        {
            "bonus":[
            {
                "bonusto":"pighappy",
                "bonusadd":10
            }
            ],
            "humanhappycost":10
        },
        "gamble" :
        {
            "bonus":[
            {
                "bonusto":"gold",
                "bonusadd" : 25
            }
            ],
            "cityhappycost":5
        },
        "washpigs":
        {
            "bonus":[
                {
                    "bonusto":"pighappy",
                    "bonusadd":5
                }
            ]
        }
    };
   
    $scope.build = function(object){

        //console.log(this.buildable[object].bonusTo);
        this.processItem(object);
        
        //Always end the  turn after an action something
        this.endturn();
    }
    
    
    //This function takes an object and processes it through the game system.  It is the build logic
    $scope.processItem = function(object){
        //What does this affect
        var item = this.buildable[object];
        
        //Check each type to find if there is a requirement that is missing.
        if(!this.requirementtests(item))
            return false;
        
        //Deduct expenses
        this.deductexpenses(item);
        
        //Add this items bonuses into the system
        this.bonus(item);
        
        return true;
    }
    
    
    
    //--------------------------------------------------------------------------
    //Private Functions, used as logic holders for the build area.
    //--------------------------------------------------------------------------

    //Checks to see if an item meets the requirements.
    $scope.requirementtests = function(item){
        for(var type in this.resources){
            //Get the cost of the item.
            var cost = (item[this.resources[type].buildable] != undefined) ? item[this.resources[type].buildable] : 0;
            
            //See if they can build
            var allowedtobuild = this.checkTotals(cost, this.objects[this.resources[type].objects]);
            
            //If they cant return a false and break
            if(!allowedtobuild)
                return false;
        }
        return true;
    }
    
    //Check resource values
    $scope.checkTotals = function(cost, total){
        if(cost == 0)
            return true;
        
        //Have the total to do this?
        if(cost <= total && cost > 0){
            console.log(cost + ' ' + total);
            return true;
        } else {
            return false;
        }
        
    }
    
    //Loops through all types and deducts expenses
    $scope.deductexpenses = function(item){
        for(var type in this.resources){
            //Find out if this type has a cost associated with it
            var cost = (item[this.resources[type].buildable] != undefined) ? item[this.resources[type].buildable] : 0;
            
            //Subtract the cost from the item.
            this.objects[this.resources[type].objects] -= cost;
        }
    }
    
    //Loops through and adds all bonus from an item
    $scope.bonus = function(item){
        for(var bonus in item.bonus){
            //Add this item to the objects
            this.objects[item.bonus[bonus].bonusto] += eval(item.bonus[bonus].bonusadd);
        }
        
    }
    //--------------------------------------------------------------------------
    //End of turn calculations
    //--------------------------------------------------------------------------
    
    //Holds end turn stuff. 
    $scope.endturn = function(){
    
    //Pigs Eat Food
        endOfTurnMethods.updatesellcost();
        
    
    }   
    
    
    
    var endOfTurnMethods = {
        //Pigs eat food
        eatfood : function(){
            
        },
        //Updates the sell cost
        updatesellcost:function(){
            objects.sellcost = 40;
        }
        
    }
    
}




