import { ForbiddenException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { compare } from 'bcrypt'
import { UserService } from 'src/user/user.service'
import { AuthDto } from './dtos/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(authDto: AuthDto) {
    const user = await this.userService.getByName(authDto.name)

    if (user) {
      throw new ForbiddenException('Это имя уже занято')
    } else {
      const newUser = await this.userService.create(authDto)

      return {
        ...newUser,
        accessToken: await this.issueToken(newUser),
      }
    }
  }

  public async login(authDto: AuthDto) {
    const user = await this.userService.getByName(authDto.name)

    if (!user) {
      throw new ForbiddenException('Пользователь с таким именем не существует')
    } else {
      await this.checkUserPassword(authDto, user)

      return {
        ...user,
        accessToken: await this.issueToken(user),
      }
    }
  }

  private async issueToken(user: User) {
    return await this.jwtService.signAsync({ sub: user.id })
  }

  private async checkUserPassword(authDto: AuthDto, user: User) {
    const isPasswordCorrect = await compare(authDto.password, user.password)

    if (!isPasswordCorrect) {
      throw new ForbiddenException('Неправильный пароль')
    }
  }
}
