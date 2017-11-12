import * as restify from 'restify';
import { bootstrap as bootstrapHealthCheck } from './healthcheck';
import { bootstrap as bootstrapMiddleware } from './middleware';
import { bootstrap as bootstrapRestricted } from './restricted';

export const bootstrap = (server: restify.Server) => {
    bootstrapMiddleware(server);
    bootstrapHealthCheck(server);
    bootstrapRestricted(server);
};
