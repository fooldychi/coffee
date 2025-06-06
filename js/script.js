window.onload = function(){
    // 滚动条
    window.onscroll=()=>{
        if(window.scrollY>0){
            document.querySelector('nav').classList.add('active')
        }
        else{
            document.querySelector('nav').classList.remove('active')
        }
    }
    // 收起
    document.querySelector(".navbar-nav").onclick = function(){
        document.querySelector(".navbar-toggler").click()
    }
    // 激活导航
    document.querySelector(".navbar-toggler").onclick = function(){
        document.querySelector('nav').classList.add('active')
    }
    // 换肤
    document.querySelector(".theme").onclick = function(){
        const currentTheme = document.body.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
        document.body.setAttribute('data-bs-theme', newTheme);
        document.body.classList.value = ''
        document.body.classList.toggle(newTheme)
    }
}