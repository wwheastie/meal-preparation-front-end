import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("review-order", "pages/review-order.tsx")] satisfies RouteConfig;
