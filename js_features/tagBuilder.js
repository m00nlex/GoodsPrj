export function tagBuilder(){
    let tags = ['Sun', 'Moon', 'Jupiter', 'Jaba'];
    let tagHolder = document.getElementById('tagcloud');
    for (const tagsKey in tags) {
        let div = document.createElement('div');
        div.innerHTML = {tagsKey};
        div.classList.add('tag');
        tagHolder.appendChild(div)
    }
}

module.exports = tagBuilder();