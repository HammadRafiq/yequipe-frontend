module.exports = {
  devServer: {
    contentBase: "./app",
    compress: true,
    proxy: {
      "/graphql": {
        target: "https://yequipe-api.el.r.appspot.com",
        secure: false,
      },
    },
  },
};
