var body_height = 1122;
const load = document.querySelector(".loader");
function startload() {
    load.classList.add("active");
    console.log('add');
}
function stopload() {
    load.classList.remove("active");
    console.log('remove');
}
function get_data_ready(date, name) {
	let data__birthday = date;

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
async function getPDF(full, compability=false, brand=false) {
	let data1 = {
		action: "get_cm_description",
		full: full,
		dopdf: true
	};
	let matrix;
	if(compability) {
		let name = document.querySelector(".compability_matrix #pers_name").innerText.trim();
		let name1 = document.querySelector(".compability_matrix #pers_name1").innerText.trim();
		let dR = document.querySelector(".compability_matrix #pers_dR").innerText;
		let dR1 = document.querySelector(".compability_matrix #pers_dR1").innerText;

		data1.partner1 = get_data_ready(dR, name);
		data1.partner2 = get_data_ready(dR1, name1);
		data1.compability = true;
		data1.window_width = window.innerWidth;
		let resp1 = new Matrix(dR, '.', 0)
		let resp2 = new Matrix(dR1, '.', 1)
		resp1.main_matrix_values()
		resp2.main_matrix_values()
		matrix = new CompabilityMatrix(resp1.itog, resp2.itog)
		matrix.itogs_sum()
		data1['itog1'] = resp1.itog
		data1['itog2'] = resp2.itog
	}
	else if(brand){
		var name = document.querySelector(".brand_matrix #pers_name").innerText.trim();
		var dR = document.querySelector(".brand_matrix #pers_dR").innerText;
		var age = document.querySelector(".brand_matrix .year_people").innerText;

		data1 = {
			action: "get_bm_description",
			birthday: dR,
			age: age,
			name: name,
			full: full,
			dopdf: true
		};
		data1.male = jQuery('input.male:checked').val();
		matrix = new BrandMatrix(dR);
		matrix.main_matrix_values();
	}
	else{
		var name = document.querySelector("#pers_name").innerText.trim();
		var dR = document.querySelector("#pers_dR").innerText;
		var age = document.querySelector(".year_people").innerText;

		data1 = {
			action: "get_sm_description",
			birthday: dR,
			age: age,
			name: name,
			full: full,
			dopdf: true
		};
		matrix = new Matrix(dR);
		matrix.main_matrix_values();
	}
	data1['itog'] = matrix.itog;
	startload();

	jQuery.post(myajax.url, data1, function(response) {console.log(response);}).then(()=>{
		let comp_add = (compability == true) ? '.compability_matrix ' : '';
		let comp_add_full = (compability == true) ? '.compability_decryption ' : '';
		let brand_add = (brand == true) ? '.brand_matrix ' : '';
		let brand_add_full = (brand == true) ? '.brand_decryption ' : '';
		stopload();
		if (full === true)
		{
			var link = document.createElement('a');

			link.setAttribute('href', jQuery(brand_add_full+comp_add_full+'.download_pdf_full_a').attr('href'));
			link.setAttribute('download', '');
			link.click();
			return false;
		}
		else
		{
			var link = document.createElement('a');
			link.setAttribute('href', jQuery(brand_add+comp_add+'.download_pdf_a').attr('href'));
			link.setAttribute('download', '');
			link.click();
			return false;
		}
	});
		// var DBW = document.body.offsetWidth;
		// var body_width = 96 / 72 * 793;
		// var pdf = new jsPDF('', 'pt', 'a4', true);
		// var time = new Date();
		// var pers_all = document.querySelector('#health-card__personality');
		// var pers_allText = pers_all.contentText || pers_all.innerText;
		// pdf.setFont('Roboto-Regular', 'normal');
		//
		// pdf.setFontSize(6);
		// pdf.text(clc(1.38), 10, String(time.getDate()) + '.' + String(time.getMonth()) + '.' + String(time.getFullYear()) + ' ' + String(time.getHours()) + ':' + + String(time.getMinutes()));
		// pdf.text(body_width - (body_width / 1.4), 10, 'РњР°С‚СЂРёС†Р° СЃСѓРґСЊР±С‹ Р±РµСЃРїР»Р°С‚РЅС‹Р№ РѕРЅР»Р°Р№РЅ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ | РЎРёР»Р° РњР°СЃС‚РµСЂР°');
		// pdf.setFontSize(15);
		// pdf.text(clc(15), 40, `Р’РђРЁРђ РњРђРўР РР¦Рђ Р”РЈРЁР: ${name.toUpperCase()} ${dR.toUpperCase()}`);
		// pdf.setTextColor('#745637');
		// pdf.setFontSize(11);
		// pdf.text(clc(1.38), 80, pers_allText);
		// var w = 335;
		// var h = w * (document.querySelector("#health-card__img").getBoundingClientRect().height / document.querySelector("#health-card__img").getBoundingClientRect().width);
		//
		// var node = document.querySelector("#health-card__img")
		// await domtoimage.toPng(node)
		//     .then(function (dataUrl) {
		//         var img = new Image();
		//         img.src = dataUrl;
		//         pdf.addImage(img, 'PNG', clc(1.38), 155, w+10, h, undefined,'SLOW');
		//     })
		//     .catch(function (error) {
		//         console.error('oops, something went wrong!', error);
		//     });
		// var x_d = 0;
		// var w_d = 0;
		// if (DBW < 600 && DBW > 450) {
		// 	x_d = 30;
		// 	w_d = 45;
		// }
		// var y__dest = 80;
		// var dest_items = document.querySelectorAll(".destination__item");
		//
		// for (var i = 0; i < 3; i++) {
		// 	var w_dest = 180 + w_d;
		// 	var h_dest = w_dest * (dest_items[i].offsetHeight / dest_items[i].offsetWidth);
		//
		// 	await domtoimage.toPng(dest_items[i])
		//     .then(function (dataUrl) {
		//         var img = new Image();
		//         img.src = dataUrl;
		//         pdf.addImage(img, 'PNG', clc(37) - x_d, y__dest-10, w_dest, h_dest, undefined,'SLOW');
		//     })
		//     .catch(function (error) {
		//         console.error('oops, something went wrong!', error);
		//     });
		// 	y__dest+=h_dest+20;
		// }
		// pdf.setFontSize(10 + 5 * (body_width / 1440));
		//
		// pdf.text(clc(1.38), h + 155 + 10, 'РљР°СЂС‚Р° Р·РґРѕСЂРѕРІСЊСЏ')
		// var w_t = 290;
		// var h_t = w_t * (document.querySelector(".health-card__table-block").offsetHeight / document.querySelector(".health-card__table-block").offsetWidth);
		//
		// await domtoimage.toPng(document.querySelector('.health-card__table-block'))
	    // .then(function (dataUrl) {
	    //     var img = new Image();
	    //     img.src = dataUrl;
	    //     pdf.addImage(img, 'PNG', clc(1.38), h + 155 + 18, w_t, h_t, undefined,'SLOW');
	    // })
	    // .catch(function (error) {
	    //     console.error('oops, something went wrong!', error);
	    // });
		// pdf.setFontSize(7);
		// pdf.text(clc(1.38), (body_height * 0.75) - 12, "https://matriza-sydbi.ru");
		// pdf.save(name + ' ' + dR + '.pdf');
		// setTimeout(() => {alert("вњ”PDF С„Р°Р№Р» СѓСЃРїРµС€РЅРѕ СЃРєР°С‡РµРЅ!")}, 300)


}


function clc(px) {
	var body_width = 96 / 72 * 793;
	return body_width / 100 * px;
}
async function getPDFAll() {
	var name = document.querySelector("#pers_name").innerText;
	var dR = document.querySelector("#pers_dR").innerText;
	if (confirm(`Р—Р°РіСЂСѓР·РёС‚СЊ С„Р°Р№Р» "${name} ${dR}.pdf"?`)) {
		await startload();
		var DBW = document.body.offsetWidth;
		var body_width = 96 / 72 * 793;
		var pdf = new jsPDF('', 'pt', 'a4', true);
		var time = new Date();
		var pers_all = document.querySelector('#health-card__personality');
		var pers_allText = pers_all.contentText || pers_all.innerText;
		pdf.setFont('Roboto-Regular', 'normal');
		
		pdf.setFontSize(6);
		pdf.text(clc(1.38), 10, String(time.getDate()) + '.' + String(time.getMonth()) + '.' + String(time.getFullYear()) + ' ' + String(time.getHours()) + ':' + + String(time.getMinutes()));
		pdf.text(body_width - (body_width / 1.4), 10, 'РњР°С‚СЂРёС†Р° СЃСѓРґСЊР±С‹ Р±РµСЃРїР»Р°С‚РЅС‹Р№ РѕРЅР»Р°Р№РЅ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ | РЎРёР»Р° РњР°СЃС‚РµСЂР°');
		pdf.setFontSize(15);
		pdf.text(clc(15), 40, `Р’РђРЁРђ РњРђРўР РР¦Рђ Р”РЈРЁР: ${name.toUpperCase()} ${dR.toUpperCase()}`);
		pdf.setTextColor('#745637');
		pdf.setFontSize(11);
		pdf.text(clc(1.38), 80, pers_allText);
		var w = 335;
		var h = w * (document.querySelector("#health-card__img").getBoundingClientRect().height / document.querySelector("#health-card__img").getBoundingClientRect().width);

		await domtoimage.toPng(document.querySelector("#health-card__img"))
		    .then(function (dataUrl) {
		        var img = new Image();
		        img.src = dataUrl;
		        pdf.addImage(img, 'PNG', clc(1.38), 155, w+10, h, undefined,'SLOW');
		    })
		    .catch(function (error) {
		        console.error('oops, something went wrong!', error);
		    });
		var x_d = 0;
		var w_d = 0;
		if (DBW < 600 && DBW > 450) {
			x_d = 30;
			w_d = 45;
		}
		var y__dest = 80;
		var dest_items = document.querySelectorAll(".destination__item");

		for (var i = 0; i < 3; i++) {
			var w_dest = 180 + w_d;
			var h_dest = w_dest * (dest_items[i].offsetHeight / dest_items[i].offsetWidth);

			await domtoimage.toPng(dest_items[i])
			    .then(function (dataUrl) {
			        var img = new Image();
			        img.src = dataUrl;
			        pdf.addImage(img, 'PNG', clc(37) - x_d, y__dest-10, w_dest, h_dest, undefined,'SLOW');
			    })
			    .catch(function (error) {
			        console.error('oops, something went wrong!', error);
			    });
			y__dest+=h_dest+20;
		}
		pdf.setFontSize(12);
		var pd = 0;

		pdf.text(clc(1.38), h + 155 + 10 , 'РљР°СЂС‚Р° Р·РґРѕСЂРѕРІСЊСЏ')
		var w_t = 290;
		var h_t = w_t * (document.querySelector(".health-card__table-block").offsetHeight / document.querySelector(".health-card__table-block").offsetWidth);

		await domtoimage.toPng(document.querySelector('.health-card__table-block'))
		    .then(function (dataUrl) {
		        var img = new Image();
		        img.src = dataUrl;
		        pdf.addImage(img, 'PNG', clc(1.38), h + 155 + 18 , w_t, h_t, undefined,'SLOW');
		    })
		    .catch(function (error) {
		        console.error('oops, something went wrong!', error);
		    });
		pdf.setFontSize(7);
		pdf.text(clc(1.38), (body_height * 0.75) - 12, "https://matriza-sydbi.ru");
		pdf.addPage();
		var desc_items = document.querySelectorAll('.decryption__item');
		var count_items = 0 
		for (var i = 0; i <= desc_items.length - 1; i++){
			var child_el = desc_items[i].childNodes;
			var count = 0
			var verticalOffset = 56, size
			pdf.setFontSize(6);
			pdf.text(clc(1.38), 10, String(time.getDate()) + '.' + String(time.getMonth()) + '.' + String(time.getFullYear()) + ' ' + String(time.getHours()) + ':' + + String(time.getMinutes()));
			pdf.text(body_width - (body_width / 1.4), 10, 'РњР°С‚СЂРёС†Р° СЃСѓРґСЊР±С‹ Р±РµСЃРїР»Р°С‚РЅС‹Р№ РѕРЅР»Р°Р№РЅ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ | РЎРёР»Р° РњР°СЃС‚РµСЂР°');
			pdf.setFontSize(7);
			pdf.text(clc(1.38), (body_height * 0.75) - 12, "https://matriza-sydbi.ru");
			var size_split = 0.5
			child_el.forEach(item => {
				var item_text = item.innerText;
				
				if (String(item_text) != 'undefined'){
					console.log(item_text);
					item_text = item_text.replaceAll('\t', '').replaceAll(/\n+/g, '\n')
					console.log(item_text);
					if (count == 0) {
						size = 13
						pdf.setFontSize(size);
						pdf.text(clc(13), 45, item_text);
					} else {
						if (verticalOffset >= body_height - 470){
							pdf.addPage();
							verticalOffset = 56;
							size_split = 0.5
							pdf.setFontSize(6);
							pdf.text(clc(1.38), 10, String(time.getDate()) + '.' + String(time.getMonth()) + '.' + String(time.getFullYear()) + ' ' + String(time.getHours()) + ':' + + String(time.getMinutes()));
							pdf.text(body_width - (body_width / 1.4), 10, 'РњР°С‚СЂРёС†Р° СЃСѓРґСЊР±С‹ Р±РµСЃРїР»Р°С‚РЅС‹Р№ РѕРЅР»Р°Р№РЅ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ | РЎРёР»Р° РњР°СЃС‚РµСЂР°');
							pdf.setFontSize(7);
							pdf.text(clc(1.38), (body_height * 0.75) - 12, "https://matriza-sydbi.ru");
						}
						size = 9
						var txt = pdf.setFontSize(size).splitTextToSize(item_text, 793 * 0.75 - clc(2.38));
						pdf.text(clc(1.38), verticalOffset + size / 72, txt);
						verticalOffset += (txt.length + 1.36 + size_split) * size
						size_split+= 0.6
					}
					count+=1;
				}
			});
			pdf.addPage();
		}
		var pageCount = pdf.internal.getNumberOfPages();
		pdf.deletePage(pageCount)
		/*----------------------------------------------------------------*/
		
		pdf.save(name + ' ' + dR + '.pdf');
		await stopload();
		setTimeout(() => {alert("вњ”PDF С„Р°Р№Р» СѓСЃРїРµС€РЅРѕ СЃРєР°С‡РµРЅ!")}, 300)
		
	} 
}


// var but = document.querySelector('.download__diagram');
// but.addEventListener('click', () => {
// 	but.disabled = true;
// 	var bt_i = document.querySelector('.download__icons');
// 	bt_i.style.display = 'block';
// 	but.classList.add('disabled');
// });
//
// var but_all = document.querySelector('.download__full');
// but_all.addEventListener('click', () => {
// 	if (!but_all.classList.contains('btn--lock')) {
// 		but_all.disabled = true;
// 		var but_all_i = document.querySelector('.download__icons-2');
// 		but_all_i.style.display = 'block';
// 		but_all.classList.add('disabled');
//
// 	}
// });

document.addEventListener('click', (e) => {
	if(e.target.classList.contains('download__diagram')) {
		e.target.setAttribute('disabled', true);
		var bt_i = e.target.parentElement.querySelector('.download__icons');
		bt_i.style.display = 'block';
		e.target.classList.add('disabled');
	}
});

document.addEventListener('click', (e) => {
	if(e.target.classList.contains('download__full')) {
		if (!e.target.classList.contains('btn--lock')) {
			e.target.setAttribute('disabled', true);
			var but_all_i = e.target.parentElement.querySelector('.download__icons-2');
			but_all_i.style.display = 'block';
			e.target.classList.add('disabled');

		}
	}
});
