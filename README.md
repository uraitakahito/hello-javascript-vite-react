```console
% vite build
% docker run -d --init --rm -p 8080:80 --mount type=bind,src=`pwd`/dist,dst=/usr/share/nginx/html --name nginx-container nginx
```

Go to http://localhost:8080 and you should see the app running.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
