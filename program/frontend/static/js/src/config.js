/**
 * Created with JetBrains WebStorm.
 * User: ty
 * Date: 14-10-5
 * Time: 下午5:34
 * To change this template use File | Settings | File Templates.
 */
var config={
    qiNiu:{
        uploadDomain:"http://qiniu-plupload.qiniudn.com/",
        bucketDomain:"http://7vilpp.com1.z0.glb.clouddn.com/"
    },
    ajaxUrls:{
        upload:"qiniu/uptoken",
        getAllTags:"tags/list",
        getAllUsers:"users/list",
        deleteUser:"users/:userId/delete",
        getAllPosts:"artifacts/list",
        getPost:"artifacts/:postId",
        deletePost:"artifacts/:postId/delete",
        deleteTag:"tags/:id/delete"
    },
    type:{
        theme:"主题",
        keyword:"关键词",
        material:"材料"
    },
    role:{
        "admin":"管理员",
        "manager":"资料管理员",
        "user":"用户"
    },
    perLoadCount:{
        table:10
    },
    upload:{
        sizes:{
            all:"5120m"
        },
        filters:{
            all:"*",
            zip:"zip,ZIP",
            img:"jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF"
        }
    },
    validError:{
        required:"请输入此字段！",
        email:"请输入正确的邮箱格式！",
        emailExist:"邮箱已经存在！",
        uploadImg:"请上传图片！",
        number:"请输入数字",
        maxLength:"此字段最多输入${max}个字！",
        minLength:"此字段最少输入${min}个字！",
        rangLength:"此字段只能输入${min}-${max}个字！",
        pwdNotEqual:"两次输入的密码不一样！"
    },
    message:{
        optSuccess:"操作成功！",
        noData:"没有数据",
        progress:"处理中...",
        uploaded:"上传完成！",
        confirmDelete:"确定删除吗？",
        noSelected:"没有选中任何记录！",
        notFound:"资源丢失！",
        loadDataError:"请求数据失败！",
        studentNotFound:"学号不存在，请核对后再提交！",
        networkError:"网络异常，请稍后重试！",
        systemError:"系统错误，请稍后重试或者联系mail@lotusprize.com！",
        optSuccRedirect:"操作成功,3秒后跳转到管理页！",
        timeout:"登录超时，3秒后自动跳到登陆页！",
        imageNot300x300:"图片不是300x300像素！",
        imageMoreThan4:"最多上传4张图片！",
        imageNot600x400:"${filename}不是600x400像素！",
        optError:"服务器端异常，请稍后重试！",
        uploadSizeError:"最大文件大小${value}！",
        uploadExtensionError:"只允许上传${value}！",
        fileNameTooLong:"文件名过长，最大长度为${value}个字！",
        stepOneUnComplete:"第一步有未填写字段！",
        stepTwoUnComplete:"没有上传文件或者有文件正在上传！"
    }
};
$(document).ready(function(){
    $("#opt-body").css("minHeight",$("body").height()-140);
    $("input[type='text'],input[type='email']").blur(function(){
        $(this).val($(this).val().trim());
    });
});
