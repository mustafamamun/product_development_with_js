import crypto from 'crypto';
import config from 'config';
export const hash = (str)=>{
  const sum = crypto.createHash('sha256');
  sum.update(str+config.get('authConfig.passwordSalt'));
  return sum.digest('hex');
};
