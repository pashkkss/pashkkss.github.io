class BrandMatrix extends Matrix{
    constructor($birthday, selector='#', num=0) {
        super($birthday, selector);
        this.mainSelectorMatrix = '.brand_matrix';
        this.mainSelectorDecr = '.brand_decryption';
    }
    set_decryption(response, data1){
        jQuery(this.mainSelectorDecr + ' .decryption__btn-bt.btn').addClass(response['lock'])
        jQuery(this.mainSelectorMatrix + ' .year_people').text(response['agetest'])
        console.log(jQuery(this.mainSelectorMatrix + ' .year_people'))

        jQuery(this.mainSelectorDecr + ' .f').text(response['f'])
        jQuery(this.mainSelectorDecr + ' .y').text(response['y'])
        jQuery(this.mainSelectorDecr + ' .f_y').text(response['fy'])
        jQuery(this.mainSelectorDecr + ' .g').text(response['g'])
        jQuery(this.mainSelectorDecr + ' .k').text(response['k'])
        jQuery(this.mainSelectorDecr + ' .g_k').text(response['gk'])
        jQuery(this.mainSelectorDecr + ' .ee1').text(response['e1'])
        jQuery(this.mainSelectorDecr + ' .decr-item').remove()
        jQuery(this.mainSelectorDecr + ' .in-dev').remove()
        jQuery(this.mainSelectorDecr + ' .decryption__heading').after(response['html'])


        jQuery(this.mainSelectorMatrix + ' .download__pdf a').attr('href', '/pdf/' + jQuery('#form_brand .form__item #name_brand.form__input').val().trim() + '_' + data1.birthday + '.pdf');
        jQuery(this.mainSelectorDecr + ' .download__pdf_full a').attr('href', '/pdf/' + jQuery('#form_brand .form__item #name_brand.form__input').val().trim() + '_' + data1.birthday + '_full.pdf');
        let decryption = document.querySelector(this.mainSelectorDecr);

        decryption.classList.add("show");
        jQuery(this.mainSelectorDecr).show();
    }

    show_matrix(){
        let healthCard = document.querySelector(this.mainSelectorMatrix + ' .calculation__hidden');

        healthCard.classList.add("show");
        jQuery(this.mainSelectorMatrix + ' .calculation__hidden').show();

        const elPosition = healthCard.getBoundingClientRect().top;
        window.scrollBy({
            top: elPosition,
            behavior: 'smooth'
        });
    }
}