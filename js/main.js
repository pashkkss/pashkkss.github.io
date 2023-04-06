jQuery(document).ready(function ($) {

    let url = window.location.href
    url = url.replace('', '')
    console.log(url[0])
    if(url != '' && url[0] == '#' && url.indexOf('matrix') !== false)
    {
        $(url).show();
        let formPos = $(url)[0].getBoundingClientRect().top;
        window.scrollBy({
            top: formPos,
            behavior: 'smooth'
        });
    }

    $('.male-input').on('click', function(){
        if($(this).find('input').val() == 0) {
            // $(this).find('input.male').attr('checked', true);
            // $(this).addClass('selected');
        }
        else{
            $(this).append('<span class="alert">??7</span>')
            $(this).parents('form').css('overflow', 'unset');
            setTimeout(function (){
                $('.male-inputs').find('.alert').remove();
                $('.male-inputs').parents('form').css('overflow', 'hidden')
            }, 6000)
        }
    })

    $('.menu__link').each(function () {
        // console.log($(this));
        // if(!($(this).attr('href').indexOf('#') !== -1))
        // {
        //  $(this).on('mousedown', function (){
        //      window.location.href = $(this).attr('href');
        //  });
        // }
        // else {
        $(this).on('mousedown', function () {
            window.location.href = $(this).attr('href');
        });
        // }
    });

    function downloadAllCompability() {
        let downloadBtn = document.querySelector(".compability_decryption .decryption__btn");
        let calcBtn = document.querySelector(".compability_matrix .calculation__btn");
        let healthCard = document.querySelector(".compability_matrix .health-card");

        function removeLink() {
            if (document.getElementById("print")) document.getElementById("print").remove();
        }

        function createLink(string) {
            startload();
            removeLink();
            let link = document.createElement('link');
            link.id = 'print';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.media = 'print';
            link.href = string;
            document.head.appendChild(link);

            const name = document.querySelector("#name").value;
            const date = document.querySelector("#date").value;
            // healthCard.innerHTML = '<h1>Р’Р°С€Р° РјР°С‚СЂРёС†Р° РґСѓС€Рё: ' + name + ' ' + date + '</h1>' + healthCard.innerHTML;
        }

        function createWindow() {
            stopload();
            window.print();
            // healthCard.removeChild(healthCard.firstChild);
        }

        if (calcBtn) {
            calcBtn.addEventListener('click', function () {
                if (!calcBtn.classList.contains('btn--lock')) {
                    createLink('wp-content/themes/matrix_db7/css/print.compability.css?ver=' + Math.floor(Math.random() * 100));
                    //createLink('css/print.min.css');
                    setTimeout(createWindow, 1500);
                }

            });
        }

        if (calcBtn) {
            downloadBtn.addEventListener('click', function () {
                if (!downloadBtn.classList.contains('btn--lock')) {
                    createLink('wp-content/themes/matrix_db7/css/printall.compability.css?ver=' + Math.floor(Math.random() * 1000));
                    //createLink('css/printall.min.css');
                    setTimeout(createWindow, 1500);
                }

            });
        }
    }
    downloadAllCompability();
    function downloadAllBrand() {
        let downloadBtn = document.querySelector(".brand_decryption .decryption__btn");
        let calcBtn = document.querySelector(".brand_matrix .calculation__btn");
        let healthCard = document.querySelector(".brand_matrix .health-card");

        function removeLink() {
            if (document.getElementById("print")) document.getElementById("print").remove();
        }

        function createLink(string) {
            startload();
            removeLink();
            let link = document.createElement('link');
            link.id = 'print';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.media = 'print';
            link.href = string;
            document.head.appendChild(link);

            const name = document.querySelector("#name").value;
            const date = document.querySelector("#date").value;
            // healthCard.innerHTML = '<h1>Р’Р°С€Р° РјР°С‚СЂРёС†Р° РґСѓС€Рё: ' + name + ' ' + date + '</h1>' + healthCard.innerHTML;
        }

        function createWindow() {
            stopload();
            window.print();
            // healthCard.removeChild(healthCard.firstChild);
        }

        if (calcBtn) {
            calcBtn.addEventListener('click', function () {
                if (!calcBtn.classList.contains('btn--lock')) {
                    createLink('wp-content/themes/matrix_db7/css/print.brand.css?ver=' + Math.floor(Math.random() * 100));
                    //createLink('css/print.min.css');
                    setTimeout(createWindow, 1500);
                }

            });
        }

        if (calcBtn) {
            downloadBtn.addEventListener('click', function () {
                if (!downloadBtn.classList.contains('btn--lock')) {
                    createLink('wp-content/themes/matrix_db7/css/printall.brand.css?ver=' + Math.floor(Math.random() * 1000));
                    //createLink('css/printall.min.css');
                    setTimeout(createWindow, 1500);
                }

            });
        }
    }
    downloadAllBrand();

    /*$('.slider img').on('click', function(){
        console.log($(this).parents('.column1'));
        console.log($(this).parents('.column1').find('img.slider-img'));
        $('.overlay img').attr('src', $($(this).parents('.column1')[0]).find('img.slider-img').attr('src'));
        $('.overlay').show();
    });
    $('.overlay, .overlay .flex').on('click', function(){
        // $(this).hide();
        $('.overlay').css('display', 'none');
    });
    $('.slider').on('click', '.go-left, .go-right', function(){
        let srcs = {
            0: '/wp-content/uploads/2022/09/photo_2022-09-07_23-08-20.jpg',
            1: '/wp-content/uploads/2022/09/photo_2022-09-07_23-08-35.jpg',
            2: '/wp-content/uploads/2022/09/img_6711.jpg'
        }
        // let visible = $('.slider .first-img').data('img-id');
        let visible = $('.slider .quarter-width:visible').data('img-id');
        // console.log(visible);
        if($(this).hasClass('go-left')){
            visible -= 1;
            if(visible < 0)
                visible = 2;
        }
        else if($(this).hasClass('go-right')){
            visible += 1;
            if(visible > 2)
                visible = 0;
        }
        $('.slider .quarter-width:visible').data('img-id', visible);
        $('.slider .quarter-width:visible img.slider-img').attr('src', srcs[visible]);
        // $('.slider .quarter-width:visible  .mini-loop img').attr('src', );
    });*/
    // age changer
    // const windowInnerWidth = document.documentElement.clientWidth;
    // const windowInnerWidth = window.innerWidth;

    $('.decryption').on('click', '.age-changer .column1', function () {
        let windowInnerWidth = window.innerWidth;
        // alert(windowInnerWidth);
        // alert(window.innerWidth);
        if ($(this).hasClass('selected'))
            return;
        let age_text = '';
        // if(!$(this).hasClass('go-left') && !$(this).hasClass('go-right')) {
        age_text = $(this).data('age-id');
        // }
        // else {
        //  age_text = $('.age-changer .column1:last').text();
        // }
        let age = age_text.replace(/ /gi, '');
        age = age.split('-');
        age = Math.floor(parseFloat(age[1]) - 0.5);
        // if($(this).hasClass('go-left') && !$(this).hasClass('go-right')) {
        age_text = age_text.replace(/\./gi, '_');
        age_text = age_text.replace(/ /gi, '');

        let age_id = $('#year' + age_text).text();

        let age_data = {
            action: 'get_age_data',
            age: age,
            default_age: $(this).data('age-id'),
            age_id: age_id,
            window_width: windowInnerWidth,
        };
        // }
        // else{
        //  let age_data = {
        //      action: 'get_age_data',
        //      age: age,
        //      default_age: $(this).text(),
        //      age_id: age_id,
        //  };
        // }

        jQuery.post(myajax.url, age_data, function (response) {
            // console.log(response);
            $('.age-changer').parents('.decr-item').html(response);
        });
    });

    $('.hero__btn').on('click', function () {
        $('.compability_matrix, .compability_decryption').hide();
        $('.brand_matrix, .brand_decryption').hide();
        $('.calculation, .description').hide();

        if ($(this).hasClass('hero__btn_compability')) {
            $('.compability_matrix').show();
            // $('.calculation, .description').hide();
            $('.decryption').removeClass('show');
            if ($('.compability_matrix .calculation__hidden').hasClass('show'))
                $('.compability_decryption').addClass('show');
        }
        else if($(this).hasClass('hero__btn_brand')){
            $('.decryption, .compability_decryption').removeClass('show');
            $('.brand_matrix').show();
            if ($('.brand_matrix .calculation__hidden').hasClass('show'))
            {
                $('.brand_decryption').show();
            }
        }
        else {
            // $('.compability_matrix').hide();
            // $('.compability_decryption').hide();
            $('.calculation').show();
            if ($('.calculation .calculation__hidden').hasClass('show'))
                $('.decryption').addClass('show');
        }
        let formPos = $($(this).attr('href'))[0].getBoundingClientRect().top-100;
        window.scrollBy({
            top: formPos,
            behavior: 'smooth'
        });
    });

    $('.login-form__btn.login-form__btn--login').on('click', function () {
        $('.login-form__btn.login-form__btn--register').removeClass('active')
        $(this).addClass('active')
        $('.register.login-form__inputs').css('display', 'none')
        $('.login.login-form__inputs').css('display', 'block')
    })
    $('.login-form__btn.login-form__btn--register').on('click', function () {
        $('.login-form__btn.login-form__btn--login').removeClass('active')
        $(this).addClass('active')
        $('.register.login-form__inputs').css('display', 'block')
        $('.login.login-form__inputs').css('display', 'none')
    })

    const load = document.querySelector(".loader");

    let alert = "<span class='alert'>Р”РѕСЃС‚СѓРїРЅРѕ С‚РѕР»СЊРєРѕ РїСЂРё РїРѕРєСѓРїРєРµ РїРѕР»РЅРѕРіРѕ РґРѕСЃС‚СѓРїР°</span>";

    function startload() {
        load.classList.add("active");
    }

    function stopload() {
        load.classList.remove("active");
    }

    function removeError() {
        var errorsMsg = document.querySelectorAll('.just-validate-error-label');
        errorsMsg.forEach((element) => {
            element.parentNode.removeChild(element)
        });
    }

    function showAlert(el) {
        el.innerHTML += alert;
        console.log(el);
        setTimeout(function () {
            let childAllert = el.querySelector(".alert");
            if (childAllert) {
                el.removeChild(childAllert);
            }
        }, 2000)
    }

    function removeAlerts() {
        const elem = document.querySelectorAll(".alert");
        for (let i = 0; i <= elem.length; i++) {
            if (elem[i]) elem[i].remove();
        }
    }



    $('.calculation__form .form__item .form__btn').on('click', function (e) {
        let windowInnerWidth = window.innerWidth;
        let success = true;
        let compability = $(this).hasClass('form__btn__countCompability');
        let brand = $(this).hasClass('form__btn__countBrand');
        let form_name = '';
        let fields_names = {}
        if (compability) {
            form_name = '#form1';
            fields_names.name = '#name1';
            fields_names.date = '#date1';
        }
        else if(brand){
            form_name = '#form_brand';
            fields_names.name = '#name_brand';
            fields_names.date = '#date_brand';
        }
        else {
            form_name = '#form';
            fields_names.name = '#name';
            fields_names.date = '#date';
        }

        const validation = new window.JustValidate(form_name);

        validation
            .addField(fields_names.name, [{
                rule: 'required',
                errorMessage: 'Заполните поле Имя при рождении',
            }])
            .addField(fields_names.date, [{
                validator: (value) => {
                    if (!(/^\d\d\.\d\d\.\d\d\d\d$/).test(value)) {
                        removeError();
                        return value[value.length - 1] === '';
                    }
                    removeError();
                    return true;
                },
                errorMessage: 'Неверный формат даты. (ДД.ММ.ГГГГ)',
            },
            {
                validator: (value) => {
                    var d = value.split('.');
                    if (!parseInt(d[1], 10) || parseInt(d[1], 10) > 12) {
                        removeError();
                        return value[value.length - 1] === '';
                    }
                    removeError();
                    return true;
                },
                errorMessage: 'Месяц должен иметь значение от 1 до 12',
            },
            {
                validator: (value) => {
                    var d = value.split('.');
                    if (!parseInt(d[0], 10) || parseInt(d[0], 10) > 31) {
                        removeError();
                        return value[value.length - 1] === '';
                    }
                    removeError();
                    return true;
                },
                errorMessage: '"День должен иметь значение от 1 до 31',
            },
            ])
            .onFail((event) => {
                success = false;
                //console.log('onFail');
            });
        if (compability) {
            validation
                .addField('#name2', [{
                    rule: 'required',
                    errorMessage: 'Введите Имя при рождении в поле',
                }])
                .addField('#date2', [{
                    validator: (value) => {
                        if (!(/^\d\d\.\d\d\.\d\d\d\d$/).test(value)) {
                            removeError();
                            return value[value.length - 1] === '';
                        }
                        removeError();
                        return true;
                    },
                    errorMessage: 'Неправильный формат даты',
                },
                {
                    validator: (value) => {
                        var d = value.split('.');
                        if (!parseInt(d[1], 10) || parseInt(d[1], 10) > 12) {
                            removeError();
                            return value[value.length - 1] === '';
                        }
                        removeError();
                        return true;
                    },
                    errorMessage: 'Месяц должен иметь значение от 1 до 12',
                },
                {
                    validator: (value) => {
                        var d = value.split('.');
                        if (!parseInt(d[0], 10) || parseInt(d[0], 10) > 31) {
                            removeError();
                            return value[value.length - 1] === '';
                        }
                        removeError();
                        return true;
                    },
                    errorMessage: 'День должен иметь значение от 1 до 31',
                },
                ]);
        }
        // if(brand){
        //  validation
        //      .addField('#male0', [{
        //          rule: 'required',
        //          errorMessage: 'Р—Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ РџРѕР»',
        //      }]).addField('#male1', [{
        //          rule: 'required',
        //          errorMessage: 'Р—Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ РџРѕР»',
        //      }]);
        // }

        validation
            .onSuccess((event) => {
                //console.log(validation);
                event.preventDefault();
                if (success) {
                    //console.log('onSuccess');
                    success = false;
                    // startload();
                    function get_data_ready(date, name, id = false) {
                        name = name.trim()
                        // let data__birthday = $('.form__input.date-mask').val()
                        let data__birthday = date;
                        if (id != false) {
                            $('.data__hb:nth-child(' + id + ')').text(data__birthday)
                        }
                        else
                            $('.data__hb').text(data__birthday)
                        // $('.name_form').text($('#form .form__item #name.form__input').val())
                        $('.name_form').text(name)

                        let now = new Date(); //РўРµРєСѓС‰СЏ РґР°С‚Р°
                        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //РўРµРєСѓС‰СЏ РґР°С‚Р° Р±РµР· РІСЂРµРјРµРЅРё
                        let dob = new Date(data__birthday.slice(6, 10), data__birthday.slice(3, 5), data__birthday.slice(0, 2)); //Р”Р°С‚Р° СЂРѕР¶РґРµРЅРёСЏ
                        let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //Р”Р  РІ С‚РµРєСѓС‰РµРј РіРѕРґСѓ
                        let age; //Р’РѕР·СЂР°СЃС‚

                        //Р’РѕР·СЂР°СЃС‚ = С‚РµРєСѓС‰РёР№ РіРѕРґ - РіРѕРґ СЂРѕР¶РґРµРЅРёСЏ
                        age = today.getFullYear() - dob.getFullYear();
                        //Р•СЃР»Рё Р”Р  РІ СЌС‚РѕРј РіРѕРґСѓ РµС‰С‘ РїСЂРµРґСЃС‚РѕРёС‚, С‚Рѕ РІС‹С‡РёС‚Р°РµРј РёР· age РѕРґРёРЅ РіРѕРґ
                        if (today < dobnow) {
                            age = age - 1;
                        }

                        return {
                            birthday: data__birthday,
                            name: name,
                            age: age,
                        }
                    }

                    let data1 = {
                        action: "get_sm_description",
                        compability: compability,
                        window_width: windowInnerWidth,
                    }
                    let matrix;
                    if (compability) {
                        data1['action'] = 'get_cm_description';
                        let partner1 = get_data_ready($('#date1').val(), $('#name1').val());
                        let partner2 = get_data_ready($('#date2').val(), $('#name2').val(), 1);
                        data1.partner1 = partner1;
                        data1.partner2 = partner2;
                        $('.name1, #pers_name').text(partner1.name);
                        $('.name2, #pers_name1').text(partner2.name);
                        $('#pers_dR').text(partner1.birthday);
                        $('#pers_dR1').text(partner2.birthday);
                        // console.log(data1);
                        let resp1 = new Matrix(partner1.birthday, '.compability_matrix .', 0)
                        let resp2 = new Matrix(partner2.birthday, '.compability_matrix .', 1)
                        resp1.main_matrix_values()
                        resp2.main_matrix_values()
                        resp1.fill_matrix()
                        resp2.fill_matrix()
                        matrix = new CompabilityMatrix(resp1.itog, resp2.itog)
                        matrix.itogs_sum()
                        matrix.fill_matrix()
                    }
                    else if(brand){
                        data1['action'] = 'get_bm_description';
                        let user = get_data_ready($('#date_brand').val(), $('#name_brand').val());
                        data1.birthday = user.birthday;
                        data1.age = user.age;
                        data1.name = user.name;
                        data1.male = $('input.male:checked').val();
                        matrix = new BrandMatrix(data1.birthday, '.brand_matrix .');
                        matrix.main_matrix_values();
                        matrix.fill_matrix();
                    }
                    else {
                        let user = get_data_ready($('#date').val(), $('#name').val());
                        data1.birthday = user.birthday;
                        data1.age = user.age;
                        data1.name = user.name;
                        matrix = new Matrix(data1.birthday);
                        matrix.main_matrix_values();
                        matrix.fill_matrix();
                        matrix.fill_table();
                    }
                    data1.itog = matrix.itog;
                    matrix.show_matrix();

                    // 'ajaxurl' РЅРµ РѕРїСЂРµРґРµР»РµРЅР° РІРѕ С„СЂРѕРЅС‚Рµ, РїРѕСЌС‚РѕРјСѓ РјС‹ РґРѕР±Р°РІРёР»Рё РµС‘ Р°РЅР°Р»РѕРі СЃ РїРѕРјРѕС‰СЊСЋ wp_localize_script()
                    jQuery.post(myajax.url, data1, function (response) {
                        console.log(response);
                        response = $.parseJSON(response);

                        matrix.set_decryption(response, data1);

                    });
                }
            });


        function showMatrix(compability = false) {

            // console.log(compability);
            let healthCard = document.querySelector('.calculation__hidden');
            let decryption = document.querySelector('.decryption');
            if (!compability) {
                // decryption.classList.add("show");
                // healthCard.classList.add("show");
            }
            else {
                healthCard = document.querySelector('.compability_matrix .calculation__hidden');
                decryption = document.querySelector('.compability_decryption');
                $('.compability_matrix svg').show();
                // document.querySelector('.calculation__hidden').classList.add('show');
                // $('.compability_matrix .calculation__hidden').show();
            }
            decryption.classList.add("show");
            healthCard.classList.add("show");


            const elPosition = healthCard.getBoundingClientRect().top;
            window.scrollBy({
                top: elPosition,
                behavior: 'smooth'
            });
        }
    })
    $('.decryption, .compability_decryption, .brand_decryption').on('click', '.decr-item__title', function(){
        // if ($(this)) {
        //  let decrItemsTitle = $(this).find('.decr-item__title');

            if ($(this).parent().hasClass('decr-item--lock')) {
                    removeAlerts();
                    showAlert($(this).parent()[0]);
                }


            // }
            else {
                    if ($(this).parent().hasClass('show')) {
                        removeAlerts();
                        $(this).parent().removeClass('show');
                    } else {
                        removeAlerts();
                        $(this).parent().addClass('show');
                    }
                };
    });

});

