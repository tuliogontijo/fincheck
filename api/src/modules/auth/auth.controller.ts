import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDTO } from './dto/signin.dto';
import { SignupDTO } from './dto/signup.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin(@Body() signinDto: SigninDTO) {
    return this.authService.signin(signinDto);
  }

  @Post('/signup')
  signup(@Body() signupDTO: SignupDTO) {
    return this.authService.signup(signupDTO);
  }
}
