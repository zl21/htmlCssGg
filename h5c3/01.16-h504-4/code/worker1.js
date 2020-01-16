// 在子线程中使用 onmessage方法进行监听 主线程发来的数据  window对象调用
onmessage = function (d) {
    // 监听事件的第一个参数，包含主线程发来的数据  保存在data属性中
    // console.log(d);
    // console.log(d.data);

    //对数据进行处理
    let re = d.data + "JS";

    //把处理好的数据返回给主线程
    postMessage(re);

}