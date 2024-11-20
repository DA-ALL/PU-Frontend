$(document).ready(function () {
    $('#messagebar-container').html(`
        <div class="messagebar-nav" id="messagebar-nav">
            <div class="project-title">2024 플업 프로젝트</div>

            <div class="message-item channel">
                <div class="message-item-title">
                    <div class="icon-arrow"></div>
                    <div class="message-title">채널</div>
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

        event.preventDefault(); // 기본 동작 방지
    });
});