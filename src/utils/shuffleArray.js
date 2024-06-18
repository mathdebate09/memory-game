// Reference: http://bost.ocks.org/mike/shuffle/

export default function shuffle(array) {
    const shuffledArray = array
    let currentIndex = shuffledArray.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
            shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }

    return shuffledArray
}