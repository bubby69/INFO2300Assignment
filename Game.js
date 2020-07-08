//Gaurav Reddy Pulliahgari - 8679494
module.exports = class Game{
    constructor() {
        //Attributes of class Game which will be used to decide the results.
        this.secondDoorKey = false;
        this.hasDragonSlayerSword = false;
        // this.nCurrent = 0;
    }
    makeAMove(sInput)
    { 
        // nCurrent is used as a counter. It will keep changing based on the stage of the game.
       if(!this.nCurrent) {
            // this.nCurrent++;
            this.nCurrent = 1;
            return [`Welcome to Gaurav's Adventure Game.\n You come across a huge Balthazar Warlord Gate which is being guarded by a
            Colossal Titan. You have two choices: Enter 1 if you want to fight him and get past the gate OR Enter 2 if you want to talk to him.`];
        }
        else if(this.nCurrent == 1)
        {
            if(sInput == 1)  
            {   this.nCurrent = undefined; 
                return [`Guard: "You are a fool to attack me. I am the invincible soldier of balthazar." 
                The guard retaliates and kills you. Enter any input to restart the game.`];             
            }
            else if(sInput == 2)
            {   this.nCurrent = 2;
                return [`Guard: "Hello Adventurer. My name is Colossal Sion. I am the loyal Balthazar guard.
                If you want to go past me, you must first redeem yourself by killing the Dragon. I will teleport you to the crossroads of destiny. To advance on your quest, you have to choose one of the three paths : 1, 2, 3"`];
            }
            else 
            {
                this.nCurrent = undefined;
                return [`Please enter a valid option`];
            }
        }
        else if(this.nCurrent == 2)
        {
            if(sInput == 1)
            {
                if(!this.secondDoorKey)
                {
                    this.secondDoorKey = true;
                    return [` You find an ancient statue of a monk. Upon approaching, the statue starts to talk.
                    He offers you a key and says "Take my key and find the dragon slaying sword!". You take the key and thank him.
                    You are teleported back to the crossroad, Choose your next path.`];
                }
                else
                {
                    this.nCurrent = 2;
                    return [`You have already gone through this path. Please go through another path.`];
                }
            }

            else if(sInput == 2)
            {
                if(!this.hasDragonSlayerSword)
                {
                    if(this.secondDoorKey)
                    {
                        this.hasDragonSlayerSword = true;
                        this.nCurrent = 2;
                        return [`You unlock the door using the key you found earlier. A mysterious spirit appears. \n
                        Spirit: "Fortune has choosen to help you on your quest. I was a proud Balthazar soldier who slayed multiple dragons.
                        Here, take my sword and slay the fire dragon!."
                        You now wield the deadly Dragon Slaying Sword!.
                        You are teleported back to the crossroad, Choose your next path.`];
                    }
                    else
                    {
                        this.nCurrent = 2;
                        return [` The door seems to be locked. You need to look for the key. You are teleported back to the crossroad.`];
                    }
                }
                else
                {
                    this.nCurrent = 2;
                    return [`You have already gone through this path. Please go through another path.`];
                }
            }

            else if(sInput == 3)
            {
                this.nCurrent = 3;
                return [`A monstrous Fire Dragon appears!. Will you Fight or Flee. Enter 1 to Fight or 2 to Flee.`];
            }

            else 
            {
                this.nCurrent = 2;
                return [`Please Enter a valid choice input.`];
            }
        }
        else if(this.nCurrent == 3)
        {
            if(sInput == 1)
            {
                if(this.hasDragonSlayerSword)
                {
                    this.nCurrent = 4;
                    return [`After a fierce battle, You successfully kill the Fire Dragon with the help of the Dragon Slaying Sword!.
                    You now possess the head of the fire dragon, which you may use to redeem yourself by presenting it to the Balthazar guard.
                    Enter any input to teleport back to the guard.`];
                }
                else 
                {
                    //Reseting the values of nCurrent, hasDragonSlayerSword, secondDoorKey in order to restart the game
                    this.nCurrent = undefined;
                    this.hasDragonSlayerSword = false;
                    this.secondDoorKey = false;
                    return [`Despite a tough fight, you lose to the dragon and lose your life. Your game will now restart. Enter any input to continue`];
                }
            }
            else if(sInput == 2)
            {
                this.nCurrent = 2
                return [`You have cowardly choosen to run. You are teleported back to the crossroad, Choose your next path.`];
            }
            else
            {
                return [`Please Enter a valid choice input.`];
            }
        }
        else if(this.nCurrent == 4)
        {
            //Reseting the values of nCurrent, hasDragonSlayerSword, secondDoorKey in order to restart the game
            this.nCurrent = undefined;
            this.hasDragonSlayerSword = false;
            this.secondDoorKey = false;
            return [`Guard: "Bravo!!. You have conquered the dragon. You are now worthy to join the Balthazar Army. You win the game.
            Your game will now restart. Enter any input to continue.`];
        }            
    }
}