// import { Injectable } from '@nestjs/common';
// import { MailerService } from '@nestjs-modules/mailer';
// import { IServiceData, ServiceError } from '@/shared/interfaces';
// import { PrismaService } from '@/prisma/prisma.service';

// @Injectable()
// export class MailService {
// 	constructor(
// 		private prisma: PrismaService,
// 		private readonly mailerService: MailerService
// 	) {}

// 	async sendHtmlEmail(to: string, subject: string, htmlBody: string) {
// 		await this.mailerService.sendMail({
// 			to,
// 			subject,
// 			html: htmlBody
// 		});
// 	}

// 	async sendOtpEmail(to: string, otp: string) {
// 		const htmlBody = `
//       <div style="font-family: Arial, sans-serif; text-align: center;">
//         <h2 style="color: #333;">Your OTP Code</h2>
//         <p>Use the code below to verify your identity:</p>
//         <div style="font-size: 32px; font-weight: bold; letter-spacing: 6px; margin: 20px 0; color: #0a66c2;">
//           ${otp}
//         </div>
//         <p>This code will expire in 10 minutes.</p>
//       </div>
//     `;

// 		await this.sendHtmlEmail(to, otp, htmlBody);
// 	}

// 	async forgotPassword(receiverMail: string, content: string) {
// 		try {
// 			const userDetail = await this.prisma.user.findFirst({
// 				where: {
// 					email: receiverMail
// 				},
// 				select: {
// 					email: true,
// 					username: true
// 				}
// 			});

// 			if (!userDetail) {
// 				return { data: 'User not found!!' } as IServiceData;
// 			}

// 			await this.mailerService.sendMail({
// 				to: receiverMail,
// 				subject: 'Password Reset!',
// 				html: `<html>
// <head>
// <style>
// /* Same CSS as before or customize to Dizishore’s style */
// ...
// .header {
//   background-color: #2a9d8f; /* Example Dizishore color */
//   padding: 20px;
//   text-align: center;
// }
// ...
// </style>
// </head>

// <body>
//   <table ...>
//     <tr>
//       <td ...>&nbsp;</td>
//       <td class="container" ...>
//         <div class="header">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="Dizishore Logo" style="max-width: 120px; height: auto;">
//         </div>

//         <div class="content">
//           <p>Dear ${userDetail.username},</p>
//           ${content}
//           <br />
//         </div>

//         <div class="footer">
//           Regards,<br> dizishore.com<br> support@dizishore.com
//         </div>
//       </td>
//       <td ...>&nbsp;</td>
//     </tr>
//   </table>
// </body>
// </html>`
// 			});

// 			return { data: 'email send' } as IServiceData;
// 		} catch (e) {
// 			console.error(e);
// 			return {
// 				businessError: {
// 					type: ServiceError.BAD_REQUEST,
// 					message: 'error while sending email'
// 				}
// 			} as IServiceData;
// 		}
// 	}
// }
