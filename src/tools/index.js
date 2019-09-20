export function scrollBootom(callback) {
    if (callback !== null) {
        document.addEventListener("scroll",s);
    } else if (callback === null) {
        document.removeEventListener("scroll",s);
    }
    function s(e) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        if (scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
            callback();
        }
    }
}