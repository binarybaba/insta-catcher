import { Request, Response, NextFunction} from 'express'
import { RequestType } from "../types";

export const ensureInstaLinkExists = (req: Request<RequestType>, res: Response, next: NextFunction) => {
    const { instagramPostLink } = req.body;
    if(!instagramPostLink) {
        res.sendStatus(401)
    } else {
        next();
    }
}