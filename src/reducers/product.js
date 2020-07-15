
var initialState = [
    {
        id : 1,
        name : 'Iphone 7',
        image : 'https://vnn-imgs-f.vgcloud.vn/2019/09/11/05/hinh-anh-va-trai-nghiem-dau-tien-ve-iphone-11-11-pro-va-pro-max.jpg',
        description : 'Sản phẩm mới',
        price : 200,
        inventory : 10
    },
    {
        id : 1,
        name : 'Xiaomi',
        image : 'https://znews-photo.zadn.vn/w660/Uploaded/fsmyy/2018_05_31/3_2.jpg',
        description : 'Sản phẩm mới',
        price : 200,
        inventory : 10
    },
    {
        id : 1,
        name : 'Samsung',
        image : 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-white-600x600.jpg',
        description : 'Sản phẩm mới',
        price : 200,
        inventory : 10
    },
]

const products = (state = initialState,action)=>{
    switch(action.type){
        default :
            return [...state];
    }
}

export default products;