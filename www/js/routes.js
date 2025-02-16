
var routes = [
  {
    path: "/",
    url: "./index.html",
  },
  {
    path: "/about/",
    url: "./pages/about.html",
  },
  {
    path: "/form/",
    url: "./pages/form.html",
  },
  {
    path: "/mas-comprados/",
    url: "./pages/mas-comprados.html",
  },
  {
    path: "/home/",
    url: "./pages/home.html",
  },
  {
    path: "/historial-compras/",
    url: "./pages/historial-compras.html",
  },
  {
    path: "/lista-lider/",
    url: "./pages/lista-lider.html",
  },
  {
    path: "/lista-personalizada/",
    url: "./pages/lista-personalizada.html",
  },
  {
    path: "/productos/",
    componentUrl: "./pages/productos.html",
  },
  {
    path: "/productos-favoritos/",
    url: "./pages/productos-favoritos.html",
  },
  {
    path: "/cuenta/",
    url: "./pages/cuenta.html",
  },
  {
    path: "/catalog/",
    componentUrl: "./pages/catalog.html",
  },
  {
    path: "/product/:id/",
    componentUrl: "./pages/product.html",
  },
  {
    path: "/settings/",
    url: "./pages/settings.html",
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    componentUrl: "./pages/dynamic-route.html",
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: "./pages/request-and-load.html",
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: "(.*)",
    url: "./pages/404.html",
  },
];
