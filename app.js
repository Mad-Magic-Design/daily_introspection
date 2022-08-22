let blockedColor = 'white'
let openColor ='white'
let mandalaImg='dash'

const setGradient = () =>{
    $('#mantra-container').css("background-image", `linear-gradient(${blockedColor},${openColor})`)
}

const setImg = () =>{
    $('#mandala-img').attr('src',`imgs/${mandalaImg}.png`)
}


if (localStorage.getItem('Introspection')){
    const loadObject = JSON.parse(localStorage.getItem('Introspection'))
    blockedColor = loadObject.blockedColor
    openColor = loadObject.openColor
    mandalaImg = loadObject.mandalaImg
    setGradient()
    setImg()
    $('#gratefulText').text(loadObject.gratefulText)
    $('#improvementText').text(loadObject.improvementText)
    $('#load-wrapper').css('display', 'flex')
}

function displayMantra(){
    $('#questions').hide()
    $('#header').hide()

}

$('#questions input').on('change', function() {
    if ($('input[name=blocked]:checked').val()) blockedColor=$('input[name=blocked]:checked').val()
    if ($('input[name=opened]:checked').val()) openColor=$('input[name=opened]:checked').val()
    if ($('input[name=mandala]:checked').val()){ 
        mandalaImg=$('input[name=mandala]:checked').val();
        setImg();
    }
    setGradient();
});



$(function() {
    $('#questions').on('submit', function(e) { 
        e.preventDefault();  
        console.log(e.target.gratefulInput.value)
       $('#gratefulText').text(e.target.gratefulInput.value)
        $('#improvementText').text(e.target.improvementInput.value)
        $('#questions').hide()
        $('#header').hide()

        const saveObject = {
            'blockedColor':blockedColor,
            'openColor': openColor,
            'mandalaImg':mandalaImg,
            'gratefulText': e.target.gratefulInput.value,
            'improvementText': e.target.improvementInput.value,
        }

        localStorage.setItem('Introspection', JSON.stringify(saveObject))

    });
});