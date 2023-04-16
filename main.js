'use strict';
const post = document.querySelector('#post');
const heart = document.querySelector('.heart');
const fillHeart = document.querySelector('.fill-heart');

post.addEventListener('dblclick', () => {
    heart.classList.toggle('inactive');
    fillHeart.classList.toggle('inactive');
});
heart.addEventListener('click', () => {
    heart.classList.add('inactive');
    fillHeart.classList.remove('inactive');
});
fillHeart.addEventListener('click', () => {
    fillHeart.classList.add('inactive');
    heart.classList.remove('inactive');
});

const bookmark = document.querySelector('.bookmark');
const fillBookmark = document.querySelector('.fill-bookmark');

bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('inactive');
    fillBookmark.classList.toggle('inactive');
});
fillBookmark.addEventListener('click', () => {
    fillBookmark.classList.toggle('inactive');
    bookmark.classList.toggle('inactive');
});
