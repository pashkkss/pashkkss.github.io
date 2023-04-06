class CompabilityMatrix extends Matrix{

    constructor($itog1, $itog2) {
        super('', '.compability_matrix .', 2);
        this.itog1 = $itog1
        this.itog2 = $itog2
    }

    itogs_sum(){
        this.itog = {
                'a':  this.get_22(this.itog1['a']+this.itog2['a']),
                'b':  this.get_22(this.itog1['b']+this.itog2['b']),
                'c':  this.get_22(this.itog1['c']+this.itog2['c']),
                'd':  this.get_22(this.itog1['d']+this.itog2['d']),
                'e':  this.get_22(this.itog1['e']+this.itog2['e']),
                'f':  this.get_22(this.itog1['f']+this.itog2['f']),
                'g':  this.get_22(this.itog1['g']+this.itog2['g']),
                'k':  this.get_22(this.itog1['k']+this.itog2['k']),
                'y':  this.get_22(this.itog1['y']+this.itog2['y']),
            }

            this.matrix()
    }

    set_decryption(response, data1) {
        let decription = jQuery('.compability_decryption ');
        decription.show();
        decription.find('.decryption__btn-bt.btn').addClass(response['lock'])
        decription.find('.decr-item').remove()
        decription.find('.decryption__heading').after(response['html'])


        jQuery('.compability_matrix .download__pdf a').attr('href', '/pdf/' + data1.partner1.name + '_' + data1.partner1.birthday + '_' + data1.partner2.name + '_' + data1.partner2.birthday + '__compability.pdf');
        jQuery('.compability_decryption .download__pdf_full a').attr('href', '/pdf/' + data1.partner1.name + '_' + data1.partner1.birthday + '_' + data1.partner2.name + '_' + data1.partner2.birthday + '__compability_full.pdf');
        let decryption = document.querySelector('.compability_decryption');

        decryption.classList.add("show");
    }

    show_matrix() {
        let healthCard = document.querySelector('.compability_matrix .calculation__hidden');
        jQuery('.compability_matrix svg').show();

        healthCard.classList.add("show");


        const elPosition = healthCard.getBoundingClientRect().top;
        window.scrollBy({
            top: elPosition,
            behavior: 'smooth'
        });
    }

}