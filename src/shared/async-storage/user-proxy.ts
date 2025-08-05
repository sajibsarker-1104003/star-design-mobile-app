import { InjectableProxy } from 'nestjs-cls';

@InjectableProxy()
export class UserProxy {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  username: string;
  email: string;
  
  dob?: Date;
  otp?: string;

  isAdmin?: boolean;
  isVendor?: boolean;
  isCustomer?: boolean;
  isAffiliate?: boolean;
  isVerified?: boolean;

  isGoogleLogin?: boolean;
  isFacebookLogin?: boolean;

  loginAttempts: number;
  lastLoginAttempt?: Date;
  lockedUntil?: Date;

  isLogin?: boolean;
  isLogout?: boolean;
  lastLogin?: Date;
  lastLogout?: Date;

  createdAt: Date;
  updatedAt: Date;

  vendorId?: number;
  customerId?: number;
  affiliateId?: number;

  active: boolean;
}
