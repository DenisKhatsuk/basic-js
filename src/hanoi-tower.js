module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let answer = {
        turns: 0,
        seconds: 0
    }
    answer.turns = 2**disksNumber - 1;
    answer.seconds = (answer.turns/(turnsSpeed / 3600));
    return answer;
}