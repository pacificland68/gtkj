let config = {
    contentUrls:{
        //三维可视化服务
        "threeVisualizationService":"http://68.68.12.64/suplicThree/",
        //二三维一体化服务
        "twoDimenIntegration":"http://onemap.szpl.gov:9001/plomap/index.html?config=config-SuplicThree.json&layerConfig=config.xml",
        //空间业务核查服务
        "verificationService":"http://onemap.szpl.gov:9001/plomap/dgtx/txOutAction.file?method=getspatial&txIsSaveCoords=false&isHideUpload=true&type=newCheck&myLayerTree=config-dg-onemap.xml",
        //业务专题统计服务
        "statisticService":"http://onemap.szpl.gov:9001/plomap/view/biStatView/",
        //CAD高清制图服务
        "drawingService":"http://onemap.szpl.gov:9001/plomap/view/publicityView/main.html?configArr=config-publicityView.json&layerType=fdtz",
        //模型计算服务
        "modelCalculationService":"http://mpip.szpl.gov/multiPlanSynergy/model/modelAction.go?method=getModelConfigMainlist",
        //地址匹配服务
        "addressMatchingService":"",
    },

    menuUrls:{
        // 数据资源目录
        "url_data_resource":"http://metadata.pnr.sz:9005/lnddatamanagenew/redirect/sso?target=http://metadata.pnr.sz:9005/JSJZYML/&ssotoken=",
        // 二三维一体化
        "integrated":"http://onemap.szpl.gov:9001/plomap/index.html?config=config-SuplicThree.json&layerConfig=config.xml",
        // CAD出图
        "build":"http://onemap.szpl.gov:9001/plomap/view/publicityView/main.html?configArr=config-publicityView.json&layerType=fdtz",
        // 数据统计可视化
        "visualization":"http://onemap.szpl.gov:9001/plomap/view/biStatView/",
        // 三维应用开发
        "treeDimentional":"http://68.68.12.64/Demo/",
        // 电子政务平台
        "egov": "szpl.gov",
        // 国土空间规划“一张图”实施监督信息系统
        "onemap":"http://gtkj.pnr.sz/index.jsp",
        // "多规合一"信息平台
        "dghy": "http://mpip.szpl.gov/transfer.go?method=toIndex",
        // 图形开发手册（plomap）
        "plomapUrl":"http://officeweb.pnr.sz:8003/?furl=E%3A%5Cfiles%5Cfbptfiles%2FmenuItem%2F110%2F%E5%9B%BE%E5%BD%A2%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C(plomap).docx",
        // 图形开发手册(sde)
        "sdeUrl": "http://officeweb.pnr.sz:8003/?furl=E%3A%5Cfiles%5Cfbptfiles%2FmenuItem%2F108%2F%E5%9B%BE%E5%BD%A2%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C(sde%E7%BB%84%E4%BB%B6).docx",
        // 业务嵌套图形应用
        "picAppUrl": "http://officeweb.pnr.sz:8003/?furl=E%3A%5Cfiles%5Cfbptfiles%2FmenuItem%2F109%2F%E4%B8%9A%E5%8A%A1%E5%B5%8C%E5%A5%97%E5%9B%BE%E5%BD%A2%E5%BA%94%E7%94%A8.docx",
        // 权限微服务
        "rightMicroService": "http://officeweb.pnr.sz:8003/?furl=E%3A%5Cfiles%5Cfbptfiles%2FmenuItem%2F10487748%2F%E6%9D%83%E9%99%90%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3.docx",
        // 安全
        "security": "http://officeweb.pnr.sz:8003/?furl=E%3A%5Cfiles%5Cfbptfiles%2FmenuItem%2F11039368%2F%E7%94%B5%E5%AD%90%E7%AD%BE%E7%AB%A0%E3%80%81%E7%94%B5%E5%AD%90%E7%AD%BE%E5%90%8D%E3%80%81%E7%AD%BE%E5%90%8D%E9%AA%8C%E7%AD%BE%E3%80%81%E6%97%B6%E9%97%B4%E6%88%B3%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%E4%B9%A6.docx",
        // login
        "login": "http://officeweb.pnr.sz:8003/?furl=E%3A%5Cfiles%5Cfbptfiles%2FmenuItem%2F91%2F%E7%BB%9F%E4%B8%80%E7%99%BB%E5%BD%95%E5%AF%B9%E6%8E%A5%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3%20.docx",
        // 工作流
        "workflow": "http://officeweb.pnr.sz:8003/?furl=E%3A%5Cfiles%5Cfbptfiles%2FmenuItem%2F93%2F%28%E5%B9%B3%E5%8F%B0%E6%8A%80%E6%9C%AF%E9%83%A8%29%E5%B7%A5%E4%BD%9C%E6%B5%81%E5%B9%B3%E5%8F%B0-%E5%AF%B9%E5%A4%96API%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3-20190426%281%29_749b.docx",
        //三维可视化服务
        "threeVisualizationService":"http://68.68.12.64/suplicThree/",
        //空间业务核查服务
        "verificationService":"http://onemap.szpl.gov:9001/plomap/dgtx/txOutAction.file?method=getspatial&txIsSaveCoords=false&isHideUpload=true&type=newCheck&myLayerTree=config-dg-onemap.xml",
        // 业务专题统计服务
        "BusinessStatisticalService": "http://onemap.szpl.gov:9001/plomap/view/biStatView/",
        // 模型计算服务
        "modelCalculateService": "http://mpip.szpl.gov/multiPlanSynergy/model/modelAction.go?method=getModelConfigMainlist",
        // 三维应用开发
        "threeVisualizationDev": "http://68.68.12.64/Demo/",
        // 三维统计分析API
        "threeStatisticalAnalysis": "http://68.68.12.64:8090/diglobeservice/templates/views/module/apidoc/index.html",
        // 人脸识别文档
        "faceDocument": "http://officeweb.pnr.sz:8003/?furl=E%3A%5Cfiles%5Cfbptfiles%2FmenuItem%2F111%2F%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%AE%9E%E6%96%BD%E8%AF%B4%E6%98%8E.docx",
        "data_resource": "http://192.168.102.92:7078/szgtkjdata/redirect/sso?target=1http://192.168.102.92:7088/datacatalog/#/transfer?pathName=data_source_meta_data"
    },

    dashboardContainerUrls:{
        //现状数据
        "curData":"#",
        //规划数据
        "planData":"#",
        //管理数据
        "manaData":"#",
        //更多
        "more":"#"
    },

    platformUrls:{
        // // 人脸认证二维码
        "qrcode4Face":"http://socket.msgate.pnr.sz/rest/certification/getQrcode4Face",
        //人脸认证URL
        "socketCertUrl":"ws://socket.msgate.pnr.sz/websocket/cert/",
        //人脸登录URL
        "login4face":"http://gtkjpb.msgate.pnr.sz/login4Face"
    },

    loginUrls:{
        // 门户AES登录URL
        "loginAesEncryptUrl":"http://gtkjpb.msgate.pnr.sz/loginAesEncrypt",
        // "loginAesEncryptUrl":"http://localhost:8080/loginAesEncrypt",
        // 登出URL
        "logoutUrl":"http://gtkjpb.msgate.pnr.sz/logout",

        //获取验证码
        "getVerification": "http://gtkjpb.msgate.pnr.sz/getRandom"
        // "getVerification": "http://localhost:8080/getRandom"
    }

}
export default config;