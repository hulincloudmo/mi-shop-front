export default {
    state: {
        addressList:[
          {
              name: "陌上青夏",
              phone: "18019080616",
              area: "广西南宁市",
              address: "陌上之都",
              isDefault: false
          }
        ]
    },
    getters:{
        // 获取默认地址
        getAddressDefult: (state) => {
            return state.addressList.filter(v=>v.isDefault)
        }
    },
    mutations:{
        // 创建收货地址
        createAddress(state,item) {
            state.addressList.unshift(item)
        },
        // 删除收货地址
        delAddress(state,index) {
            state.addressList.splice(index,1)
        },
        //修改收货地址
        updateAddress(state,{index,item}) {
            for(let key in item) {
              state.addressList[index][key] = item[key] 
            }
            if(item.isDefault) {
                [state.addressList[0],state.addressList[index]] = [state.addressList[index],state.addressList[0]]
            }
        },
        // 默认地址
        removeDefault(state) {
            state.addressList.forEach((v)=>{
                if(v.isDefault) {
                    v.isDefault = false
                }
            })
        }
    },
    actions:{
        updateAddressAction({commit},obj) {
            if(obj.item.isDefault) {
                commit('removeDefault')
            }
            commit('updateAddress',obj)
        },
        createAddressAction({commit},obj) {
            if(obj.isDefault) {
                commit('removeDefault')
            }
            commit('createAddress',obj)
        }
    }
}