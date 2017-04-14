选择元素
D3提供了两种高级方法来选择元素：select和selectAll。这些方法接收选择器字符串。前者只返回第一个匹配的元素，后者选择在文档遍历次序中所有匹配的元素。这个方法也可以接受节点，这可以用来和第三方库例如JQuery或者开发工具($0)整合。

# d3.select(selector)

选中与指定选择器字符串匹配的第一个元素，返回单元素选择结果。如果当前文档中没有匹配的元素则返回空的选择。如果有多个元素被选中，只有第一个匹配的元素（在文档遍历次序中）被选中。

# d3.select(node)

选择指定的节点。如果你已经有一个节点的引用这将是很有用的。例如事件监听器中的d3.select(this) 或者一个全局对象例如document.body。这个函数不会遍历DOM树。

# d3.selectAll(selector)

选中匹配指定选择器的所有的元素。这些元素会按照文档的遍历顺序（从上到下）选择。如果当前文档中没有匹配的元素则返回空的选择。

# d3.selectAll(nodes)

选择指定的元素数组。如果你已经有了一些元素的引用这将是很有用的，例如事件监听器中的d3.selectAll(this.childNodes)，或者一个全局对象例如document.links。节点的参数不用恰好是数组；任何可以转化为一个数组的伪数组（例一个NodeList或者 arguments）都可以，这个函数不会遍历DOM树。

## select代码
```
<!DOCTYPE html>
<html lang="en">
<script src="../../d3.js"></script>
<head>
    <meta charset="UTF-8">
    <title>select</title>
</head>
<body>
    <h1></h1>
    <p id="p-text"></p>
    <p class="p-text"></p>
</body>
<script>
    d3.select('h1').text("d3 select demo");
    d3.select('#p-text').text("d3 id 选择器");
    d3.select('.p-text').text("d3 class 选择器");
</script>
</html>
```
浏览器显示如下

![select选择器](http://upload-images.jianshu.io/upload_images/2604175-ca4bcbaa76bc90ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## selectAll代码

```
<script>
d3.select('h1').text("d3 select demo");
d3.select('#p-text').text("d3 id 选择器");
d3.select('.p-text').text("d3 class 选择器");
d3.select('span').text("select选择器只会选择第一个");

//会选择全部匹配的标签
d3.selectAll('p').style("color", function() {
return "hsl(" + Math.random() * 360 + ",100%,50%)"; //动态的修改样式
});
</script>
```
浏览器显示如下

![selectAll选择器](http://upload-images.jianshu.io/upload_images/2604175-99ba1eba673a08fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 自定义属性attr

先给span附上data-name属性

然后选择相应的有data-name属性的节点，附上style
```
//attr
d3.selectAll('span').attr("data-name", "attr-name").text(function(d,i){
    return 'data-name'+i
});
d3.selectAll('[data-name=attr-name]').style("background", "red");
```

## 自定义属性classed

selection.classed(name[, value])
这个操作是用来设置class属性值得便捷程序。它能识别class属性是一个按照空格分隔的标记集合。它能修改节点上的class列表来方便地添加、移除和切换CSS类。
```
//classed
d3.select('div').classed('divBox',true);

## 自定义属性style

# selection.style(name[, value[, priority]])
```
d3.select('div').style('border-radius',"5px");
```
d3.select('div').style('border-radius',"5px",'important');

priority目前可以用important，没有！

## selection.property(name[, value]) 表单元素的特殊属性

一些HTML元素具有特殊属性，它们不能用属性或样式来寻址，例如表单字段的文本值和复选框的复选布尔值。使用此方法获取或设置这些属性。disabled、checked

## selection.text([value])添加文本

```
d3.select('#p-text').text("d3 id 选择器");
d3.select('.p-text').text("d3 class 选择器");
```

## selection.html([value])

```
//html
d3.select('span').html('<i>hahha</i>');
```

## selection.append(type)

创建新元素type，并插入到select当中
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/2604175-eb381d5849dae5e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# selection.insert(type[, before])

 append的用法，insert的用法完全相同，只是多了一个用于指示插入位置的参数，示例如下：
 ```
 d3.select('body').insert('div','.p-text').text("在第二个之前插入这个div")
```

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/2604175-93395ae65335ccfe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## selection.remove()删除节点

```
//remove
d3.select('span:last-child').remove();
```
## selection.enter(),selection.data(),selection.exit()

selection.enter(),当节点数小于data的数据是，enter则重新生成新元素

selection.exit(),当节点数小于data的数据是，exit便会去掉多余的节点
```
//数据和节点不对称的时候使用enter和exit
var p = d3.select("body")
    .selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .text(function(d) {
        return "updata"+d; });

p.enter().append("p")
    .text(function(d) {
        return "enter"+d; })

```
## selection.filter(selector)

```
var odds = selection.select(function(d, i) { return i > 1 });
```
等价地，使用的过滤器函数：
```
var odds = selection.filter(function(d, i) { return i > 1; });
```

## selection.datum([value])


## selection.sort([comparator])


## selection.order()

