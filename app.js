
    let count = 0;
    const buttons = document.querySelectorAll('.containerBtn');

    buttons.forEach((el,index)=>{
        el.addEventListener('click', ()=>{
           
            if(el.classList.contains('prevBtn')){
                count--

            }else if(el.classList.contains('nextBtn')){
                count++

            }

            const counter = document.getElementById('counter');
            counter.textContent = count;

            if(count< 0){
                counter.style.color = 'red'
            }else if(count > 0){
                counter.style.color = 'green'
            }else{
                counter.style.color = '#333333'
            }

            
        })
    })
