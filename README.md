# Minecraft Memory

Minecraft Memory is a Minecraft-themed memory game built with React. This project was created as a fun way to practice working with React side-effects and to explore the use of sound in web applications.
> [Live Website](https://minecraft-memory.netlify.app/)

## Preview

![mm-2](https://github.com/mathdebate09/memory-game/assets/140599484/e5f13814-3260-40db-8650-c8f2e874dba8)

## Features

- Engaging sound effects: Each click is accompanied by a unique sound, enhancing the interactive experience. Plus, enjoy soothing background music throughout your gameplay.
- Pixelated UI: The user interface has a textured, pixelated design, giving it a distinctive Minecraft feel.
- Hidden feature: Look out for a secret button. It's not too hard to find, and when clicked, it triggers the sound of a Minecraft villager.

## How to Play

- Click on various cards and try to remember the ones you've previously clicked.
- Your score increases with each unique card you click.
- The game is won when all 12 unique cards have been clicked without repeating.
- Enjoy the game with the background music from the album "Minecraft - Volume Alpha" by C418.

## Tools/Languages

[![React](https://img.shields.io/badge/-React-000?style=for-the-badge&logo=React)](#) [![Vite](https://img.shields.io/badge/-Vite-000?style=for-the-badge&logo=Vite)](#)  [![JS](https://img.shields.io/badge/-JavaScript-000?style=for-the-badge&logo=javascript&logoColor=F0DB4F)](#) [![HTML](https://img.shields.io/badge/-HTML-000?style=for-the-badge&logo=html5)](#) [![CSS](https://img.shields.io/badge/-CSS-000?style=for-the-badge&logo=css3&logoColor=1572B6)](#) [![netlify](https://img.shields.io/badge/-netlify-000?style=for-the-badge&logo=netlify)](#)

## Getting Started

- Make sure  you have [Node v14](https://nodejs.org/en/download/package-manager) or higher and [Git](https://git-scm.com/downloads) downloaded

```bash
$ git clone git@github.com:mathdebate09/memory-game.git
$ cd memory-game
$ npm install
$ npm run dev
```

## Learning Outcomes

- Gained experience with the React `useEffect` hook
- Learned how to add music to a website using the `useSound` hook from the `use-sound` library
- Explored the use of sound in web applications to enhance user experience

## References

- **Background Music**: The track "[Minecraft](https://open.spotify.com/track/6xwhCiWXREsAIQVZqHswVw?si=5605fbbbeb114608)" by [C418](https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx) sets the mood for the game.
- **Fonts**: The logo uses the "Minecrafter" font, and the text uses the "MinecraftSystemUI" font. Both fonts are owned by Microsoft/Minecraft.
- **Textures**: The header uses a "lime terracotta" texture, the scorecard uses a "sandstone-bricks" texture, the card container uses a "sandstone" texture, and the footer uses a "gilled blackstone" texture. All textures are owned by Microsoft/Minecraft.
- **Sound Effects**: Various onClick sound effects are part of the Minecraft texture pack (Programmers Pack).

## Code references

- Adding sound in React [[Source](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook)]
- Pixelated borders codepen [[Source](https://codepen.io/fallwestmike/pen/ezOGJK)]
