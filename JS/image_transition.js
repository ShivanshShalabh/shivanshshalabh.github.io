let rolesImgElems = document.querySelectorAll('.roles-blob img');
let rolesImages = ['web_developer.svg', 'researcher.svg', 'technopreneur.svg', 'competetive_coder.svg'];
let roleImageCounter = 1;
let roleImgSrcPath = rolesImgElems[0].getAttribute('data-img-src');
const changeRoleImage = () => {
    roleImageCounter++;
    if (roleImageCounter === rolesImages.length) roleImageCounter = 0;
    let roleFirstImageHasClass = rolesImgElems[0].classList.contains('active-role-img');
    rolesImgElems[roleFirstImageHasClass ? 1 : 0].classList.add('active-role-img');
    rolesImgElems[roleFirstImageHasClass ? 0 : 1].classList.remove('active-role-img');
    rolesImgElems[roleFirstImageHasClass ? 0 : 1].src = roleImgSrcPath + rolesImages[roleImageCounter];
};