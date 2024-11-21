$(document).ready(function () {
    $('#messagebar-container').html(`
        <div class="messagebar-nav" id="messagebar-nav">
            <div class="project-title">2024 플업 프로젝트</div>

            <div class="message-item channel">
                <div class="message-item-title">
                    <div class="message-title-wrap">
                        <div class="icon-arrow"></div>
                        <div class="message-title">채널</div>
                    </div>
                    <div class="icon-plus"></div>
                </div>

                <div class="message-item-channel">
                    <div class="circle">
                        <div class="inner-circle"></div>
                    </div>
                    <div class="channel-title">개발자_채널</div>
                </div>

                <div class="message-item-channel">
                    <div class="circle">
                        <div class="inner-circle"></div>
                    </div>
                    <div class="channel-title">개발자_채널</div>
                </div>

                <div class="message-item-channel">
                    <div class="circle">
                        <div class="inner-circle"></div>
                    </div>
                    <div class="channel-title">개발자_채널</div>
                </div>
            </div>

            <div class="message-item dm">
                <div class="message-item-title">
                    <div class="message-title-wrap">
                        <div class="icon-arrow"></div>
                        <div class="message-title">다이렉트 메세지</div>
                    </div>
                    <div class="icon-plus"></div>
                </div>

                <div class="message-item-dm">
                    <img class="user-image" src="https://github.com/user-attachments/assets/d772f546-7bbb-4d3e-b78c-d5c0e2cacdf8">
                    <div class="channel-title">이동재</div>
                </div>

                <div class="message-item-dm">
                    <img class="user-image" src="https://github.com/user-attachments/assets/7c62ec70-5c90-4ba2-850e-c7c18fb73031">
                    <div class="channel-title">김예현</div>
                </div>

                <div class="message-item-dm">
                    <img class="user-image" src="https://github.com/user-attachments/assets/0a9cbdb2-3544-448e-a196-bfb0a0c0cb6a">
                    <div class="channel-title">한근형</div>
                </div>
            </div>

            

            <div class="resizer" id="resizer"></div>
        </div>
    `);

    const $messagebarNav = $('#messagebar-nav');
    const $resizer = $('#resizer');

    // 로컬 스토리지에서 너비 값 가져오기
    const savedWidth = localStorage.getItem('messagebarNavWidth');
    if (savedWidth) {
        $messagebarNav.width(savedWidth);
    }

    let isResizing = false;

    $(document).on('mousedown', '#resizer', function(event) {
        isResizing = true;
        const startX = event.clientX;
        const startWidth = $messagebarNav.width();

        $(document).on('mousemove', function(event) {
            if (isResizing) {
                const newWidth = startWidth - (startX - event.clientX);
                $messagebarNav.width(newWidth);
            }
        });

        $(document).on('mouseup', function() {
            isResizing = false;
            $(document).off('mousemove');
            $(document).off('mouseup');

            // 너비 값을 로컬 스토리지에 저장
            localStorage.setItem('messagebarNavWidth', $messagebarNav.width());
        });

        event.preventDefault();
    });

    //채널 클릭 시, 채널 list 숨기기
    $('.message-title-wrap').on('click', function() {
        $(this).closest('.message-item').find('.message-item-channel, .message-item-dm').toggleClass('hidden');
        $(this).find('.icon-arrow').toggleClass('rotate');
    });

    //채널 호버 시, 채널 추가 버튼 show
    $('.message-item-title').hover(function() {
        $(this).find($('.icon-plus')).show();
    }, function() {
        $(this).find($('.icon-plus')).hide();
    }
)
    
});