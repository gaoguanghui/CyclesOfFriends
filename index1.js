let clickScroll = function() {
    let item = document.getElementsByClassName("item");
    let content = item[0].getElementsByClassName('content');
    let div = content.getElementsByTagName('div');
    let as = div.getElementsByTagName('a');
    as[0].style.color = "red";
}