import { Request, Response, NextFunction} from 'express'
import { RequestType } from "../types";

export const ensureInstaLinkExists = (req: Request<RequestType>, res: Response, next: NextFunction) => {
    const { instagramPostLink } = req.body;
    if(!instagramPostLink) {
        res.sendStatus(401)
    } else {
        const [protocol, slashslash, wwwinstagramcom, p, ] = instagramPostLink.split('/');
        if(wwwinstagramcom !== 'www.instagram.com' || p !== 'p' ) {
            res.send({
                mediaId: '',
                isVideo: false,
                transloadedLink: 'https://storage.googleapis.com/insat_catch/http-400-bad-request.jpeg',
                colors: null
            })
        } else {
            next();
        }
    }
}