
$(document).ready(function () {
    /*获取商品分类列表
    */

    $.ajax({
        url:'http://flea.itwang.wang/api/categorys',
        type:'get',
        success:function (data) {
         //   console.log(data);
            var all=data.result;
            var html="<a href='#' class='list-group-item active'>分类： <span class='glyphicon glyphicon-list' aria-hidden='true' style='float: right;'></span></a>";
            all.forEach(function (item) {
                html+="<a href='#' class='list-group-item' id='"+item.id+"'>"+item.category_name+"</a>"
            });
            $('.category').html(html);
        }

    });
/*
注册
 */
   $('#reg').on('click',function () {
      var email=$('#r-e-mail').val();
      var nickname=$('#nickname').val();
      var pass=$('#r-pass').val();
      var spass=$('#s-r-pass').val();
      if(pass==spass){
          register(email,pass,nickname);
      }
      else
          alert("密码不一致!");
   });
   function register(email,pass,nickname) {
       $.ajax({
           url: 'http://flea.itwang.wang/api/auth/register',
           type: 'post',
           data: {'email': email, 'password':pass,'nickname':nickname},
           success: function (data) {
               console.log(data);
               if(!data.errcode){

                   //成功获取result,do something

               }else{
                   alert(data.message);
               }
           }

       });
   }
    /*
    登录
     */
    $('#log').on('click',function () {
        var x=$('#l-e-mail').val();
       console.log(x);
       var y=$('#l-pass').val();
        console.log(y);
        logvalid(x,y);
    });
    function logvalid(x,y) {
       $.ajax({
           url:'http://flea.itwang.wang/api/auth/token',
           type:'post',
           data:{'email':x,'password':y},
           success:function (data) {
               console.log(data);
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

/*
点击商品列表获取相应的物品
 */

$('.category').on('click','a',function () {
    var id=this.id;
    console.log(id);
    getGoodsList(id);
    
});

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
                var all=data.result;
                var html='';
                all.forEach(function (item) {
                    console.log("user:"+item.user);
                    html+="<div class='thumbnail' style='width: 200px;height: 300px;float: left;margin: 5px;'><img src='"+item.thumb+"' alt='暂无图片'" +
                        "style='width: 200px;height: 200px;'/> <div class='captain'><a href='#'><p>"+item.name+"</p></a>"
                    +"<span style='font-size: 10px;margin-right: 10px;'>"+item.updated_at+"</span><span><i><a href='user_tail.html?user_id='"+item.user_id+"'>"+item.user.nickname+"</a></i></span></div></div>";
                });
                $('.col-md-10').html(html);
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