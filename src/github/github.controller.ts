import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get()
  helfcheck() {
    console.log('serviço funcionando');
  }

  @Get('/all')
  async findAllCountRepositories() {
    return await this.githubService.findAllCountRepositories();
  }
  @Get('/find')
  async findAllRepositories() {
    return await this.githubService.findAllRepositories();
  }
}
