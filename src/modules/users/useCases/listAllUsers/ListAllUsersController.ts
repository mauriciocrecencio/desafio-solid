import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.header("user_id");
    try {
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.send(all);
    } catch (error) {
      return response.status(400).send({ error });
    }
  }
}

export { ListAllUsersController };
