import { useContext } from "react";
import AppContext from "src/state/app/context";


export const Thumbnail = () => {
    const { state } = useContext(AppContext);
    const { mediaLink, isMediaVideo, instagramPostLink, isRequesting } = state;
    if(mediaLink) {
        return (
            <>
                <img src={mediaLink} />
                {instagramPostLink ? <a href={instagramPostLink}>go!</a> : null}
            </>
        )
    }
    if(isRequesting) {
        return <div>requesting</div>
    }
    return null;
}

export default Thumbnail;