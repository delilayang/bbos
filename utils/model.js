var urlImage = {
    id: null,
    urlPath: '',

    create: function() {
        var obj = new Object();
        obj.id = -1;
        obj.urlPath = '';

        return obj;
    }
}

var navItem = {
    id: null,
    name: '',
    visableSwitch: false, //可視按鈕開關
    settingSwitch: false, //設定按鈕開關
    isDefine: false, //是否為預設
    setPanel: "", //設置面板 

    create: function() {
        var obj = new Object();
        obj.id = -1;
        obj.name = '';
        obj.visableSwitch = false;
        obj.settingSwitch = false;
        obj.isDefine = false;
        obj.setPanel = "";

        return obj;
    }
}

export {
    urlImage,
    navItem,
};