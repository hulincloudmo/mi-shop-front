export default {
    state: {
        addressList:[
          {
              name: "陌上青夏",
              phone: "180****0616",
              area: "广西南宁市",
              address: "陌上之都",
              isDefault: false
          }
        ]
    },
    getters:{
        
    },
    mutations:{
        createAddress(state,item) {
            state.addressList.unshift(item)
        },
        delAddress(state,index) {
            state.addressList.splice(index,1)
        },
        //修改收货地址
        updateAddress(state,{index,item}) {
            for(let key in item) {
              state.addressList[index][key] = item[key] 
            }
            
        }
    },
    action:{
        
    }
}