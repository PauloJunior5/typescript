import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "pjunior.live@gmail.com",
    senha: "123456",
    techs: ["NodeJS", "ReactJS", "React Native", {
      title: 'Javascript',
      experience: 100,
    }],
  });

  return response.json({
    message: "Hello World by Paulo Junior ☀",
  });
}
