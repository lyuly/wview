;(window._iconfont_svg_string_3879356 =
  '<svg><symbol id="arrow-system_sort_ascending_line" viewBox="0 0 1024 1024"><path d="M548.4 804.6h-73.1V204.3l245.3 245.3-51.7 51.7-120.5-120.4z" fill="#0F1F3C" ></path></symbol><symbol id="arrow-system_arrow_right_line" viewBox="0 0 1024 1024"><path d="M426.6 755.2L375 703.6l193.1-193.2L375 317.3l51.6-51.6 244.7 244.7z" fill="#0F1F3C" ></path></symbol><symbol id="arrow-system_arrow_left_line" viewBox="0 0 1024 1024"><path d="M595.9 757L350.6 511.7l245.3-245.3 51.7 51.7L454 511.7l193.6 193.5z" fill="#0F1F3C" ></path></symbol><symbol id="arrow-system_arrow_down_line" viewBox="0 0 1024 1024"><path d="M705.6 376.2L512 569.8 318.5 376.2 266.7 428 512 673.2 757.3 428z" fill="#0F1F3C" ></path></symbol><symbol id="arrow-system_arrow_up_line" viewBox="0 0 1024 1024"><path d="M705.6 647.3L512 453.7 318.4 647.3l-51.7-51.7L512 350.3l245.3 245.3z" fill="#0F1F3C" ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var o,
        i,
        l,
        s,
        a,
        d = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      ;(o = function () {
        var t,
          e = document.createElement('div')
        ;(e.innerHTML = n._iconfont_svg_string_3879356),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild ? d(e, t.firstChild) : t.appendChild(e))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o()
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((l = o),
            (s = n.document),
            (a = !1),
            c(),
            (s.onreadystatechange = function () {
              'complete' == s.readyState && ((s.onreadystatechange = null), r())
            }))
    }
    function r() {
      a || ((a = !0), l())
    }
    function c() {
      try {
        s.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(c, 50)
      }
      r()
    }
  })(window)
