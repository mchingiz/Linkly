module.exports = function(){
    var dt = new Date();
    return timestamp =
        (dt.getMonth() + 1) + "/" +
        dt.getDate() + "/" +
        dt.getFullYear() + " " +
        dt.getHours() + ":" +
        dt.getMinutes() + ":" +
        dt.getSeconds() + ":" +
        dt.getMilliseconds();
};