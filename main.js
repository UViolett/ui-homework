//3) Создать карусель популярных товаров в шапке.
//4) * C помощью jQuery UI добавить возможность перемещать товар прямо в корзину мышью.
//jquery
(function () {
    'use strict';
    
    $('#button').on('click', function checkForm() {
        
        var userName = $('#name'),
            userEmail = $('#email'),
            userBirthday = $('#birthday'),
            userNameValue = userName.val(),
            userBirthdayValue = userBirthday.val(),
            userEmailValue = userEmail.val(),
            //regExp
            regExpName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/i,
            regExpBirthday = /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d/i,
            regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            //get value from form
            regExpNameVal = regExpName.test(userNameValue),
            regExpBirthdayVal = regExpBirthday.test(userBirthdayValue),
            regExpEmailVal = regExpEmail.test(userEmailValue);
        const isFormCorrect = regExpNameVal && regExpBirthdayVal && regExpEmailVal;
        const resultValidate = [
            {
                field: userName,
                result: regExpNameVal
            },
            {
                field: userEmail,
                result: regExpEmailVal
            },
            {
                field: userBirthday,
                result: regExpBirthdayVal
            }
    ];

        function highlight(result) {
            result.field.toggle( "bounce", { times: 3 }); // Не знаю что поставить вместо Toggle, чтобы поля не исчезали
        }


        if (isFormCorrect) {
            alert('данные отправлены');
        } else {
            resultValidate.forEach(field => {
                const isCorrectField = field.result;

                if (!isCorrectField) {
                    highlight(field);
                }
            })
        }
    });

})();
 