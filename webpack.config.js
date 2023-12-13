module.exports = {
  devServer: {
    contentBase: "./app",
    compress: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:4001",
        // target: "https://yequipe-api.el.r.appspot.com",
        secure: false,
      },
    },
  },
};
