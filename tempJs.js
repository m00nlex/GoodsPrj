let tagHolder = document.getElementById('tagcloud');
function tagBuilder(){
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

function tagBuildOne(text){
    let newTag = document.createElement('div');
    newTag.innerHTML = text;
    newTag.classList.add('tag');
    tagHolder.appendChild(newTag)
    document.getElementById('tagInput').value = '';
}