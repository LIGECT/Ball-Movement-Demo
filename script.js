const ball = document.getElementById('ball')
const field = document.getElementById('field')

field.addEventListener('click', function (event) {

    const fieldRect = field.getBoundingClientRect();

    const clickX = event.clientX - fieldRect.left - field.clientLeft;
    const clickY = event.clientY - fieldRect.top - field.clientTop;

    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;

    const newX = clickX - (ballWidth / 2)
    const newY = clickY - (ballHeight / 2)

    const maxX = field.offsetWidth - ballWidth - field.clientLeft
    const maxY = field.offsetHeight - ballHeight - field.clientTop

    let limitedX = Math.max(0, Math.min(newX, maxX))
    let limitedY = Math.max(0, Math.min(newY, maxY))

     
    ball.style.left = limitedX + 'px'
    ball.style.top = limitedY + 'px'
   
    
})

