const TAI = true;
const XIU = false;
const WIN = true;
const LOSE = false;

const stateDice = {
    myChoice:TAI,
    gameChoice:XIU,
    result: WIN,
    rolled:[1,1,1],
    totalGame:0,
    totalWin:0,
    showResult:false,
};
export const DiceReducer = (state = stateDice, action) => {
    switch(action.type) {
        case "BAT_DAU" : {
            state.rolled = [Math.floor(Math.random()*6)+1, Math.floor(Math.random()*6)+1, Math.floor(Math.random()*6)+1];
            state.gameChoice = (state.rolled.reduce((prev,next) =>{return prev+=next},0) > 10)? TAI:XIU;
            if(state.myChoice === state.gameChoice) {
                state.result = WIN;
                state.totalWin++;
            } else {
                state.result = LOSE;
            }
            state.totalGame++;
            state.showResult = true;
            return {...state};
        }
        case "CHON_TAI_XIU" : {
            state.myChoice = action.myChoice;
            state.showResult = false;
            return {...state};
        }
        default : {

        }
    }
    return {...state}
}