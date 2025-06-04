$(function () {

  // メインギャラリー
  $(".visual").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: true,
  });
});

// トピックス・最新情報
$(function () {
  // 表示させる要素の総数をlengthメソッドで取得
  var $numberListLen = $(".t-list-box li").length;
  // デフォルトの表示数の設定
  var defaultNum = 3;
  // ボタンクリックで追加表示させる数の設定
  var addNum = 6;
  // 現在の表示数
  var currentNum = 0;

  $(".t-list-box").each(function () {
    // 「and more」ボタンを表示して「close」ボタンを隠す
    $(this).find(".andmore").show();
    $(this).find(".close-btn").hide();

    // 「defaultNum」の数だけリストを表示
    // 「defaultNum」よりインデックスが大きいリストは隠す
    $(this).find("li:not(:lt(" + defaultNum + "))").hide();

    // 初期のリスト表示ではデフォルト値が現在の表示数となる
    currentNum = defaultNum;

    // 「andmore」ボタンがクリックされた時
    $(".andmore").click(function () {
      // 現在のリスト表示数に追加表示数を加えていく
      currentNum += addNum;

      // 現在のリスト表示数に追加表示数を加えた数のリストを表示する
      $(this).parent().find("li:lt(" + currentNum + ")").slideDown();

      // リストの表示総数より「currentNum」のほうが値が大きい＝リストがすべて表示された時
      if ($numberListLen <= currentNum) {
        // 現在のリスト表示数をデフォルトの表示数の値に戻す
        currentNum = defaultNum;
        // インデックス用の値をリセットする
        indexNum = currentNum - 1;

        // 「andmore」ボタンを隠し、「close」ボタンを表示する
        $(".andmore").hide();
        $(".close-btn").show();

        // 「close」ボタンがクリックされたとき
        $(".close-btn").click(function () {
          // デフォルト表示数以上の値＝インデックスが「indexNum」よりも大きい値のものは非表示にする
          $(this).parent().find("li:gt(" + indexNum + ")").slideUp();

          // 「close」ボタンを隠し、「andmore」ボタンを表示する
          $(this).hide();
          $(".andmore").show();
        });
      }
    });
  });
});


// 作品ギャラリー
$(function () {
  // 表示させる要素の総数をlengthメソッドで取得
  var $numberTListLen = $(".p-list li").length;
  // デフォルトの表示数の設定
  var defaultTNum = 6;
  // ボタンクリックで追加表示させる数の設定
  var addTNum = 6;
  // 現在の表示数
  var currentTNum = 0;

  $(".p-list").each(function () {
    // 「and more」ボタンを表示して「close」ボタンを隠す
    $(this).find(".andmore").show();
    $(this).find(".close-btn").hide();

    // 「defaultNum」の数だけリストを表示
    // 「defaultNum」よりインデックスが大きいリストは隠す
    $(this).find("li:not(:lt(" + defaultTNum + "))").hide();

    // 初期のリスト表示ではデフォルト値が現在の表示数となる
    currentTNum = defaultTNum;

    // 「andmore」ボタンがクリックされた時
    $(".andmore").click(function () {
      // 現在のリスト表示数に追加表示数を加えていく
      currentTNum += addTNum;

      // 現在のリスト表示数に追加表示数を加えた数のリストを表示する
      $(this).parent().find("li:lt(" + currentTNum + ")").slideDown();

      // リストの表示総数より「currentNum」のほうが値が大きい＝リストがすべて表示された時
      if ($numberTListLen <= currentTNum) {
        // 現在のリスト表示数をデフォルトの表示数の値に戻す
        currentTNum = defaultTNum;
        // インデックス用の値をリセットする
        indexTNum = currentTNum - 1;

        // 「andmore」ボタンを隠し、「close」ボタンを表示する
        $(".andmore").hide();
        $(".close-btn").show();

        // 「close」ボタンがクリックされたとき
        $(".close-btn").click(function () {
          // デフォルト表示数以上の値＝インデックスが「indexNum」よりも大きい値のものは非表示にする
          $(this).parent().find("li:gt(" + indexTNum + ")").slideUp();

          // 「close」ボタンを隠し、「andmore」ボタンを表示する
          $(this).hide();
          $(".andmore").show();
        });
      }
    });
  });
});

// ハンバーガーメニュー
// ハンバーガーメニューボタンを変数に格納
const hamburgerBtn = $(".hamburger");

// メニュー開閉ボタンをラップしている要素を変数に格納
const headerInner = $(".header-inner");

// ハンバーガーメニューをクリックしたとき
hamburgerBtn.click(function () {
  // ラップ要素に「active」というクラス名を付与する
  headerInner.toggleClass("active");
});

// ページトップに戻るボタン
$(function() {
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $('body, html').animate({ scrollTop: 0}, 500);
  });
});