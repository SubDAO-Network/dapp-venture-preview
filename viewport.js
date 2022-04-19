;(function(doc, win) {
  var dpr = window.devicePixelRatio || 1
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      let result = 10 * (clientWidth / 1920)

      docEl.style.fontSize = (result < 8 ? 8 : result) + 'px'
      console.log('~~~~', docEl.style.fontSize)
      // set data-dpr，for css hack
      docEl.setAttribute('data-dpr', dpr)
      var delObj = document.getElementById('loading')
      if (delObj) {
        delObj.remove()
      }
      setTimeout(() => {
        doc.body.style.visibility = 'visible'
      }, 500);
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
