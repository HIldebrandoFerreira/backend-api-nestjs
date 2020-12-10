import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get('')
  async healthcheck(): Promise<any> {
    return await this.githubService.healthcheck();
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
