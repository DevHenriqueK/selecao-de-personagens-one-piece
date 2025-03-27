const charactersIcons = document.querySelectorAll('.icon');
const sections = document.querySelectorAll('.section');

charactersIcons.forEach(icon => {
    icon.addEventListener('click', () => {

        document.querySelector('.selected')?.classList.remove('selected');
        document.querySelector('.actived')?.classList.remove('actived');

        icon.classList.add('selected');

        const character = [...icon.classList].find(cls =>
            ['luffy', 'zoro', 'nami', 'usopp', 'sanji', 'chopper', 'robin', 'franky', 'brook', 'jinbe'].includes(cls)
        );

        if (character) {
            document.querySelector(`.section.${character}`)?.classList.add('actived');
        }
    });
});