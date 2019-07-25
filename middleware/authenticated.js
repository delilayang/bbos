export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log(store.state.platform.isLogin);
  console.log(store.state.home.memberView);
  // if (!store.state.platform.isLogin) {
  //   return redirect('/Games')
  // }
}