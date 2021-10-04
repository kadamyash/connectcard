if(localStorage.getItem('theme')!==null){
    const theme = localStorage.getItem('theme');
    document.getElementById('main').className = theme;
    if(theme==='dark'){
        document.getElementById('headerbar').setAttribute("content", '#353535');
    }
    else if(theme==='dark'){
        document.getElementById('headerbar').setAttribute("content", '#f0efeb');
    }
}
else{
    document.getElementById('main').className = 'light';
    document.getElementById('headerbar').setAttribute("content", '#f0efeb');
}

function switchTheme(){
    const element = document.getElementById('main');
    if(element.className==='light'){
        element.className='dark';
        document.getElementById('headerbar').setAttribute("content", '#353535');
        localStorage.setItem('theme', 'dark');
    }
    else{
        element.className='light';
        document.getElementById('headerbar').setAttribute("content", '#f0efeb');
        localStorage.setItem('theme', 'light');
    }
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
})