// 上拉加载


export const scrollBootom = (callback) => {
    if (typeof callback === "function") {
        document.onscroll = (e) => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
                try {
                    callback();
                } catch (err) {
                    document.onscroll = null;
                }
            }
        };
    } else if (typeof callback === "undefined" || typeof callback === "null") {
        document.onscroll = null;
    }
}

// 生成二维数组
export function myTowArray(arr, limit) {
    let _arr = [];
    let pages = Math.ceil(arr.length / limit);
    for (let i = 0; i < pages; i++) {
        _arr.push([]);
        for (let k = 0; k < limit; k++) {
            if (arr[i * limit + k] === undefined) break;
            _arr[i].push(arr[i * limit + k]);
        }
    }
    return _arr;

}



