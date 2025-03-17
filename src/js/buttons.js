const charactersIcons = document.querySelectorAll('.icon')
const section = document.querySelectorAll('.section')

charactersIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const atualIconSelected = document.querySelector('.selected')
        if (atualIconSelected) atualIconSelected.classList.remove('selected')

        icon.classList.add('selected')


        const atualSection = document.querySelector('.actived')
        if (atualSection) atualSection.classList.remove('actived')

        section.forEach(section => {
            if (icon.classList.contains('luffy') && section.classList.contains('luffy')) section.classList.add('actived')

            else if (icon.classList.contains('zoro') && section.classList.contains('zoro')) section.classList.add('actived')
                
            else if (icon.classList.contains('nami') && section.classList.contains('nami')) section.classList.add('actived')

            else if (icon.classList.contains('usopp') && section.classList.contains('usopp')) section.classList.add('actived')

            else if (icon.classList.contains('sanji') && section.classList.contains('sanji')) section.classList.add('actived')

            else if (icon.classList.contains('chopper') && section.classList.contains('chopper')) section.classList.add('actived')

            else if (icon.classList.contains('robin') && section.classList.contains('robin')) section.classList.add('actived')

            else if (icon.classList.contains('franky') && section.classList.contains('franky')) section.classList.add('actived')

            else if (icon.classList.contains('brook') && section.classList.contains('brook')) section.classList.add('actived')

            else if (icon.classList.contains('jinbe') && section.classList.contains('jinbe')) section.classList.add('actived')
        })
    })
})
