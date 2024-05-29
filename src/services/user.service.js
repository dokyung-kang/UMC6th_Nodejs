import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

import { signinResponseDTO, memberMissionResponseDTO } from "../dtos/user.dto.js"
import { addUser, getUser, getUserPreferToUserID, setPrefer, addMemberMission, getMemberMission } from "../models/user.dao.js";

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}

export const joinMemberMission = async (body) => {

    const joinMemberMissionData = await addMemberMission({
        'mission_id': body.mission_id,
        'member_id': body.member_id
    });

    if(joinMemberMissionData == -1){
        throw new BaseError(status.MEMBER_NOT_FOUND);
    }else if(joinMemberMissionData == -2){
        throw new BaseError(status.MMISSION_NOT_EXIST);
    }
    else{
        return memberMissionResponseDTO(await getMemberMission(joinMemberMissionData));
    }
}