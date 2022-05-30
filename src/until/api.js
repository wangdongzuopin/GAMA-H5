import axios from 'axios'
import url from './base'
import service from './request'
// import QS from 'qs'

const A = {
    getSchedule() {
        return service.request({
            method:'get',
            url:`${url}/getSchedule`,
            load:true,
            time:1000
          })
    },
    getSignature(data) {
        return service.request({
            method:'get',
            url:`${url}getSignature?urlStr=`+data,
            load:true,
            time:1000
          })
    }
}

export default A;