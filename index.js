d3.selectAll("p").style("color", "white"); //选择标签
// d3.select("body").style("background-color", "black");
d3.selectAll("h1,h2").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)"; //动态的修改样式
});
d3.selectAll("p").style("background-color", function(d, i) {
    return i % 2 ? "#ff00ff" : "#ffff";
});
d3.selectAll("span").data([4, 8, 15, 16, 23, 42]).style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
}).style("font-size", function(d) {
    return d + "px";
}); //数据驱动样式，同时可以链式连接

//数据和节点不对称的时候使用enter和exit
var p = d3.select("body")
    .selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .text(function(d) {
        return "updata"+d; });

p.enter().append("p")
    .text(function(d) {
        return "enter"+d; });

// 动画
d3.select("body").transition()
    .style("background-color", "#00ccff");
