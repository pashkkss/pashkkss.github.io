class Matrix{
    constructor($birthday, selector='#', num=0) {
        this.$birthday = $birthday;
        this.selector = selector;
        this.selectorNumber = num;
    }

    main_matrix_values(){
        let $date = this.$birthday.split('.');
        let $month = $date[1];
        let $year = $date[2]
        $date = $date[0];

        // $real_birthday = getAge($year, $month, $date);
        // $born = new DateTime(date($year, $month, $date));
        // $born = new DateTime($birthday);
        // $age = round($born->diff(new DateTime, true)->format('%a') / 365.25, 3);

        $date = this.get_22($date);
        $year = this.get_22($year);
        $year = this.get_22($year)
        this.itog = {};

        this.itog['a'] = Number($date);
        this.itog['b'] = Number($month);
        this.itog['c'] = Number($year);
        this.itog['d'] = this.itog['a'] + this.itog['b'] + this.itog['c'];
        this.itog['d'] = this.get_22(this.itog['d']);
        this.itog['e'] = this.get_22(this.itog['a'] + this.itog['b'] + this.itog['c'] + this.itog['d']);
        this.itog['f'] = this.get_22(this.itog['a'] + this.itog['b']);
        this.itog['g'] = this.get_22(this.itog['b'] + this.itog['c']);
        this.itog['y'] = this.get_22(this.itog['c'] + this.itog['d']);
        this.itog['k'] = this.get_22(this.itog['a'] + this.itog['d']);//

        this.matrix()
    }

    matrix() {
        this.itog['e1'] = this.get_22(this.itog['f'] + this.itog['g'] + this.itog['y'] + this.itog['k']);
        this.itog['s1'] = this.get_22(this.itog['e1'] + this.itog['f']);
        this.itog['s2'] = this.get_22(this.itog['f'] + this.itog['s1']);
        this.itog['s4'] = this.get_22(this.itog['y'] + this.itog['e1']);
        this.itog['s3'] = this.get_22(this.itog['y'] + this.itog['s4']);
        this.itog['p1'] = this.get_22(this.itog['g'] + this.itog['e1']);
        this.itog['p2'] = this.get_22(this.itog['g'] + this.itog['p1']);
        this.itog['p3'] = this.get_22(this.itog['k'] + this.itog['e1']);
        this.itog['p4'] = this.get_22(this.itog['k'] + this.itog['p3']);
        this.itog['a1'] = this.get_22(this.itog['a'] + this.itog['e']);
        this.itog['a2'] = this.get_22(this.itog['a'] + this.itog['a1']);
        this.itog['d1'] = this.get_22(this.itog['d'] + this.itog['e']);
        this.itog['d2'] = this.get_22(this.itog['d'] + this.itog['d1']);
        this.itog['c1'] = this.get_22(this.itog['c'] + this.itog['e']);
        this.itog['x']  = this.get_22(this.itog['d1'] + this.itog['c1']);
        this.itog['x2'] = this.get_22(this.itog['x'] + this.itog['c1']);
        this.itog['x1'] = this.get_22(this.itog['d1'] + this.itog['x']);
        this.itog['c2'] = this.get_22(this.itog['c'] + this.itog['c1']);
        this.itog['e2'] = this.get_22(this.itog['e'] + this.itog['e1']);//
        this.itog['o'] = this.get_22(this.itog['f'] + this.itog['y']);
        this.itog['u'] = this.get_22(this.itog['g'] + this.itog['k']);//
        this.itog['h'] = this.get_22(this.itog['b'] + this.itog['d']);
        this.itog['j'] = this.get_22(this.itog['a'] + this.itog['c']);
        this.itog['m'] = this.get_22(this.itog['h'] + this.itog['j']);//
        this.itog['n'] = this.get_22(this.itog['f'] + this.itog['y']);
        this.itog['t'] = this.get_22(this.itog['g'] + this.itog['k']);
        this.itog['z'] = this.get_22(this.itog['n'] + this.itog['t']);//
        this.itog['s'] = this.get_22(this.itog['m'] + this.itog['z']);//
        this.itog['l'] =  this.get_22(this.itog['a'] + this.itog['b']);
        this.itog['b1'] = this.get_22(this.itog['b'] + this.itog['e']);
        this.itog['b2'] = this.get_22(this.itog['b'] + this.itog['b1']);
        this.itog['b3'] = this.get_22(this.itog['b1'] + this.itog['e']);
        this.itog['l1'] = this.get_22(this.itog['a2'] + this.itog['b2']);
        this.itog['l2'] = this.get_22(this.itog['a1'] + this.itog['b1']);
        this.itog['a3'] = this.get_22(this.itog['a1'] + this.itog['e']);
        this.itog['l3'] = this.get_22(this.itog['a3'] + this.itog['b3']);
        this.itog['l4'] = this.get_22(this.itog['e'] + this.itog['e']);
        this.itog['l5'] = this.get_22(this.itog['d1'] + this.itog['c1']);
        this.itog['l6'] = this.get_22(this.itog['d'] + this.itog['c']);//
        this.itog['gk'] = this.get_22(this.itog['g'] + this.itog['k']);
        this.itog['fy'] = this.get_22(this.itog['f'] + this.itog['y']);//
        this.itog['d3'] = this.get_22(this.itog['a'] + this.itog['a2'] + this.itog['a1'] + this.itog['a3'] + this.itog['e'] + this.itog['c1'] + this.itog['c']);
        this.itog['c3'] = this.get_22(this.itog['b'] + this.itog['b2'] + this.itog['b1'] + this.itog['b3'] + this.itog['e'] + this.itog['d1'] + this.itog['d']);
        this.itog['e3'] = this.get_22(this.itog['l'] + this.itog['l2'] + this.itog['l1'] + this.itog['l3'] + this.itog['l4'] + this.itog['l5'] + this.itog['l6']);//
        this.itog['af1'] = this.get_22(this.itog['a'] + this.itog['f']);
        this.itog['af3'] = this.get_22(this.itog['af1'] + this.itog['a']);
        this.itog['af2'] = this.get_22(this.itog['af3'] + this.itog['a']);
        this.itog['af4'] = this.get_22(this.itog['af3'] + this.itog['af1']);
        this.itog['af6'] = this.get_22(this.itog['af1'] + this.itog['f']);
        this.itog['af5'] = this.get_22(this.itog['af1'] + this.itog['af6']);
        this.itog['af7'] = this.get_22(this.itog['af6'] + this.itog['f']);//
        this.itog['fb1'] = this.get_22(this.itog['f'] + this.itog['b']);
        this.itog['fb3'] = this.get_22(this.itog['fb1'] + this.itog['f']);
        this.itog['fb2'] = this.get_22(this.itog['fb3'] + this.itog['f']);
        this.itog['fb4'] = this.get_22(this.itog['fb3'] + this.itog['fb1']);
        this.itog['fb6'] = this.get_22(this.itog['fb1'] + this.itog['b']);
        this.itog['fb5'] = this.get_22(this.itog['fb1'] + this.itog['fb6']);
        this.itog['fb7'] = this.get_22(this.itog['fb6'] + this.itog['b']);//
        this.itog['bg1'] = this.get_22(this.itog['b'] + this.itog['g']);
        this.itog['bg3'] = this.get_22(this.itog['bg1'] + this.itog['b']);
        this.itog['bg2'] = this.get_22(this.itog['bg3'] + this.itog['b']);
        this.itog['bg4'] = this.get_22(this.itog['bg3'] + this.itog['bg1']);
        this.itog['bg6'] = this.get_22(this.itog['bg1'] + this.itog['g']);
        this.itog['bg5'] = this.get_22(this.itog['bg1'] + this.itog['bg6']);
        this.itog['bg7'] = this.get_22(this.itog['bg6'] + this.itog['g']);//
        this.itog['gc1'] = this.get_22(this.itog['g'] + this.itog['c']);
        this.itog['gc3'] = this.get_22(this.itog['gc1'] + this.itog['g']);
        this.itog['gc2'] = this.get_22(this.itog['gc3'] + this.itog['g']);
        this.itog['gc4'] = this.get_22(this.itog['gc3'] + this.itog['gc1']);
        this.itog['gc6'] = this.get_22(this.itog['gc1'] + this.itog['c']);
        this.itog['gc5'] = this.get_22(this.itog['gc1'] + this.itog['gc6']);
        this.itog['gc7'] = this.get_22(this.itog['gc6'] + this.itog['c']);//
        this.itog['cy1'] = this.get_22(this.itog['c'] + this.itog['y']);
        this.itog['cy3'] = this.get_22(this.itog['cy1'] + this.itog['c']);
        this.itog['cy2'] = this.get_22(this.itog['cy3'] + this.itog['c']);
        this.itog['cy4'] = this.get_22(this.itog['cy3'] + this.itog['cy1']);
        this.itog['cy6'] = this.get_22(this.itog['cy1'] + this.itog['y']);
        this.itog['cy5'] = this.get_22(this.itog['cy1'] + this.itog['cy6']);
        this.itog['cy7'] = this.get_22(this.itog['cy6'] + this.itog['y']);//
        this.itog['yd1'] = this.get_22(this.itog['y'] + this.itog['d']);
        this.itog['yd3'] = this.get_22(this.itog['yd1'] + this.itog['y']);
        this.itog['yd2'] = this.get_22(this.itog['yd3'] + this.itog['y']);
        this.itog['yd4'] = this.get_22(this.itog['yd3'] + this.itog['yd1']);
        this.itog['yd6'] = this.get_22(this.itog['yd1'] + this.itog['d']);
        this.itog['yd5'] = this.get_22(this.itog['yd1'] + this.itog['yd6']);
        this.itog['yd7'] = this.get_22(this.itog['yd6'] + this.itog['d']);//
        this.itog['dk1'] = this.get_22(this.itog['d'] + this.itog['k']);
        this.itog['dk3'] = this.get_22(this.itog['dk1'] + this.itog['d']);
        this.itog['dk2'] = this.get_22(this.itog['dk3'] + this.itog['d']);
        this.itog['dk4'] = this.get_22(this.itog['dk3'] + this.itog['dk1']);
        this.itog['dk6'] = this.get_22(this.itog['dk1'] + this.itog['k']);
        this.itog['dk5'] = this.get_22(this.itog['dk1'] + this.itog['dk6']);
        this.itog['dk7'] = this.get_22(this.itog['dk6'] + this.itog['k']);//
        this.itog['ka1'] = this.get_22(this.itog['k'] + this.itog['a']);
        this.itog['ka3'] = this.get_22(this.itog['ka1'] + this.itog['k']);
        this.itog['ka2'] = this.get_22(this.itog['ka3'] + this.itog['k']);
        this.itog['ka4'] = this.get_22(this.itog['ka3'] + this.itog['ka1']);
        this.itog['ka6'] = this.get_22(this.itog['ka1'] + this.itog['a']);
        this.itog['ka5'] = this.get_22(this.itog['ka1'] + this.itog['ka6']);
        this.itog['ka7'] = this.get_22(this.itog['ka6'] + this.itog['a']);

    }

    get_22($num) {
        if ($num > 22) {
            $num = String($num).split('').reduce(function(sum, el){
                return sum+Number(el);
            }, 0);
            $num = Math.round($num);
            if ($num > 22) {
                $num = String($num).split('').reduce(function(sum, el){
                    return sum+Number(el);
                }, 0);
                $num = Math.round($num);
            }
        }
        return $num;
    }

    fill_matrix(){
        console.log(jQuery(jQuery(this.selector+'aa>tspan')[this.selectorNumber]))
        jQuery(jQuery(this.selector+'aa>tspan')[this.selectorNumber]).text(this.itog['a'])
        jQuery(jQuery(this.selector+'bb>tspan')[this.selectorNumber]).text(this.itog['b'])
        jQuery(jQuery(this.selector+'cc>tspan')[this.selectorNumber]).text(this.itog['c'])
        jQuery(jQuery(this.selector+'dd>tspan')[this.selectorNumber]).text(this.itog['d'])
        jQuery(jQuery(this.selector+'ff>tspan')[this.selectorNumber]).text(this.itog['f'])
        jQuery(jQuery(this.selector+'gg>tspan')[this.selectorNumber]).text(this.itog['g'])
        jQuery(jQuery(this.selector+'yy>tspan')[this.selectorNumber]).text(this.itog['y'])
        jQuery(jQuery(this.selector+'kk>tspan')[this.selectorNumber]).text(this.itog['k'])
        jQuery(jQuery(this.selector+'ee>tspan')[this.selectorNumber]).text(this.itog['e'])
        jQuery(jQuery(this.selector+'e1>tspan')[this.selectorNumber]).text(this.itog['e1'])
        jQuery(jQuery(this.selector+'e2>tspan')[this.selectorNumber]).text(this.itog['e2'])
        jQuery(jQuery(this.selector+'a3>tspan')[this.selectorNumber]).text(this.itog['a3'])
        jQuery(jQuery(this.selector+'b3>tspan')[this.selectorNumber]).text(this.itog['b3'])
        jQuery(jQuery(this.selector+'xx>tspan')[this.selectorNumber]).text(this.itog['x'])
        jQuery(jQuery(this.selector+'x1>tspan')[this.selectorNumber]).text(this.itog['x1'])
        jQuery(jQuery(this.selector+'x2>tspan')[this.selectorNumber]).text(this.itog['x2'])
        jQuery(jQuery(this.selector+'s2>tspan')[this.selectorNumber]).text(this.itog['s2'])
        jQuery(jQuery(this.selector+'s1>tspan')[this.selectorNumber]).text(this.itog['s1'])
        jQuery(jQuery(this.selector+'s3>tspan')[this.selectorNumber]).text(this.itog['s3'])
        jQuery(jQuery(this.selector+'s4>tspan')[this.selectorNumber]).text(this.itog['s4'])
        jQuery(jQuery(this.selector+'p2>tspan')[this.selectorNumber]).text(this.itog['p2'])
        jQuery(jQuery(this.selector+'p1>tspan')[this.selectorNumber]).text(this.itog['p1'])
        jQuery(jQuery(this.selector+'p3>tspan')[this.selectorNumber]).text(this.itog['p3'])
        jQuery(jQuery(this.selector+'p4>tspan')[this.selectorNumber]).text(this.itog['p4'])
        jQuery(jQuery(this.selector+'a2>tspan')[this.selectorNumber]).text(this.itog['a2'])
        jQuery(jQuery(this.selector+'b2>tspan')[this.selectorNumber]).text(this.itog['b2'])
        jQuery(jQuery(this.selector+'c2>tspan')[this.selectorNumber]).text(this.itog['c2'])
        jQuery(jQuery(this.selector+'d2>tspan')[this.selectorNumber]).text(this.itog['d2'])
        jQuery(jQuery(this.selector+'a1>tspan')[this.selectorNumber]).text(this.itog['a1'])
        jQuery(jQuery(this.selector+'b1>tspan')[this.selectorNumber]).text(this.itog['b1'])
        jQuery(jQuery(this.selector+'c1>tspan')[this.selectorNumber]).text(this.itog['c1'])
        jQuery(jQuery(this.selector+'d1>tspan')[this.selectorNumber]).text(this.itog['d1'])
        jQuery(jQuery(this.selector+'af1>tspan')[this.selectorNumber]).text(this.itog['af1'])
        jQuery(jQuery(this.selector+'af2>tspan')[this.selectorNumber]).text(this.itog['af2'])
        jQuery(jQuery(this.selector+'af3>tspan')[this.selectorNumber]).text(this.itog['af3'])
        jQuery(jQuery(this.selector+'af4>tspan')[this.selectorNumber]).text(this.itog['af4'])
        jQuery(jQuery(this.selector+'af5>tspan')[this.selectorNumber]).text(this.itog['af5'])
        jQuery(jQuery(this.selector+'af6>tspan')[this.selectorNumber]).text(this.itog['af6'])
        jQuery(jQuery(this.selector+'af7>tspan')[this.selectorNumber]).text(this.itog['af7'])
        jQuery(jQuery(this.selector+'fb1>tspan')[this.selectorNumber]).text(this.itog['fb1'])
        jQuery(jQuery(this.selector+'fb2>tspan')[this.selectorNumber]).text(this.itog['fb2'])
        jQuery(jQuery(this.selector+'fb3>tspan')[this.selectorNumber]).text(this.itog['fb3'])
        jQuery(jQuery(this.selector+'fb4>tspan')[this.selectorNumber]).text(this.itog['fb4'])
        jQuery(jQuery(this.selector+'fb5>tspan')[this.selectorNumber]).text(this.itog['fb5'])
        jQuery(jQuery(this.selector+'fb6>tspan')[this.selectorNumber]).text(this.itog['fb6'])
        jQuery(jQuery(this.selector+'fb7>tspan')[this.selectorNumber]).text(this.itog['fb7'])
        jQuery(jQuery(this.selector+'bg1>tspan')[this.selectorNumber]).text(this.itog['bg1'])
        jQuery(jQuery(this.selector+'bg2>tspan')[this.selectorNumber]).text(this.itog['bg2'])
        jQuery(jQuery(this.selector+'bg3>tspan')[this.selectorNumber]).text(this.itog['bg3'])
        jQuery(jQuery(this.selector+'bg4>tspan')[this.selectorNumber]).text(this.itog['bg4'])
        jQuery(jQuery(this.selector+'bg5>tspan')[this.selectorNumber]).text(this.itog['bg5'])
        jQuery(jQuery(this.selector+'bg6>tspan')[this.selectorNumber]).text(this.itog['bg6'])
        jQuery(jQuery(this.selector+'bg7>tspan')[this.selectorNumber]).text(this.itog['bg7'])
        jQuery(jQuery(this.selector+'gc1>tspan')[this.selectorNumber]).text(this.itog['gc1'])
        jQuery(jQuery(this.selector+'gc2>tspan')[this.selectorNumber]).text(this.itog['gc2'])
        jQuery(jQuery(this.selector+'gc3>tspan')[this.selectorNumber]).text(this.itog['gc3'])
        jQuery(jQuery(this.selector+'gc4>tspan')[this.selectorNumber]).text(this.itog['gc4'])
        jQuery(jQuery(this.selector+'gc5>tspan')[this.selectorNumber]).text(this.itog['gc5'])
        jQuery(jQuery(this.selector+'gc6>tspan')[this.selectorNumber]).text(this.itog['gc6'])
        jQuery(jQuery(this.selector+'gc7>tspan')[this.selectorNumber]).text(this.itog['gc7'])
        jQuery(jQuery(this.selector+'cy1>tspan')[this.selectorNumber]).text(this.itog['cy1'])
        jQuery(jQuery(this.selector+'cy2>tspan')[this.selectorNumber]).text(this.itog['cy2'])
        jQuery(jQuery(this.selector+'cy3>tspan')[this.selectorNumber]).text(this.itog['cy3'])
        jQuery(jQuery(this.selector+'cy4>tspan')[this.selectorNumber]).text(this.itog['cy4'])
        jQuery(jQuery(this.selector+'cy5>tspan')[this.selectorNumber]).text(this.itog['cy5'])
        jQuery(jQuery(this.selector+'cy6>tspan')[this.selectorNumber]).text(this.itog['cy6'])
        jQuery(jQuery(this.selector+'cy7>tspan')[this.selectorNumber]).text(this.itog['cy7'])
        jQuery(jQuery(this.selector+'yd1>tspan')[this.selectorNumber]).text(this.itog['yd1'])
        jQuery(jQuery(this.selector+'yd2>tspan')[this.selectorNumber]).text(this.itog['yd2'])
        jQuery(jQuery(this.selector+'yd3>tspan')[this.selectorNumber]).text(this.itog['yd3'])
        jQuery(jQuery(this.selector+'yd4>tspan')[this.selectorNumber]).text(this.itog['yd4'])
        jQuery(jQuery(this.selector+'yd5>tspan')[this.selectorNumber]).text(this.itog['yd5'])
        jQuery(jQuery(this.selector+'yd6>tspan')[this.selectorNumber]).text(this.itog['yd6'])
        jQuery(jQuery(this.selector+'yd7>tspan')[this.selectorNumber]).text(this.itog['yd7'])
        jQuery(jQuery(this.selector+'dk1>tspan')[this.selectorNumber]).text(this.itog['dk1'])
        jQuery(jQuery(this.selector+'dk2>tspan')[this.selectorNumber]).text(this.itog['dk2'])
        jQuery(jQuery(this.selector+'dk3>tspan')[this.selectorNumber]).text(this.itog['dk3'])
        jQuery(jQuery(this.selector+'dk4>tspan')[this.selectorNumber]).text(this.itog['dk4'])
        jQuery(jQuery(this.selector+'dk5>tspan')[this.selectorNumber]).text(this.itog['dk5'])
        jQuery(jQuery(this.selector+'dk6>tspan')[this.selectorNumber]).text(this.itog['dk6'])
        jQuery(jQuery(this.selector+'dk7>tspan')[this.selectorNumber]).text(this.itog['dk7'])
        jQuery(jQuery(this.selector+'ka1>tspan')[this.selectorNumber]).text(this.itog['ka1'])
        jQuery(jQuery(this.selector+'ka2>tspan')[this.selectorNumber]).text(this.itog['ka2'])
        jQuery(jQuery(this.selector+'ka3>tspan')[this.selectorNumber]).text(this.itog['ka3'])
        jQuery(jQuery(this.selector+'ka4>tspan')[this.selectorNumber]).text(this.itog['ka4'])
        jQuery(jQuery(this.selector+'ka5>tspan')[this.selectorNumber]).text(this.itog['ka5'])
        jQuery(jQuery(this.selector+'ka6>tspan')[this.selectorNumber]).text(this.itog['ka6'])
        jQuery(jQuery(this.selector+'ka7>tspan')[this.selectorNumber]).text(this.itog['ka7'])
        jQuery(jQuery(this.selector+'h')[this.selectorNumber]).text(this.itog['h'])
        console.log(jQuery(this.selector+'h'))
        jQuery(jQuery(this.selector+'j')[this.selectorNumber]).text(this.itog['j'])
        jQuery(jQuery(this.selector+'m')[this.selectorNumber]).text(this.itog['m'])
        jQuery(jQuery(this.selector+'n')[this.selectorNumber]).text(this.itog['n'])
        jQuery(jQuery(this.selector+'t')[this.selectorNumber]).text(this.itog['t'])
        jQuery(jQuery(this.selector+'z')[this.selectorNumber]).text(this.itog['z'])
        jQuery(jQuery(this.selector+'s')[this.selectorNumber]).text(this.itog['s'])
    }

    fill_table(){
        jQuery('.table__coll#a').text(this.itog['a'])
        jQuery('.table__coll#a1').text(this.itog['a1'])
        jQuery('.table__coll#a2').text(this.itog['a2'])
        jQuery('.table__coll#a3').text(this.itog['a3'])
        jQuery('.table__coll#b').text(this.itog['b'])
        jQuery('.table__coll#b1').text(this.itog['b1'])
        jQuery('.table__coll#b2').text(this.itog['b2'])
        jQuery('.table__coll#b3').text(this.itog['b3'])
        jQuery('.table__coll#e').text(this.itog['e'])
        jQuery('.table__coll#e3').text(this.itog['e3'])
        jQuery('.table__coll#c').text(this.itog['c'])
        jQuery('.table__coll#c1').text(this.itog['c1'])
        jQuery('.table__coll#c3').text(this.itog['c3'])
        jQuery('.table__coll#d').text(this.itog['d'])
        jQuery('.table__coll#d1').text(this.itog['d1'])
        jQuery('.table__coll#d3').text(this.itog['d3'])
        jQuery('.table__coll#l').text(this.itog['l'])
        jQuery('.table__coll#l1').text(this.itog['l1'])
        jQuery('.table__coll#l2').text(this.itog['l2'])
        jQuery('.table__coll#l3').text(this.itog['l3'])
        jQuery('.table__coll#l4').text(this.itog['l4'])
        jQuery('.table__coll#l5').text(this.itog['l5'])
        jQuery('.table__coll#l6').text(this.itog['l6'])
    }

    set_decryption(response, data1){
        console.log(jQuery('.decryption__btn-bt.btn'))
        jQuery('.decryption__btn-bt.btn').addClass(response['lock'])
        jQuery('.year_people').text(response['agetest'])

        jQuery('.f').text(response['f'])
        jQuery('.y').text(response['y'])
        jQuery('.f_y').text(response['fy'])
        jQuery('.g').text(response['g'])
        jQuery('.k').text(response['k'])
        jQuery('.g_k').text(response['gk'])
        jQuery('.ee1').text(response['e1'])
        jQuery('.decr-item').remove()
        jQuery('.decryption .decryption__heading').after(response['html'])


        jQuery('.download__pdf a').attr('href', '/pdf/' + jQuery('#form .form__item #name.form__input').val().trim() + '_' + data1.birthday + '.pdf');
        jQuery('.download__pdf_full a').attr('href', '/pdf/' + jQuery('#form .form__item #name.form__input').val().trim() + '_' + data1.birthday + '_full.pdf');
        let decryption = document.querySelector('.decryption');

        decryption.classList.add("show");
    }

    show_matrix(){
        let selector = (this.selector == '#') ? '.' : this.selector;
        let healthCard = document.querySelector(selector+'calculation__hidden');

        healthCard.classList.add("show");


        const elPosition = healthCard.getBoundingClientRect().top;
        window.scrollBy({
            top: elPosition,
            behavior: 'smooth'
        });
    }
}