const base = {
    get() {
        return {
            url : "http://localhost:8080/xianshangyiyuanguahaoxitong/",
            name: "xianshangyiyuanguahaoxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xianshangyiyuanguahaoxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "线上医院挂号系统"
        } 
    }
}
export default base
