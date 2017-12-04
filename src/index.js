import "babel-polyfill";
import { header } from './components/header/header';
import { profilePic } from './components/profilePic/profilePic';
import { styles } from './styles.scss';
import { nav } from './components/header/nav';
import { footer } from './components/footer/footer';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import { LoadToDo } from "./components/ToDo/loadToDo";

LoadToDo();

document.getElementById('nav').innerHTML = nav;

document.getElementById('ProfilePicture').innerHTML = profilePic;

document.getElementById('Header').innerHTML = header;

document.getElementById('footer').innerHTML = footer;

var btnAddToDo = document.getElementById('btnAddToDo');

btnAddToDo.onclick = e => import(/* webpackChunkName: "addToDo" */ './components/ToDo/addToDo')
    .then(module => {
        var addToDo = module.default;
        addToDo();
    });

document.getElementById('btnOpenAddHelp').addEventListener("click", function () { $('.tap-target').tapTarget('open'); }, false);

$(".button-collapse").sideNav();

$('.modal').modal();