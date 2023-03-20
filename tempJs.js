let tagHolder = document.getElementById('tagcloud');
function tagBuilder(){ // рендер того, что уже должно быть на странице
    let tags = ['Sun', 'Moon', 'Jupiter', 'Jaba'];

    for (const tagsKey in tags) {
        let newTag = document.createElement('div');
        newTag.innerHTML = tags[tagsKey];
        newTag.classList.add('tag');
        tagHolder.appendChild(newTag)
    }
};

tagBuilder();
console.log('DONE')

function tagBuildOne(text){ // добавление новых тегов
    let newTag = document.createElement('div');
    newTag.innerHTML = text;
    newTag.classList.add('tag');
    tagHolder.appendChild(newTag)
    document.getElementById('tagInput').value = '';
}