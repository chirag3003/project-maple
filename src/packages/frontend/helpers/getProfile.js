import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/miniavs";

export const getProfileImage = (name = "pro") => {
    name = name.toLowerCase();
    return createAvatar(style, {
        seed: name,
    });
};
