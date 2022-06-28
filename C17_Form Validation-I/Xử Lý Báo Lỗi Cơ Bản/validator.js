function Validator(options)
{   
    function validate(inputElement, rule)
    {   
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        var errorMessage = rule.test(inputElement.value);
        if (errorMessage != undefined) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        }
        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }

    var formElement = document.querySelector(options.form); 

    if(formElement)
    {
        options.rules.forEach( rule => 
            {
                var inputElement = formElement.querySelector(rule.selector);
                var errorElement = inputElement.parentElement.querySelector('.form-message');

                // Xử lý trường hợp blur ra khỏi input
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                }

                // xử lý mỗi khi người dùng nhập vào input

                inputElement.oninput = function(){
                    console.log('Hello')
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        )
    }
}

Validator.isRequired = function(selector)
{
    return {
        selector: selector,
        test: function(value)
        {   
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    };
}

Validator.isEmail = function(selector)
{
    return {
        selector: selector,
        test: function(value)
        {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)? undefined : 'Vui lòng nhập Email'
        }
    };
}

Validator.minLength = function(selector, min)
{
    return {
        selector: selector,
        test: function(value)
        {   
            return value.length >= min ? undefined : 'Mật khẩu tối thiểu ${min} ký tự';
        }
    };
}