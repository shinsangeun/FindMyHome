// @ts-ignore
import jQuery from "jquery";

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = jQuery;
}

function replayFnc() {
    alert("호출")
    $('.video-con li a').unbind('click').bind('click', function(){
        var _vod = $(this).find('.list-thumb').attr('data-vod');
        $('.dim-wrap .replay-area').html('<div id="player-id" data-vod="' + _vod + '"/>').promise().done(function() {
            window.jtbcplayer.getJSON(_vod, {
                'ad' : true,
                'skinmode' : 'pc',
                'apiHost' : 'https://apidev.jtbc.joins.com/'
            });
            $('.dim-wrap').css('display', 'block');
            setTimeout(function() {
                $('.dim-wrap').addClass('on');
            }, 300);
        });
        console.log('replayFnc()');
        return false;
    });
}

const playerTest = () => {
    if (typeof window !== 'undefined') {
        const gdVideo = (gdDiv: string) => {
            var $gdObj = eval(gdDiv);

            if($gdObj.length>0){
                var gdObjPage = $("#"+gdDiv).data("page");

                var gdObjStart = (gdObjPage-1)*16;
                var gdObjEnd = (gdObjPage)*16;

                if($gdObj.length<=gdObjStart && $gdObj.length<gdObjEnd ) {
                    replayFnc();
                    alert('마지막 입니다');
                    return;
                }

                for(var tmpi=gdObjStart; tmpi<$gdObj.length && tmpi<gdObjEnd; tmpi++){
                    $("#"+gdDiv).append(''+
                        '<li>'+
                        '	<a href="#">'+
                        '		<span class="img list-thumb" data-vod="'+$gdObj[tmpi].vodid+'">'+
                        '			<img src="http://fs.jtbc.joins.com'+$gdObj[tmpi].thumburl+'.tn320.jpg" alt="">'+
                        '			<span class="overlay-time">'+
                        '				<em class="hidden">영상 재생시간</em>'+
                        '				'+$gdObj[tmpi].playtime+
                        '			</span>'+
                        '	</span>'+
                        '		<span class="txt">'+
                        '			<em>'+$gdObj[tmpi].subtitle+'</em>'+
                        '			<span>'+$gdObj[tmpi].title+'</span>'+
                        '		</span>'+
                        '	</a>'+
                        '</li>'
                    );
                }
                $("#"+gdDiv).data("page",gdObjPage+1);

                /* 플레이어 */

                /* 다시보기 */
                (window.replayFnc = function() {
                    $('.video-con li a').unbind('click').bind('click', function(){
                        var _vod = $(this).find('.list-thumb').attr('data-vod');
                        $('.dim-wrap .replay-area').html('<div id="player-id" data-vod="' + _vod + '"/>').promise().done(function() {
                            window.jtbcplayer.getJSON(_vod, {
                                'ad' : true,
                                'skinmode' : 'pc',
                                'apiHost' : 'https://apidev.jtbc.joins.com/'
                            });
                            $('.dim-wrap').css('display', 'block');
                            setTimeout(function() {
                                $('.dim-wrap').addClass('on');
                            }, 300);
                        });
                        console.log('replayFnc()');
                        return false;
                    });
                })();

                // const replayFnc = () => {
                //     $('.video-con li a').unbind('click').bind('click', () =>{
                //         var _vod = $(this).find('.list-thumb').attr('data-vod');
                //         $('.dim-wrap .replay-area').html('<div id="player-id" data-vod="' + _vod + '"></div>').promise().done(function() {
                //             window.jtbcplayer.getJSON(_vod, {
                //                 'ad' : true,
                //                 'skinmode' : 'pc',
                //                 'apiHost' : 'http://api-v2.jtbc.joins.com/'
                //             });
                //             $('.dim-wrap').css('display', 'block');
                //             setTimeout(function() {
                //                 $('.dim-wrap').addClass('on');
                //             }, 300);
                //         });
                //         console.log('replayFnc()');
                //         return false;
                //     });
                // }
            }

        }

        function gdMore(gdDiv){
            gdVideo(gdDiv);
        }

        $(document).ready(function(){
            gdVideo('gd2021');
            gdVideo('gd2020');
            gdVideo('gd2019');
            // gdVideo('gd2018');
            // gdVideo('gd2017');
            // gdVideo('gd2016');
        });
    }

    return(
        <>
            <div className="video-con four">
                <ul id="gd2021" data-page="1">
                    <li>
                        <a href="#">
                            <span className="img list-thumb" data-vod="vo10452949">
                                <img src="http://fs.jtbc.joins.com/joydata/CP00000001/prog/media/goldendisc/img/20210110_193615_498_1.jpg.tn320.jpg" alt=""/>
                                    <span className="overlay-time">
                                        <em className="hidden">영상 재생시간</em>04:01
                                    </span>
                            </span>
                            <span className="txt">
                                <em>[명장면 클립]</em>
                                <span>[제35회 골든디스크] (앙코르) 방탄소년단(BTS) - 'ON'♪｜JTBC 210110 방송</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <span className="img list-thumb" data-vod="vo10204318">
                            <img
                            src="http://fs.jtbc.joins.com/joydata/CP00000007/prog/media/goldendisc/img/20180111_195512_932.jpg.tn320.jpg"
                            alt=""/>
                            <span className="overlay-time">
                                <em className="hidden">영상 재생시간</em>
                                04:12
                            </span>
                        </span>
                    </li>
                </ul>
                <div id="gd2021">

                </div>
                <div id="gd2020">

                </div>
                <div id="gd2019">

                </div>
            </div>
        </>
    )
}

export default playerTest;