if(localStorage.getItem('theme')!==null){
    const theme = localStorage.getItem('theme');
    document.getElementById('main').className = theme;
    if(theme==='light'){
            document.getElementById('theme-container').innerHTML="Switch to dark";
    }
    else if(theme==='dark'){
            document.getElementById('theme-container').innerHTML="Switch to light";
    }
}
else{
    document.getElementById('main').className = 'light';
}

function switchTheme(){
    const element = document.getElementById('main');
    if(element.className==='light'){
        element.className='dark';
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-container').innerHTML="Switch to light";
    }
    else{
        element.className='light';
        localStorage.setItem('theme', 'light');
        document.getElementById('theme-container').innerHTML="Switch to dark";
    }
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
})