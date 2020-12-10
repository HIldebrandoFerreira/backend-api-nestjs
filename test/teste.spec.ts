import { HttpService } from '@nestjs/common';
import { GithubController } from '../src/github/github.controller';
import { GithubService } from '../src/github/github.service';

describe('Testando a API de forma Simples', () => {
  let githubController: GithubController;
  let githubService: GithubService;
  let httpService: HttpService;

  beforeEach(() => {
    githubService = new GithubService(httpService);
    githubController = new GithubController(githubService);
  });

  describe('Testando a rota - healthcheck', () => {
    it('should return an array of cats', async () => {
      const result = 'Serviço respondendo na rota padrão';
      expect(await githubController.healthcheck()).toBe(result);
    });
  });
});
