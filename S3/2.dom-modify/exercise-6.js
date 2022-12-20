const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const element$$ = document.querySelector('body')
let dhtml$$="<ul>";
for(let i=0;i<apps.length;i++){
    dhtml$$ += `<li>${apps[i]}</li>`
}
dhtml$$ += '</ul>'
element$$.innerHTML = dhtml$$;


