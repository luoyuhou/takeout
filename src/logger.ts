import winston, {format} from "winston";
import moment from "moment";
import path from 'path';

const LOG_PATH = './logs';

const filename = () => {
  return moment().format('YYYY-MM-DD') + '.log';
};

const logger = winston.createLogger({
  // level: 'info',
  format: format.combine(
    format.errors({ stack: true }),
    format.splat(),
    format.printf((info) => {
      return `[${moment().format('YYYY-MM-DD HH:mm:ss.SS')}] [${info.level}] ${info.message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(LOG_PATH, filename()) }),
  ],
});

export default logger;