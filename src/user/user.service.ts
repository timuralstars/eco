import { Injectable } from '@nestjs/common'
import { genSalt, hash } from 'bcrypt'
import { AuthDto } from 'src/auth/dtos/auth.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserService {
  private readonly SALT: number = 5

  constructor(private readonly prisma: PrismaService) {}

  public async create({ name, password }: AuthDto) {
    password = await hash(password, await genSalt(this.SALT))
    return await this.prisma.user.create({
      data: {
        name,
        password,
      },
    })
  }

  public async getByName(name: string) {
    return await this.prisma.user.findUnique({ where: { name } })
  }

  public async getById(id: string) {
    return await this.prisma.user.findUnique({ where: { id } })
  }
}
