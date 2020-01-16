// 在子线程中使用 onmessage方法进行监听 主线程发来的数据  window对象调用
onmessage = function (d) {
    // 计算i的某某某平方根和
    let num = 0;
    for (let i = 1; i < 1000000000; i++) {
        num += Math.sqrt(i);
    }

    //把处理好的数据返回给主线程
    postMessage(num);

}