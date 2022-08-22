import { defineNuxtPlugin } from '#app'
import urql, {
  cacheExchange,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "@urql/vue";
import { devtoolsExchange } from "@urql/devtools";
// export default (ctx) => {
//   // const ssr = ssrExchange({
//   //   isClient: process.client,
//   //   initialState: { a: 1 },
//   // });

//   const exchanges = [dedupExchange, cacheExchange, fetchExchange];


//   if (ctx._legacyContext?.isDev) {
//     exchanges.unshift(devtoolsExchange);
//   }
//   // ctx.useHydration(
//   //   "urql",
//   //   () => {
//   //     const {data}=ssr.extractData();
//   //     return data;
//   //   },
//   //   (data) => {
//   //     console.log("sssssssszzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",data)
//   //     ssr.restoreData(data);
//   //   }
//   // );
  

//   ctx.vueApp.use(urql, {
//     exchanges,
//     url: "http://localhost:8080/v1/graphql",
//   });
// };
export default defineNuxtPlugin((nuxtApp) => {
  const exchanges = [dedupExchange, cacheExchange, fetchExchange];
  nuxtApp.vueApp.use(urql, {
      exchanges,
      url: 'http://localhost:8080/v1/graphql',
  });
});
