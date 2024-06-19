export default function Footer({ numOfHours }) {
    const catchyDevPhrase = Math.random() < 0.5 ? "hair pulling javascript bugs" : "gut wrenching css quirks";

    return (
        <footer>
            <p>Made with <a href="https://youtu.be/dQw4w9WgXcQ?si=q_GoH-BOdbcOY7D9" target="_blank" rel="noopener">{numOfHours}</a> hours of {catchyDevPhrase} by Jay Singh <a href="https://github.com/mathdebate09">(mathdebate09)</a></p>
        </footer>
    );
}