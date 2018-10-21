var cm = {}

cm.loadMore = function (ele, callback) {
  window.onscroll = () => {
    var scrollTop = document.documentElement.scrollTop
    var windowHeight = document.documentElement.clientHeight
    var initHeight = document.getElementsByTagName('html')[0].offsetHeight
    var documentHeight = document.getElementById('list').offsetHeight
    var otherHeight = initHeight - documentHeight
    console.log(otherHeight)
    console.log(scrollTop + 'aaa')
    console.log(documentHeight + otherHeight - windowHeight + 'bbbbb')
    if (scrollTop === documentHeight + otherHeight - windowHeight) {
      callback()
    }
  }
}

export default cm
