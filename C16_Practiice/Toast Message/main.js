const toast = function({
    title = '',
    message = '',
    type = '',
    duration = 3000
})
{   
    const icons = {
        success: 'fa-solid fa-circle-check',
        error: 'fa-solid fa-circle-exclamation'
    }
    const main = document.getElementById('toast')
    if(main)
    {   
        const toast = document.createElement('div')

        const idChild = setTimeout(function(){
            main.removeChild(toast);}, duration+1000);

        toast.onclick = function(e)
        {   
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(idChild);
            }
        }

        toast.classList.add('toast',`toast--${type}`)
        const delay = (duration/1000).toFixed(2);
        toast.style.animation = `comeIn ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                    <i class="${icons[type]}"></i>
                </div>
        
                <div class="toast__body">
                    <h3 class="toast__title">
                        ${title}
                    </h3>
                    <p class="toast__msg">
                        ${message}
                    </p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `;
        main.appendChild(toast);
    }
}

// toast({title: 'success',message:'You have already signed up your account !',type:'success', duration: 3000})

const btnSuccess = document.querySelector('.btn-success')
const btnError = document.querySelector('.btn-error')

btnSuccess.onclick = function()
{
toast({title: 'Success',
       message:'You have already signed up your account !',
       type:'success', 
       duration: 3000
      })
} 


btnError.onclick = function()
{
toast({title: 'Error',
       message:'Having a mistake, let\'s contact to admin',
       type:'error', 
       duration: 3000
      })
} 