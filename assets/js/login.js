//  验证码js
var sends = {
        checked: 1,
        send: function() {
            var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            //获取输入邮箱并用正则表达式把空格替换为空字符
            var val = $('#forgot-email').val().replace(/\s+/g, "");
            var vall = $('#fotgot-email').val().replace(/\s+/g, "");
            if ($('.div-email').find('span').length == 0 && $('.div-email a').attr('class') == 'send1') {
                if (!email.test(val) || val.length == 0) {
                    $('.div-email').append('<span class="error">Error</span>');
                    return false;
                }
            }
            if ($('.div-email').find('span').length == 0 && $('.div-email a').attr('class') == 'send1') {
                if (!email.test(vall) || vall.length == 0) {
                    $('.div-email').append('<span class="error">Error</span>');
                    return false;
                }
            }
            if (email.test(val)) {
                var time = 60;
                $('.div-email span').remove();

                function timeCountDown() {
                    if (time == 0) {
                        clearInterval(timer);
                        $('.div-email a').addClass('send1').removeClass('send0').html("发送验证码");
                        sends.checked = 1;
                        return true;
                    }
                    $('.div-email a').html(time + "S后再次发送");
                    time--;
                    return false;
                    sends.checked = 0;
                }
                $('.div-email a').addClass('send0').removeClass('send1');
                timeCountDown();
                var timer = setInterval(timeCountDown, 1000);
            }
            if (email.test(vall)) {
                var time = 60;
                $('.div-email span').remove();

                function timeCountDown() {
                    if (time == 0) {
                        clearInterval(timer);
                        $('.div-email a').addClass('send1').removeClass('send0').html("发送验证码");
                        sends.checked = 1;
                        return true;
                    }
                    $('.div-email a').html(time + "S后再次发送");
                    time--;
                    return false;
                    sends.checked = 0;
                }
                $('.div-email a').addClass('send0').removeClass('send1');
                timeCountDown();
                var timer = setInterval(timeCountDown, 1000);
            }
        }
    }
    // 消除重复错误样式
$(".register-login").click(function() {
    $('.div-email span').remove();
})




// 注册验证     


