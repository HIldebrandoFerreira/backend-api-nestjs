import { Injectable, HttpService } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class GithubService {
  constructor(private http: HttpService) {}

  async healthcheck(): Promise<string> {
    return 'Serviço respondendo na rota padrão';
  }

  async findAllCountRepositories() {
    const response = await axios.get('https://api.github.com/users/globocom');
    return response.data;
  }

  async findAllRepositories() {
    const response = await axios.get(
      'https://api.github.com/users/globocom/repos',
    );
    return response.data;
  }
}
