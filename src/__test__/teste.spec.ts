import { HttpService } from '@nestjs/common';
import { GithubController } from '../../src/github/github.controller';
import { GithubService } from '../../src/github/github.service';

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
      const res = await githubController.healthcheck();
      expect(res).toBe(result);
    });
  });
  describe('Realizar chamda a API do GitHub', () => {
    it('A Api deve buscar os dados da globocom', async () => {
      const res = await githubController.findAllCountRepositories();
      const result = 'globocom';
      expect(res.login).toBe(result);
    });
    it('Valida se o repositorio e uma oragnização e se a mesma e Globo.com', async () => {
      const res = await githubController.findAllCountRepositories();
      expect(res.type).toBe('Organization');
      expect(res.name).toBe('Globo.com');
    });
  });
});
