form=document.querySelector('.form-input');
btn=document.querySelector('.btn');
output=document.getElementById('get');
btn.addEventListener('click',(event)=>{
    event.preventDefault();
    search=form.value;
    output.innerHTML=`search results for ${search}`;
})