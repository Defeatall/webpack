import { mul } from './test';
console.log(mul(2, 3));

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

/*
  通过js代码，让某个文件被单独打包成一个chunk
  import动态导入语法：能将某个文件单独打包
*/


  // 懒加载~：当文件需要使用时才加载~
  // 预加载 prefetch：会在使用之前，提前加载js文件 
  // 正常加载可以认为是并行加载（同一时间加载多个文件）  
  // 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
  document.getElementById('btn').onclick = function() {
    // 懒加载~：当文件需要使用时才加载~
    // 预加载 prefetch：会在使用之前，提前加载js文件 
    // 正常加载可以认为是并行加载（同一时间加载多个文件）  
    // 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
    // import(/* webpackChunkName: 'test'*/'./test').then(({ mul }) => {
    //   console.log(mul(4, 5));
    // });
    // import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({ mul }) => {
    //   console.log(mul(4, 5));
    // });
  };
  


// import(/* webpackChunkName: 'test'*/'./test')
//   .then(({ mul, count }) => {
//     // 文件加载成功~
//     // eslint-disable-next-line
//     console.log(mul(2, 5));
//   })
//   .catch(() => {
//     // eslint-disable-next-line
//     console.log('文件加载失败~');
//   });

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
