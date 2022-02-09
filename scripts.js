$(function () {

    // First

    $('.select_fir').each(function () {

        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450;

        _this.hide();
        _this.wrap('<div class="select_fir"></div>');
        $('<div>', {
            class: 'new-select_fir',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select_fir');
        $('<div>', {
            class: 'new-select__list_fir'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list_fir');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item_fir',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item_fir');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select_fir').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });

    });
    $('.select_fir').on('click', function () {
        $('.select_fir').toggleClass('select-active_fir');
    });

    // Second

    $('.select_s').each(function () {

        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450;

        _this.hide();
        _this.wrap('<div class="select_s"></div>');
        $('<div>', {
            class: 'new-select_s',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select_s');
        $('<div>', {
            class: 'new-select__list_s'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list_s');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item_s',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item_s');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select_s').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });

    });
    $('.select_s').on('click', function () {
        $('.select_s').toggleClass('select-active_s');
    });

    // Third

    $('.select_t').each(function () {

        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450;

        _this.hide();
        _this.wrap('<div class="select_t"></div>');
        $('<div>', {
            class: 'new-select_t',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select_t');
        $('<div>', {
            class: 'new-select__list_t'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list_t');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item_t',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item_t');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select_t').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });

    });
    $('.select_t').on('click', function () {
        $('.select_t').toggleClass('select-active_t');
    });

    // Forth

    $('.select_fo').each(function () {

        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450;

        _this.hide();
        _this.wrap('<div class="select_fo"></div>');
        $('<div>', {
            class: 'new-select_fo',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select_fo');
        $('<div>', {
            class: 'new-select__list_fo'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list_fo');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item_fo',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item_fo');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select_fo').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });

    });
    $('.select_fo').on('click', function () {
        $('.select_fo').toggleClass('select-active_fo');
    });

    // Fifth

    $('.select_fi').each(function () {

        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450;

        _this.hide();
        _this.wrap('<div class="select_fi"></div>');
        $('<div>', {
            class: 'new-select_fi',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select_fi');
        $('<div>', {
            class: 'new-select__list_fi'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list_fi');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item_fi',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item_fi');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select_fi').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });

    });
    $('.select_fi').on('click', function () {
        $('.select_fi').toggleClass('select-active_fi');
    });


    // Drop

    $('.select').each(function () {

        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450;

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });

    });
    $('.select').on('click', function () {
        $('.select').toggleClass('select-active');
    });

    $('.result').on('click', function () {
        filter();
    });

    function filter() {
        let v1 = $('.new-select_fir').html().trim();
        let v2 = $('.new-select_s').html().trim();
        let v3 = $('.new-select_t').html().trim();
        let v4 = $('.new-select_fo').html().trim();
        let v5 = $('.new-select_fi').html().trim();

        $('.cards-container_main-card').fadeOut(0);
        $('.cards-container_main-card[data-year="' + v1 + '"]').fadeIn(0).addClass('card-fir');
        $('.card-fir').fadeOut(0);
        $('.card-fir[data-mark="' + v2 + '"]').fadeIn(0).addClass('card-s');
        $('.card-s').fadeOut(0);
        $('.card-s[data-model="' + v3 + '"]').fadeIn(0).addClass('card-t');
        $('.card-t').fadeOut(0);
        $('.card-t[data-trim="' + v4 + '"]').fadeIn(0).addClass('card-fo');
        $('.card-fo').fadeOut(0);
        $('.card-fo[data-mil="' + v5 + '"]').fadeIn(0).addClass('card-fi');


        let fir = $('.select_fir');
        let s = $('.select_s');
        let t = $('.select_t');
        let fo = $('.select_fir');
        let fi = $('.select_fir');


        // 1

        if (fir.hasClass('.new-select_fir')) {
            $('.cards-container_main-card').fadeOut(0);
            $('.cards-container_main-card[data-year="' + v1 + '"]').fadeIn(0).addClass('card-fir');
        } else {
            $('.cards-container_main-card[data-year="' + v1 + '"]').fadeIn(0).removeClass('card-fir');
            
        }

        // 2

        if (s.hasClass('.new-select_s')) {
            $('.cards-container_main-card').fadeOut(0);
            $('.cards-container_main-card[data-mark="' + v2 + '"]').fadeIn(0).addClass('card-s');
        } else {
            $('.cards-container_main-card[data-mark="' + v2 + '"]').fadeIn(0).removeClass('card-s');
        }


        // 3

        if (t.hasClass('.new-select_t')) {
            $('.cards-container_main-card').fadeOut(0);
            $('.cards-container_main-card[data-model="' + v3 + '"]').fadeIn(0).addClass('card-t');
        } else {
            $('.cards-container_main-card[data-model="' + v3 + '"]').fadeIn(0).removeClass('card-t');
        }


        // 4


        if (fo.hasClass('.new-select_fo')) {
            $('.cards-container_main-card').fadeOut(0);
            $('.cards-container_main-card[data-trim="' + v4 + '"]').fadeIn(0).addClass('card-fo');
        } else {
            $('.cards-container_main-card[data-trim="' + v4 + '"]').fadeIn(0).removeClass('card-fo');
        }


        // 5

        if (fi.hasClass('.new-select_fi')) {
            $('.cards-container_main-card').fadeOut(0);
            $('.cards-container_main-card[data-mil="' + v5 + '"]').fadeIn(0).addClass('card-fi');
        } else {
            $('.cards-container_main-card[data-mil="' + v5 + '"]').fadeIn(0).removeClass('card-fi');
        }
    }

    $('.new-select__list').on('click', function () {
        sort();
    });
    function sort() {
        let val1 = $('.new-select').html();
        let img_d = $('.cards-container-wrapper-sort-img_d');
        let img_u = $('.cards-container-wrapper-sort-img_u');

        
            if(val1 == 'Publication date (descending)'){
                img_d.addClass('img-active');
                img_u.removeClass('img-active');
            }else if(val1 == 'Price (descending)'){
                img_d.addClass('img-active');
                img_u.removeClass('img-active');
            }else if(val1 == 'Mileage (descending)'){
                img_d.addClass('img-active');
                img_u.removeClass('img-active');
            }else if(val1 == 'Performance (descending)'){
                img_d.addClass('img-active');
                img_u.removeClass('img-active');
            }else{
                img_d.removeClass('img-active');
                img_u.addClass('img-active');
            }
    }
    

});