if(localStorage.getItem('theme')!==null){
    const theme = localStorage.getItem('theme');
    document.getElementById('main').className = theme;
}
else{
    document.getElementById('main').className = 'light';
}

function switchTheme(){
    const element = document.getElementById('main');
    if(element.className==='light'){
        element.className='dark';
        localStorage.setItem('theme', 'dark');
    }
    else{
        element.className='light';
        localStorage.setItem('theme', 'light');
    }
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
})