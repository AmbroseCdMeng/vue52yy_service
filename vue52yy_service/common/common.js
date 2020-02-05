/**
 * 公共方法
 * */

var common = {
    /**
     * 返回32位全球唯一码
     * @return {string}
     * */
    Guid: function (split = '') {
        let guid = '';
        for (let i = 0; i < 32; i++) {
            guid += Math.floor(Math.random() * 16.0).toString(16);
            if ((i === 8) || (i === 12) || (i === 16) || (i === 20))
                guid += split;
        }
        return guid;
    }
};

module.exports = common;