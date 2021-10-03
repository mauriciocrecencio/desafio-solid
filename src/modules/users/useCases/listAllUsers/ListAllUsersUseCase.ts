import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const all = this.usersRepository.list();
    const userExists = this.usersRepository.findById(user_id as string);
    if (!userExists) {
      throw new Error("user doesnt exists");
    }
    if (userExists.admin === false) {
      throw new Error("Mensagem do erro");
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
