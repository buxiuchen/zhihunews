import axios from 'axios';


const Util={
    imgpath:'http://127.0.0.1:8011/img/',
    apipath:'http://127.0.0.1:8010'
}

Util.ajax=axios.create({
    baseURL:Util.apipath
});

Util.ajax.interceptors.response.use(res=>res.data);
Util.getTodayTime=function(){
    const date=new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}
Util.prevDay=function(timestamp=(new Date).getTime()){
    const date=new Date(timestamp);
    const year=date.getFullYear();
    const mouth=date.getMonth()<10?'0'+(date.getMonth()+1):(date.getMonth()+1);
    const day=date.getDate()<10?'0'+date.getDate():date.getDate();
    return year+mouth+day;
}
export default Util;