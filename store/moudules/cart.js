export default {
<<<<<<< HEAD
    state:{
        shopList:[
            {
                id:"1",
                name: "商品一"
            }
        ]
    },
    getters:{
        
    },
    mutations:{
        
    },
    actions:{
        
    }
}
=======
    state: {
        shoppingCartList: [
            
                {
                checked: false,
                id: "text",
                good_name: "小米9",
                attrs: [{
                        title: "颜色",
                        selected: 0,
                        list: [{
                                name: "黄色"
                            },
                            {
                                name: "黑色"
                            },
                            {
                                name: "红色"
                            },
                        ]
                    },
                    {
                        title: "容量",
                        selected: 0,
                        list: [{
                                name: "64GB"
                            },
                            {
                                name: "128GB"
                            },
                        ]
                    },
                    {
                        title: "套餐",
                        selected: 0,
                        list: [{
                                name: "标配"
                            },
                            {
                                name: "套餐一"
                            },
                            {
                                name: "套餐二"
                            },
                        ]
                    }
                ],
                good_price: "996",
                num: "1",
                min_num: "1",
                max_num: "5",
                extra: [{
                    title: "服务",
                    content: "意外保证",
                    price: "99起"
                }]
            },
            {
                checked: false,
                id: "text1",
                good_name: "小米9",
                attrs: [{
                        title: "颜色",
                        selected: 0,
                        list: [{
                                name: "黄色"
                            },
                            {
                                name: "黑色"
                            },
                            {
                                name: "红色"
                            },
                        ]
                    },
                    {
                        title: "容量",
                        selected: 0,
                        list: [{
                                name: "64GB"
                            },
                            {
                                name: "128GB"
                            },
                        ]
                    },
                    {
                        title: "套餐",
                        selected: 0,
                        list: [{
                                name: "标配"
                            },
                            {
                                name: "套餐一"
                            },
                            {
                                name: "套餐二"
                            },
                        ]
                    }
                ],
                good_price: "996",
                num: "1",
                min_num: "1",
                max_num: "5",
                extra: [{
                    title: "服务",
                    content: "意外保证",
                    price: "99起"
                }]
            }
        ],
        // 已选中ID
        selectedList:[]
    },
    getters: {
        //购物车为空
        checkedNull: (state)=> {
            return state.shoppingCartList.length === 0
        },
        // 全选
        checkedAll: (state)=> {
            return state.shoppingCartList.length === state.selectedList.length
        },
        // 合计
        totalPrice: (state)=> {
            var total = 0
            state.shoppingCartList.forEach(v=> {
                if(state.selectedList.indexOf(v.id) > -1) {
                    total += parseFloat(v.good_price) * parseFloat(v.num);
                }
            })
            return total
        },
        // 禁用全选
        disableSelectAll: (state)=> {
            return state.shoppingCartList.length === 0
        }
    },
    mutations: {
        // 选中/取消商品
        selectByOne(state,index) {
            // 判断是否为选中
            let id = state.shoppingCartList[index].id;
            if(state.selectedList.indexOf(id) > -1) {
                // 已经选中，取消
                state.shoppingCartList[index].checked = false;
                // 移除选中列表
                return state.selectedList.splice(state.selectedList.indexOf(id),1)
            } else {
                state.shoppingCartList[index].checked = true;
                state.selectedList.push(id)
            }
        },
        // 全选
        selectAll(state) {
            state.selectedList = state.shoppingCartList.map(v=> {
                // 设置状态
                v.checked = true;
                return v.id
            })
        },
        // 取消全选
        unSelectAll(state) {
            state.shoppingCartList.forEach(v=> {
                v.checked = false
            })
            state.selectedList = []
        },
        delGoods(state) {
            if(state.selectedList.length ===0) {
                return
            }
            for(let i = 0; i < state.selectedList.length; i++) {
                state.shoppingCartList.splice(state.shoppingCartList.indexOf(state.selectedList[i]),1)
            }
            state.selectedList = [];
        }
    },
    actions: {
        doSelectAll({ commit,getters }) {
            getters.checkedAll? commit('unSelectAll') : commit('selectAll')
        },
        doDelGoods( {commit} ) {
            commit('delGoods')
        }
    }
}
>>>>>>> msqx-dev
