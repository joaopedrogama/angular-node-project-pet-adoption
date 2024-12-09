
import { HttpInterceptorFn } from "@angular/common/http";

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({ url: `http://localhost:3000/api/${req.url}` });
  console.log(apiReq.url);
  return next(apiReq);
};