jQuery(function($) {
    $('.features-slider-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow: $('.features-prew'),
        nextArrow: $('.features-next'),
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.sertificate-img').on('click', function(){
       var imgReplace = $(this).find('img').attr('src');
       $('.zoom-replace-img').attr('src', imgReplace);
       $('.zoom-sertificate').addClass('show-zoom');
    });
    $('.close-zoom').on('click', function(){
        $('.zoom-sertificate').removeClass('show-zoom');
    });
    $(document).mouseup( function(e){ // СЃРѕР±С‹С‚РёРµ РєР»РёРєР° РїРѕ РІРµР±-РґРѕРєСѓРјРµРЅС‚Сѓ
    var div = $( ".zoom-sertificate-wrap" ); // С‚СѓС‚ СѓРєР°Р·С‹РІР°РµРј ID СЌР»РµРјРµРЅС‚Р°
    if ( !div.is(e.target) // РµСЃР»Рё РєР»РёРє Р±С‹Р» РЅРµ РїРѕ РЅР°С€РµРјСѓ Р±Р»РѕРєСѓ
        && div.has(e.target).length === 0 ) { // Рё РЅРµ РїРѕ РµРіРѕ РґРѕС‡РµСЂРЅРёРј СЌР»РµРјРµРЅС‚Р°Рј
         $('.zoom-sertificate').removeClass('show-zoom');
    }
});

if ($(window).width() < 640) {
$('.sertificate-slider').slick({
    dots: false,
    slidesToShow: 1
});
} else {
$("#items.slick-initialized").slick("unslick");
}

});