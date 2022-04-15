$(function () {

  //ページ内スクロール
  var navHeight = $(".gnav").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

var tabs = document.getElementById('tabcontrol').getElementsByTagName('a');
    var pages = document.getElementById('tabbody').getElementsByTagName('div');

    // ---------------------------
    // ▼B：タブの切り替え処理
    // ---------------------------
    function changeTab() {
      // ▼B-1. href属性値から対象のid名を抜き出す
      var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

      // ▼B-2. 指定のタブページだけを表示する
      for(var i=0; i<pages.length; i++) {
          if( pages[i].id != targetid ) {
            pages[i].style.display = "none";
          }
          else {
            pages[i].style.display = "block";
          }
      }

      // ▼B-3. クリックされたタブを前面に表示する
      for(var i=0; i<tabs.length; i++) {
          tabs[i].style.zIndex = "0";
      }
      this.style.zIndex = "10";

      // ▼B-4. ページ遷移しないようにfalseを返す
      return false;
    }

    // ---------------------------
    // ▼C：すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
    // ---------------------------
    for(var i=0; i<tabs.length; i++) {
      tabs[i].onclick = changeTab;
    }

    // ---------------------------
    // ▼D：最初は先頭のタブを選択しておく
    // ---------------------------
    tabs[0].onclick();
