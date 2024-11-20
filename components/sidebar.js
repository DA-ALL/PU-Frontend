$(document).ready(function () {
    $('#sidebar-container').html(`
        <div class="sidebar-nav">
            <div class="project-logo">
                <img src="https://github.com/user-attachments/assets/a598eabf-16b8-41d3-97a2-e7970e88e7f2">
            </div>
            <div class="nav-item home" data-type="home">
                <div class="icon-wrapper">
                    <img src="https://github.com/user-attachments/assets/6baba09c-1c72-442e-8c97-33822453ddb1">
                </div>
                <span class="nav-title">홈</span>
            </div>
            <div class="nav-item board" data-type="board">
                <div class="icon-wrapper">
                    <img src="https://github.com/user-attachments/assets/ac451bfb-afad-4c90-9e0e-a3548ea824ea">
                </div>
                <span class="nav-title">보드</span>
            </div>
            <div class="nav-item calendar" data-type="calendar">
                <div class="icon-wrapper">
                    <img src="https://github.com/user-attachments/assets/6cb1efce-3e45-45c1-9e53-296d1d2704bd">
                </div>
                <span class="nav-title">캘린더</span>
            </div>
        </div>
    `);

    const currentPath = window.location.pathname.split('/').pop();

    // URL에 따라 active 클래스 추가 및 이미지 변경
    if (currentPath === 'home') {
        $('.nav-item.home').addClass('active');
        $('.nav-item.home .icon-wrapper').html(`
            <img src="https://github.com/user-attachments/assets/0a7efb6e-8a03-4e5c-8311-6d7b59a2ec6b">
        `);
    } else if (currentPath === 'calendar') {
        $('.nav-item.calendar').addClass('active');
        $('.nav-item.calendar .icon-wrapper').html(`
            <img src="https://github.com/user-attachments/assets/3cccc25f-05b9-4f1a-aa55-561fcc9f7002">
        `);
    } else if (currentPath === 'board') {
        $('.nav-item.board').addClass('active');
        $('.nav-item.board .icon-wrapper').html(`
            <img src="https://github.com/user-attachments/assets/4b292811-b4b4-4fec-bce7-2e9a46562bfb">
        `);
    }

    $('.nav-item').hover(
        function() {
            $(this).find('.icon-wrapper').css('background-color', '#DCD5E8');
            $(this).find('.nav-title').css({
                'font-size': '12px', 'font-weight': '700'
            });
        },
        function() {
            $(this).find('.icon-wrapper').css('background-color', '');
            $(this).find('.nav-title').css({
                'font-size': '11px', 'font-weight': '500'
            });
        }
    );

    $('.nav-item').on('click', function() {
        const navType = $(this).data('type');

        if (["home", "calendar", "board"].includes(navType)) {
            if (!window.location.pathname.includes(navType)) {
                history.pushState(null, '', `/${navType}`);
            }
        }

        $('.nav-item').removeClass('active');

        $('.nav-item').each(function() {
            if (!$(this).hasClass('active')) {
                const navType = $(this).data('type');
                let originalImage;

                if (navType === "home") {
                    originalImage = "https://github.com/user-attachments/assets/6baba09c-1c72-442e-8c97-33822453ddb1";
                } else if (navType === "calendar") {
                    originalImage = "https://github.com/user-attachments/assets/6cb1efce-3e45-45c1-9e53-296d1d2704bd";
                } else if (navType === "board") {
                    originalImage = "https://github.com/user-attachments/assets/ac451bfb-afad-4c90-9e0e-a3548ea824ea";
                }

                $(this).find('.icon-wrapper').html(`
                    <img src="${originalImage}">
                `);
            }
        });

        $(this).addClass('active');

        if ($(this).hasClass("home")) {
            $(this).find('.icon-wrapper').html(`
                <img src="https://github.com/user-attachments/assets/0a7efb6e-8a03-4e5c-8311-6d7b59a2ec6b">
            `);
        } else if ($(this).hasClass("calendar")) {
            $(this).find('.icon-wrapper').html(`
                <img src="https://github.com/user-attachments/assets/3cccc25f-05b9-4f1a-aa55-561fcc9f7002">
            `);
        } else if ($(this).hasClass("board")) {
            $(this).find('.icon-wrapper').html(`
                <img src="https://github.com/user-attachments/assets/4b292811-b4b4-4fec-bce7-2e9a46562bfb">
            `);
        }

        $(this).find('.icon-wrapper').css('background-color', '#DCD5E8');
    });
});
