console.log('DOM');


const newestComment = document.querySelector('.comments__item.comments__item--newest');

const elWithDataInfo = newestComment.querySelectorAll('[data-info]');

console.log(elWithDataInfo.length);

elWithDataInfo.forEach(function(item){console.log(item.dataset.info)});

