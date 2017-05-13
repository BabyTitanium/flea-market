$(document).ready(function () {

    /*
     * 商品资源的操作
     */

    //获取商品列表
    function getGoodsList(category_id) {
        $.ajax({
            url:'http://flea.itwang.wang/api/goods',
            type:'get',
            data:{'category_id': category_id},    //商品分类id
            success:function (data) {
                console.log(data);

                //每个返回的数据都携带一个 errcode 值,如果没有错误,该值为0, 否则不为0并携带 message的值的提示信息
                if(!data.errcode){

                    //成功获取result,do something

                }else{
                    alert(data.message);
                }
            },
            error:function () {
                alert('网络错误');
            }
        });
    }

    /**
     * 获取指定id商品
     * @param id
     */
    function getGoods(id) {

        $.ajax({
            url:'http://flea.itwang.wang/api/goods',
            type:'get',
            data:{'id':id},
            success:function (data) {
                console.log(data);

                //每个返回的数据都携带一个 errcode 值,如果没有错误,该值为0, 否则不为0并携带 message的值的提示信息
                if(!data.errcode){

                    //成功获取result,do something

                }else{
                    alert(data.message);
                }
            },
            error:function () {
                alert('网络错误');
            }
        });
    }


    /**
     * 添加商品
     * @param goods
     */
    function addGoods(goods) {

        $.ajax({
            url:'http://flea.itwang.wang/api/goods',
            type:'get',
            data:{
                'name':goods.name,
                'price':goods.price,
                'count':goods.count,
                'thumb':goods.thumb,
                'content':goods.content,
                'category_id':goods.category_id,
            },
            success:function (data) {
                console.log(data);

                //每个返回的数据都携带一个 errcode 值,如果没有错误,该值为0, 否则不为0并携带 message的值的提示信息
                if(!data.errcode){

                    //成功获取result,do something

                }else{
                    alert(data.message);
                }
            },
            error:function () {
                alert('网络错误');
            }
        });
    }

    /**
     * 更新商品
     * @param goods
     */
    function updategoods(goods) {
        $.ajax({
            url:'http://flea.itwang.wang/api/goods',
            type:'put',
            data:{
                'name':goods.name,
                'price':goods.price,
                'count':goods.count,
                'thumb':goods.thumb,
                'content':goods.content,
                'category_id':goods.category_id,
            },
            success:function (data) {
                console.log(data);

                //每个返回的数据都携带一个 errcode 值,如果没有错误,该值为0, 否则不为0并携带 message的值的提示信息
                if(!data.errcode){

                    //成功获取result,do something

                }else{
                    alert(data.message);
                }
            },
            error:function () {
                alert('网络错误');
            }
        });
    }

});