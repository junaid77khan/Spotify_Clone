function vis_play(){
    let play = document.getElementById('play');
    play.style.visibility = 'visible';  
}

function invis_play(){
    let play = document.getElementById('play');
    play.style.visibility = 'hidden';  
}

function show(){
    let play_opt = document.getElementById('play-opt');
    if(play_opt.style.visibility == 'hidden') play_opt.style.visibility ='visible';
    else play_opt.style.visibility = 'hidden'
}

function search(){
    let search_list = document.getElementById('search-list');
    let main_content_1 = document.getElementById('main-content-1');
    let main_content = document.getElementById('main-content');
    search_list.style.display = "block";
    main_content_1.style.display = 'block';
    main_content.style.display = 'none';
}

function home(){
    let search_list = document.getElementById('search-list');
    let main_content_1 = document.getElementById('main-content-1');
    let main_content = document.getElementById('main-content');
    search_list.style.visibility = "hidden";
    main_content_1.style.display = 'none';
    main_content.style.display = 'block';
}

function sign(){
    let cont_all = document.getElementById('cont');
    let sign_in = document.getElementById('sign-in');
    let login = document.getElementById('log-in');

    cont_all.style.display = 'none';
    login.style.display = 'none';
    sign_in.style.display = 'block';
} 

function back(){
    let cont_all = document.getElementById('cont');
    let sign_in = document.getElementById('sign-in');
    let login = document.getElementById('log-in');


    cont_all.style.display = 'block';
    sign_in.style.display = 'none';
    login.style.display = 'none';
}

function login(){
    let cont_all = document.getElementById('cont');
    let login = document.getElementById('log-in');
    let sign_in = document.getElementById('sign-in');

    cont_all.style.display = 'none';
    login.style.display = 'block';
    sign_in.style.display = 'none';
} 