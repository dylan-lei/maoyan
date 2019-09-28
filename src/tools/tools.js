export default {
    getWeek(len){ // 获取week
        let date = [
            ['今天', '明天', '后天'],
            ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        ]
        let index = new Date().getDay();
        let week = [];
        let bol = true;
        for (let i = 0; i < len; i++) {
            if (i >= 0 && i <= 2) {
                week.push(date[0][i])
            } else {
                index = (index + (bol ? i : 0)) % 7;
                bol = false;
                if (index > week.length - 1) {
                    index = 0;
                }
                week.push(date[1][index++]);
            }
        }
        return week;
    }
}