$(document).ready(function() {
    //生成简单数字加法验证码
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

    $('#defaultForm').bootstrapValidator({
        //        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
        fields: {
            rscode: {
                validators: {
                    notEmpty: {
                        message: '注册邀请码不能为空'
                    }
                }
            },
            qyname: {
                validators: {
                    notEmpty: {
                        message: '企业名称不能为空'
                    }
                }
            },
            qyusername: {
                message: '企业账号名错误',
                validators: {
                    notEmpty: {
                        message: '企业账号名不能为空'
                    },
                    regexp: {
                        regexp: /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,12}$/,
                        message: '必须包含数字和字母，以字母开头（长度为6-12位）'
                    },
                    // stringLength: {
                    //     min: 6,
                    //     max: 12,
                    //     message: '企业账号名长度为6到12位'
                    // },
                    // remote: {
                    //     url: 'remote.php',
                    //     message: 'The username is not available'
                    // },
                    // different: {
                    //     field: 'password',
                    //     message: 'The username and password cannot be the same as each other'
                    // }
                }
            },
            email: {
                validators: {
                    emailAddress: {
                        message: '邮箱格式错误'
                    },
                    notEmpty: {
                        message: '邮箱不能为空'
                    }
                }
            },
            // mbemail: {
            //     validators: {
            //         emailAddress: {
            //             message: '邮箱格式错误'
            //         }
            //     }
            // },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码必须在6到12位'
                    },
                    // identical: {
                    //     field: 'confirmPassword',
                    //     message: 'The password and its confirm are not the same'
                    // },
                    different: {
                        field: 'qyusername',
                        message: '密码不能和企业账户名一样'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'password',
                        message: '密码和确认密码不一致'
                    },
                    different: {
                        field: 'qyusername',
                        message: '确认密码不能和企业账户名一样'
                    }
                }
            },
            // newpassword: {
            //     validators: {
            //         notEmpty: {
            //             message: '密码不能为空'
            //         },
            //         stringLength: {
            //             min: 6,
            //             max: 12,
            //             message: '密码必须在6到12位'
            //         },
            //         // identical: {
            //         //     field: 'confirmPassword',
            //         //     message: 'The password and its confirm are not the same'
            //         // },
            //         different: {
            //             field: 'qyusername',
            //             message: '密码不能和企业账户名一样'
            //         }
            //     }
            // },
            // newconfirmPassword: {
            //     validators: {
            //         notEmpty: {
            //             message: '密码不能为空'
            //         },
            //         identical: {
            //             field: 'password',
            //             message: '密码和确认密码不一致'
            //         },
            //         different: {
            //             field: 'qyusername',
            //             message: '确认密码不能和企业账户名一样'
            //         }
            //     }
            // },
            // birthday: {
            //     validators: {
            //         date: {
            //             format: 'YYYY/MM/DD',
            //             message: 'The birthday is not valid'
            //         }
            //     }
            // },
            // gender: {
            //     validators: {
            //         notEmpty: {
            //             message: 'The gender is required'
            //         }
            //     }
            // },
            // 'languages[]': {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please specify at least one language you can speak'
            //         }
            //     }
            // },
            // 'programs[]': {
            //     validators: {
            //         choice: {
            //             min: 2,
            //             max: 4,
            //             message: 'Please choose 2 - 4 programming languages you are good at'
            //         }
            //     }
            // },

            // 加法验证
            captcha: {
                validators: {
                    callback: {
                        message: '答案错误!',
                        callback: function(value, validator) {
                            var items = $('#captchaOperation').html().split(' '),
                                sum = parseInt(items[0]) + parseInt(items[2]);
                            return value == sum;
                        }
                    }
                }
            }
        },
        //    submitHandler: function (validator, form, submitButton) {
        //         alert("submit");
        //     }
    });

    $('#defaultFormm').bootstrapValidator({
        //        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
        fields: {
            rscode: {
                validators: {
                    notEmpty: {
                        message: '注册邀请码不能为空'
                    }
                }
            },
            qyname: {
                validators: {
                    notEmpty: {
                        message: '企业名称不能为空'
                    }
                }
            },
            qyusername: {
                message: '企业账号名错误',
                validators: {
                    notEmpty: {
                        message: '企业账号名不能为空'
                    },
                    regexp: {
                        regexp: /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,12}$/,
                        message: '必须包含数字和字母，以字母开头（长度为6-12位）'
                    },
                    // stringLength: {
                    //     min: 6,
                    //     max: 12,
                    //     message: '企业账号名长度为6到12位'
                    // },
                    // remote: {
                    //     url: 'remote.php',
                    //     message: 'The username is not available'
                    // },
                    // different: {
                    //     field: 'password',
                    //     message: 'The username and password cannot be the same as each other'
                    // }
                }
            },
            // email: {
            //     validators: {
            //         emailAddress: {
            //             message: '邮箱格式错误'
            //         },
            //         notEmpty: {
            //             message: '邮箱不能为空'
            //         }
            //     }
            // },
            mbemail: {
                validators: {
                    emailAddress: {
                        message: '邮箱格式错误'
                    },
                    notEmpty: {
                        message: '邮箱不能为空'
                    }
                }
            },
            // password: {
            //     validators: {
            //         notEmpty: {
            //             message: '密码不能为空'
            //         },
            //         stringLength: {
            //             min: 6,
            //             max: 12,
            //             message: '密码必须在6到12位'
            //         },
            //         // identical: {
            //         //     field: 'confirmPassword',
            //         //     message: 'The password and its confirm are not the same'
            //         // },
            //         different: {
            //             field: 'qyusername',
            //             message: '密码不能和企业账户名一样'
            //         }
            //     }
            // },
            // confirmPassword: {
            //     validators: {
            //         notEmpty: {
            //             message: '密码不能为空'
            //         },
            //         identical: {
            //             field: 'password',
            //             message: '密码和确认密码不一致'
            //         },
            //         different: {
            //             field: 'qyusername',
            //             message: '确认密码不能和企业账户名一样'
            //         }
            //     }
            // },
            newpassword: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码必须在6到12位'
                    },
                    // identical: {
                    //     field: 'confirmPassword',
                    //     message: 'The password and its confirm are not the same'
                    // },
                    // different: {
                    //     field: 'qyusername',
                    //     message: '密码不能和企业账户名一样'
                    // }
                }
            },
            newconfirmPassword: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'newpassword',
                        message: '密码和确认密码不一致'
                    },
                    // different: {
                    //     field: 'qyusername',
                    //     message: '确认密码不能和企业账户名一样'
                    // }
                }
            },
            // birthday: {
            //     validators: {
            //         date: {
            //             format: 'YYYY/MM/DD',
            //             message: 'The birthday is not valid'
            //         }
            //     }
            // },
            // gender: {
            //     validators: {
            //         notEmpty: {
            //             message: 'The gender is required'
            //         }
            //     }
            // },
            // 'languages[]': {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please specify at least one language you can speak'
            //         }
            //     }
            // },
            // 'programs[]': {
            //     validators: {
            //         choice: {
            //             min: 2,
            //             max: 4,
            //             message: 'Please choose 2 - 4 programming languages you are good at'
            //         }
            //     }
            // },

            // 加法验证
            captcha: {
                validators: {
                    callback: {
                        message: '答案错误!',
                        callback: function(value, validator) {
                            var items = $('#captchaOperation').html().split(' '),
                                sum = parseInt(items[0]) + parseInt(items[2]);
                            return value == sum;
                        }
                    }
                }
            }
        },
        //    submitHandler: function (validator, form, submitButton) {
        //         alert("submit");
        //     }
    });

    // // Validate the form manually
    // $('#validateBtn').click(function() {
    //     $('#defaultForm').bootstrapValidator('validate');
    // });

    // $('#resetBtn').click(function() {
    //     $('#defaultForm').data('bootstrapValidator').resetForm(true);
    // });
});

// 验证成功前提交按钮不起作用
$("#defaultForm").submit(function(ev) { ev.preventDefault(); });
$("#defaultFormm").submit(function(ev) { ev.preventDefault(); });
$("#submit").on("click", function() {
    var bootstrapValidator = $("#defaultForm").data('bootstrapValidator');
    bootstrapValidator.validate();
    if (bootstrapValidator.isValid())
        $("#defaultForm").submit();
    else return;
});