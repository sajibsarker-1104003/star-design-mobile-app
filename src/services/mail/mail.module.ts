// import { Module } from '@nestjs/common';
// import { MailerModule } from '@nestjs-modules/mailer';
// import { MailService } from './mail.service';
// import { ConfigModule, ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     MailerModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (config: ConfigService) => ({
//         transport: {
//           host: config.get<string>('SMTP_HOST'),
//           port: config.get<number>('SMTP_PORT'),
//           secure: config.get<boolean>('SMTP_SECURE') === true,
//           auth: {
//             user: config.get<string>('SMTP_USER'),
//             pass: config.get<string>('SMTP_PASS'),
//           },
//           tls: {
//             rejectUnauthorized: false,
//           },
//         },
//         defaults: {
//           from: `"No Reply" <${config.get('SMTP_USER')}>`,
//         },
//       }),
//       inject: [ConfigService],
//     }),
//   ],
//   providers: [MailService],
//   exports: [MailService],
// })
// export class MailModule {}
