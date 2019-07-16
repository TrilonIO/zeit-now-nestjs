import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <div style="text-align:center">
        <h1>Hello World!</h1>
        <h2>NestJS &lt; &gt; Zeit Now</h2>

        <br><br><br><br><br>

        Made with love by
        <a href="https://trilon.io">
          Trilon
          <br><br>
          <img src="https://trilon.io/trilon-logo-clear.png" width="500" height="auto">
        </a>
      </div>
    `;
  }
}
