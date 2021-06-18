

const imageSlider = document.querySelector('#imageSlider');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottomBtn01.addEventListener('click', moveA);
bottomBtn02.addEventListener('click', moveB);
bottomBtn03.addEventListener('click', moveC);

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

/**
 * 첫 번째 이미지로 이동합니다.
 */
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex =1;
}

/**
 * 두 번째 이미지로 이동합니다.
 */
function moveB()
{
    imageSlider.style.transform = 'translate(-1058px)';
    nowIndex =2;
}

/**
 * 세 번째 이미지로 이동합니다.
 */
function moveC()
{
    imageSlider.style.transform = 'translate(-2120px)';
    nowIndex =3;
}

function moveLeft()
{
    if (nowIndex = 1)
    {
        nowIndex = 1;

    }
    else
    {
        nowIndex --;
    }

    moverSlider(nowIndex);
}

function moveRight()
{
    if (nowIndex = 2)
    {
        nowIndex = 2;

    }
    else
    {
        nowIndex ++;
    }

    moverSlider(nowIndex);
}

function moverSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case3:
            moveC();
        break;
    }
}

