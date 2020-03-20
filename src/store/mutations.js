
// 没有异步操作所以暂时不适用
// actions: {
//     changeCity(ctx, city) {
//         ctx.commit('changeCity' , city)
//     }
// }
export default{
    changeCity(state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (e) { }

    }
}