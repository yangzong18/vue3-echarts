const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = process.env.VUE_APP_BASE_NAME || "Vue Data Admin";
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    host: "127.0.0.1",
    port: 8999,
    open: true,
    setupMiddlewares: function (middlewares, devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }
      !isProd && require("./mock/mock-server.js")(devServer.app);
      return middlewares;
    },
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
        "@UI": resolve("UI"),
      },
    },
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV !== "development", (config) => {
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial",
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk("single");
    });
  },
};
// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
