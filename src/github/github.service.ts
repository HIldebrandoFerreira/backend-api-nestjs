import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  async findAllCountRepositories() {
    console.log(
      '::: Efetuando chamada ao github, trazer o total de repositórios :::',
    );
    const response = await this.httpService
      .get('https://api.github.com/users/globocom')
      .toPromise();
    return response.data;
  }

  async findAllRepositories() {
    console.log('::: Efetuando chamada ao github, trazer os repositórios :::');
    const response = await this.httpService
      .get('https://api.github.com/users/globocom/repos')
      .toPromise();
    return response.data;
  }
}
