const kursor = document.querySelector('.kursor');
const doira = document.querySelector('.doira')
window.addEventListener('mousemove', (e)=> {
    const x = e.clientX
    const y = e.clientY
    kursor.style.top = `${y}px`;
    kursor.style.left = `${x}px`;
    
})
window.addEventListener('mousedown', (e) => {
     const x = e.clientX;
     const y = e.clientY;
     doira.style.top = `${y}px`;
     doira.style.left = `${x}px`; 
})